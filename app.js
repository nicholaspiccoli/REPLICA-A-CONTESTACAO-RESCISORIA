(() => {
  'use strict';

  const state = {
    data: null,
    cy: null,
    selectedId: null,
    query: '',
    typeFilter: 'all',
    groundFilter: 'all'
  };

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const esc = (value = '') => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const strengthLabel = {
    direct: 'direta',
    strong: 'forte',
    context: 'contextual',
    caution: 'cautela'
  };

  async function loadSupabaseData() {
    const cfg = window.SUPABASE_CONFIG || {};
    if (!cfg.url || !cfg.key || !window.supabase) return null;

    const client = window.supabase.createClient(cfg.url, cfg.key, {
      auth: { persistSession: true, autoRefreshToken: true }
    });

    try {
      const [{ data: nodes, error: nodesError }, { data: edges, error: edgesError }, { data: chains, error: chainsError }] = await Promise.all([
        client.from('case_nodes').select('*').order('sort_order', { ascending: true }),
        client.from('case_edges').select('*').order('id', { ascending: true }),
        client.from('priority_chains').select('*').order('sort_order', { ascending: true })
      ]);
      if (nodesError || edgesError || chainsError) throw nodesError || edgesError || chainsError;
      if (!nodes?.length) return null;

      const normalized = {
        grounds: [], documents: [], facts: [], pages: [],
        edges: edges.map(e => ({ source: e.source_id, target: e.target_id, kind: e.kind, label: e.label })),
        priorityChains: chains.map(c => ({ title: c.title, chain: c.chain, text: c.description }))
      };

      for (const n of nodes) {
        const item = {
          id: n.id,
          type: n.node_type,
          roman: n.roman || undefined,
          label: n.label,
          subtitle: n.subtitle || '',
          reference: n.reference_text || '',
          driveUrl: n.drive_url || '',
          grounds: n.grounds || [],
          strength: n.strength || 'context',
          use: n.use_text || ''
        };
        if (n.node_type === 'ground') normalized.grounds.push(item);
        else if (n.node_type === 'document') normalized.documents.push(item);
        else if (n.node_type === 'fact') normalized.facts.push(item);
        else if (n.node_type === 'page') normalized.pages.push(item);
      }
      return normalized;
    } catch (err) {
      console.warn('Supabase indisponível; usando seed local.', err);
      return null;
    }
  }

  function allNodes() {
    return [
      ...state.data.documents,
      ...state.data.facts,
      ...state.data.pages,
      ...state.data.grounds
    ];
  }

  function nodeById(id) {
    return allNodes().find(n => n.id === id);
  }

  function renderMetrics() {
    const totalDocs = state.data.documents.length;
    const totalPages = state.data.pages.length;
    const totalGrounds = state.data.grounds.length;
    const totalEdges = state.data.edges.length;
    $('#heroMetrics').innerHTML = [
      [totalDocs, 'documentos-fonte conectados'],
      [totalPages, 'remissões processuais mapeadas'],
      [totalGrounds, 'fundamentos rescindentes'],
      [totalEdges, 'vínculos probatórios explícitos']
    ].map(([n, label]) => `<div class="metric"><b>${esc(n)}</b><span>${esc(label)}</span></div>`).join('');
  }

  function renderGroundSummary() {
    $('#groundSummary').innerHTML = state.data.grounds.map(g => `
      <article class="ground-card" data-inspect="${esc(g.id)}">
        <strong>ART. 966, ${esc(g.roman)}</strong>
        <h3>${esc(g.label)}</h3>
        <p>${esc(g.subtitle)}</p>
      </article>`).join('');
  }

  function renderPriorityChains() {
    $('#priorityChains').innerHTML = state.data.priorityChains.map(c => `
      <article class="priority-card">
        <div class="chain">${esc(c.chain)}</div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.text)}</p>
      </article>`).join('');
  }

  function matchesNode(n) {
    if (state.typeFilter !== 'all' && n.type !== state.typeFilter) return false;
    if (state.groundFilter !== 'all' && !(n.grounds || []).includes(state.groundFilter) && !(n.type === 'ground' && n.roman === state.groundFilter)) return false;
    if (state.query) {
      const hay = [n.label, n.subtitle, n.reference, n.use, ...(n.grounds || [])].join(' ').toLowerCase();
      if (!hay.includes(state.query.toLowerCase())) return false;
    }
    return true;
  }

  function renderMatrix() {
    const rows = allNodes()
      .filter(n => n.type !== 'ground')
      .filter(matchesNode)
      .map(n => `
        <tr data-inspect="${esc(n.id)}">
          <td><b>${esc(n.label)}</b><br><span class="muted">${esc(n.subtitle)}</span></td>
          <td>${esc(n.reference || '—')}</td>
          <td>${esc((n.grounds || []).join(' · ') || '—')}</td>
          <td><span class="strength ${esc(n.strength || 'context')}">${esc(strengthLabel[n.strength] || n.strength || 'contextual')}</span></td>
          <td>${esc(n.use || '—')}</td>
        </tr>`).join('');
    $('#matrixBody').innerHTML = rows || '<tr><td colspan="5">Nenhum resultado para os filtros atuais.</td></tr>';
  }

  function renderGrounds() {
    $('#groundsGrid').innerHTML = state.data.grounds.map(g => {
      const related = allNodes().filter(n => n.type !== 'ground' && (n.grounds || []).includes(g.roman));
      return `
        <article class="ground-detail">
          <span class="roman">${esc(g.roman)}</span>
          <h2>${esc(g.label)}</h2>
          <p>${esc(g.use)}</p>
          <div class="links">
            ${related.slice(0, 8).map(n => `<button data-inspect="${esc(n.id)}">${esc(n.label)} <span class="muted">· ${esc(n.reference || '')}</span></button>`).join('')}
          </div>
        </article>`;
    }).join('');
  }

  function renderDocuments() {
    const docs = state.data.documents.filter(matchesNode);
    $('#documentsList').innerHTML = docs.map(d => `
      <article class="document-row" data-inspect="${esc(d.id)}">
        <div>
          <h3>${esc(d.label)}</h3>
          <p>${esc(d.reference)} · art. 966 ${esc((d.grounds || []).join('/'))}</p>
        </div>
        ${d.driveUrl ? `<a href="${esc(d.driveUrl)}" target="_blank" rel="noopener noreferrer">Abrir fonte ↗</a>` : ''}
      </article>`).join('') || '<div class="empty-state">Nenhum documento para os filtros atuais.</div>';
  }

  function graphElements() {
    const nodes = allNodes().map(n => ({
      data: {
        id: n.id,
        label: n.type === 'ground' ? `966 · ${n.roman}` : n.label,
        type: n.type,
        grounds: (n.grounds || []).join(','),
        strength: n.strength || 'context'
      }
    }));
    const edges = state.data.edges.map((e, i) => ({ data: { id: `e-${i}`, source: e.source, target: e.target, kind: e.kind || 'support', label: e.label || '' } }));
    return [...nodes, ...edges];
  }

  function presetPositions() {
    const byType = { document: [], fact: [], page: [], ground: [] };
    allNodes().forEach(n => byType[n.type]?.push(n));
    const x = { document: 120, fact: 430, page: 740, ground: 1030 };
    const pos = {};
    Object.entries(byType).forEach(([type, list]) => {
      const gap = Math.max(88, Math.min(130, 760 / Math.max(1, list.length - 1)));
      list.forEach((n, i) => { pos[n.id] = { x: x[type], y: 80 + i * gap }; });
    });
    return pos;
  }

  function initGraph() {
    const positions = presetPositions();
    state.cy = cytoscape({
      container: $('#cy'),
      elements: graphElements(),
      minZoom: 0.35,
      maxZoom: 2.2,
      wheelSensitivity: 0.2,
      layout: { name: 'preset', positions, fit: true, padding: 55 },
      style: [
        {
          selector: 'node',
          style: {
            'shape': 'round-rectangle',
            'width': 184,
            'height': 62,
            'background-color': '#fffdf8',
            'border-width': 1.3,
            'border-color': '#b79a61',
            'label': 'data(label)',
            'font-family': 'Lora, Georgia, serif',
            'font-size': 9.5,
            'font-weight': 600,
            'color': '#25241f',
            'text-wrap': 'wrap',
            'text-max-width': 156,
            'text-valign': 'center',
            'text-halign': 'center',
            'padding': 9,
            'overlay-opacity': 0
          }
        },
        { selector: 'node[type="document"]', style: { 'background-color':'#f5ead4','border-color':'#b79a61' } },
        { selector: 'node[type="fact"]', style: { 'background-color':'#edf1ec','border-color':'#7d8e80' } },
        { selector: 'node[type="page"]', style: { 'background-color':'#edf0f2','border-color':'#7b8790','font-family':'IBM Plex Mono, monospace','font-size':9 } },
        { selector: 'node[type="ground"]', style: { 'background-color':'#3a3831','border-color':'#3a3831','color':'#fffdf8','width':130,'height':54,'font-family':'IBM Plex Mono, monospace','font-size':11 } },
        {
          selector: 'edge',
          style: {
            'width': 1.3,
            'line-color': '#c8b995',
            'target-arrow-color': '#a78c57',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'arrow-scale': 0.75,
            'opacity': 0.78,
            'label': 'data(label)',
            'font-family': 'IBM Plex Mono, monospace',
            'font-size': 6.8,
            'color': '#766f63',
            'text-background-color': '#fffdf8',
            'text-background-opacity': 0.9,
            'text-background-padding': 2,
            'text-rotation': 'autorotate'
          }
        },
        { selector:'edge[kind="support"]', style:{ 'line-style':'dashed','opacity':0.55 } },
        { selector:':selected', style:{ 'border-width':3,'border-color':'#8f7345','line-color':'#8f7345','target-arrow-color':'#8f7345' } },
        { selector:'.dim', style:{ 'opacity':0.08,'text-opacity':0.08 } },
        { selector:'.focus', style:{ 'opacity':1,'z-index':999 } }
      ]
    });

    state.cy.on('tap', 'node', evt => inspect(evt.target.id(), true));
    state.cy.on('tap', evt => {
      if (evt.target === state.cy) clearInspector();
    });
  }

  function updateGraphFilter() {
    if (!state.cy) return;
    const visible = new Set(allNodes().filter(matchesNode).map(n => n.id));
    state.cy.nodes().forEach(node => {
      const show = visible.has(node.id());
      node.style('display', show ? 'element' : 'none');
    });
    state.cy.edges().forEach(edge => {
      const show = edge.source().style('display') !== 'none' && edge.target().style('display') !== 'none';
      edge.style('display', show ? 'element' : 'none');
    });
    setTimeout(() => state.cy.fit(state.cy.elements(':visible'), 55), 20);
  }

  function focusGround(roman) {
    switchView('graph');
    state.typeFilter = 'all';
    state.groundFilter = roman;
    $('#typeFilter').value = 'all';
    $('#groundFilter').value = roman;
    updateAllFilters();
  }

  function inspect(id, fromGraph = false) {
    const n = nodeById(id);
    if (!n) return;
    state.selectedId = id;
    $('#inspectorEmpty').hidden = true;
    const box = $('#inspectorContent');
    box.hidden = false;
    box.innerHTML = `
      <div class="eyebrow">${esc(n.type === 'ground' ? `ART. 966, ${n.roman}` : n.type)}</div>
      <h2>${esc(n.label)}</h2>
      <p>${esc(n.subtitle || '')}</p>
      <div class="inspector-meta">
        <div><span>Remissão</span><b>${esc(n.reference || '—')}</b></div>
        <div><span>Fundamento</span><b>${esc(n.type === 'ground' ? `Art. 966, ${n.roman}` : ((n.grounds || []).map(g => `Art. 966, ${g}`).join(' · ') || '—'))}</b></div>
        <div><span>Uso pró-PICCOLI</span><b>${esc(n.use || '—')}</b></div>
        <div><span>Força</span><b>${esc(strengthLabel[n.strength] || n.strength || 'contextual')}</b></div>
      </div>
      ${n.driveUrl ? `<a class="inspector-link" href="${esc(n.driveUrl)}" target="_blank" rel="noopener noreferrer">Abrir documento-fonte no Drive ↗</a>` : ''}
    `;

    if (state.cy && !fromGraph) {
      const el = state.cy.getElementById(id);
      if (el.length) {
        state.cy.$(':selected').unselect();
        el.select();
      }
    }
  }

  function clearInspector() {
    state.selectedId = null;
    $('#inspectorEmpty').hidden = false;
    $('#inspectorContent').hidden = true;
    if (state.cy) state.cy.$(':selected').unselect();
  }

  function switchView(name) {
    $$('.view').forEach(v => v.classList.toggle('is-active', v.id === `view-${name}`));
    $$('.tab').forEach(b => b.classList.toggle('is-active', b.dataset.view === name));
    if (name === 'graph' && state.cy) setTimeout(() => { state.cy.resize(); state.cy.fit(state.cy.elements(':visible'), 55); }, 40);
  }

  function updateAllFilters() {
    renderMatrix();
    renderDocuments();
    updateGraphFilter();
  }

  function bindEvents() {
    $$('.tab').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
    $$('[data-view-target]').forEach(b => b.addEventListener('click', () => switchView(b.dataset.viewTarget)));

    document.addEventListener('click', e => {
      const target = e.target.closest('[data-inspect]');
      if (target) inspect(target.dataset.inspect);
    });

    $('#typeFilter').addEventListener('change', e => { state.typeFilter = e.target.value; updateAllFilters(); });
    $('#groundFilter').addEventListener('change', e => { state.groundFilter = e.target.value; updateAllFilters(); });
    $('#globalSearch').addEventListener('input', e => { state.query = e.target.value.trim(); updateAllFilters(); });

    $('#resetFilters').addEventListener('click', () => {
      state.typeFilter = state.groundFilter = 'all'; state.query = '';
      $('#typeFilter').value = $('#groundFilter').value = 'all'; $('#globalSearch').value = '';
      updateAllFilters();
    });
    $('#fitGraph').addEventListener('click', () => state.cy?.fit(state.cy.elements(':visible'), 55));
    $('#focusV').addEventListener('click', () => focusGround('V'));
    $('#focusVIII').addEventListener('click', () => focusGround('VIII'));
    $('#focusIII').addEventListener('click', () => focusGround('III'));
    $('#focusVII').addEventListener('click', () => focusGround('VII'));
  }

  async function init() {
    const remote = await loadSupabaseData();
    state.data = remote || window.CASE_SEED;
    const status = $('#dbStatus');
    if (remote) {
      status.textContent = 'Supabase conectado';
      status.classList.remove('status-local');
      status.classList.add('status-db');
    }
    renderMetrics();
    renderGroundSummary();
    renderPriorityChains();
    renderMatrix();
    renderGrounds();
    renderDocuments();
    initGraph();
    bindEvents();
  }

  init();
})();
