(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (value = '') => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const state = {
    db: null,
    events: [], thesis: [], tests: [], scopes: [], sources: [],
    graphNodes: [], graphEdges: [], caseDocuments: [], chains: [],
    phaseFilter: 'ALL', currentEventIndex: 0, currentArticle: 'V', currentGraphFilter: 'ALL',
    currentView: 'journey', currentSourceGroup: 'MONITÓRIA', currentSourceKey: null, cy: null
  };

  const articleOrder = ['V', 'VIII', 'III', 'VII'];
  const statusLabel = { confirmed: 'confirmado', audit: 'depende de auditoria', subsidiary: 'subsidiário', excluded: 'excluído do inciso', context: 'contexto', survives: 'núcleo sobrevivente' };

  function broadPhase(event) {
    if (event.process_kind === 'originario') return 'ORIGINÁRIO';
    if (event.process_kind === 'execucao') return 'EXECUÇÃO';
    return 'RESCISÓRIA';
  }

  function actorClass(actor = '') {
    const a = actor.toUpperCase();
    if (a.includes('PICCOLI')) return 'piccoli';
    if (a.includes('SIMBAL')) return 'simbal';
    if (a.includes('SEFAZ') || a.includes('CARINH') || a.includes('BRADESCO') || a.includes('TERCEIR')) return 'terceiro';
    return 'juizo';
  }

  function actorLane(actor = '') {
    const cls = actorClass(actor);
    return cls === 'piccoli' ? 'PICCOLI' : cls === 'simbal' ? 'SIMBAL' : cls === 'terceiro' ? 'TERCEIROS' : 'JUÍZO / RELATOR';
  }

  function driveId(url = '') {
    const m = String(url).match(/\/d\/([^/]+)/);
    return m ? m[1] : '';
  }

  async function loadData() {
    const cfg = window.SUPABASE_CONFIG || {};
    if (!cfg.url || !cfg.key || !window.supabase) throw new Error('Configuração do Supabase ausente.');
    state.db = window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: false, autoRefreshToken: false } });
    const queries = [
      state.db.from('process_events').select('*').order('sort_order'),
      state.db.from('thesis_evolution').select('*').order('sort_order'),
      state.db.from('legal_tests').select('*').order('article_966').order('step_order'),
      state.db.from('evidence_scope').select('*').order('sort_order'),
      state.db.from('document_reader_sources').select('*').order('sort_order'),
      state.db.from('graph_nodes').select('*').order('created_at'),
      state.db.from('graph_edges').select('*').order('created_at'),
      state.db.from('case_documents').select('*').order('strength', { ascending: false }),
      state.db.from('evidence_chains').select('*').order('strength', { ascending: false })
    ];
    const results = await Promise.all(queries);
    const error = results.find(r => r.error)?.error;
    if (error) throw error;
    [state.events, state.thesis, state.tests, state.scopes, state.sources, state.graphNodes, state.graphEdges, state.caseDocuments, state.chains] = results.map(r => r.data || []);
  }

  function switchView(name) {
    state.currentView = name;
    $$('.view').forEach(v => v.classList.toggle('is-active', v.id === `view-${name}`));
    $$('.tab').forEach(b => b.classList.toggle('is-active', b.dataset.view === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (name === 'graph') setTimeout(() => renderGraph(state.currentGraphFilter), 40);
    if (name === 'autos' && !state.currentSourceKey) {
      const first = state.sources.find(s => s.group_name === state.currentSourceGroup) || state.sources[0];
      if (first) selectSource(first.source_key);
    }
  }

  function renderMetrics() {
    $('#heroMetrics').innerHTML = [
      [state.events.length, 'marcos processuais mapeados'],
      [state.sources.length, 'volumes/fontes dentro do leitor'],
      [state.tests.length, 'requisitos de subsunção explicitados'],
      [4, 'incisos depurados na réplica']
    ].map(([n, label]) => `<div class="metric"><b>${esc(n)}</b><span>${esc(label)}</span></div>`).join('');
  }

  function renderPhaseFilters() {
    const phases = ['ALL', 'ORIGINÁRIO', 'EXECUÇÃO', 'RESCISÓRIA'];
    $('#phaseFilters').innerHTML = phases.map(p => `<button class="phase-filter ${state.phaseFilter === p ? 'is-active' : ''}" data-phase="${p}">${p === 'ALL' ? 'TODOS' : p}</button>`).join('');
  }

  function filteredEvents() {
    return state.events.filter(e => state.phaseFilter === 'ALL' || broadPhase(e) === state.phaseFilter);
  }

  function renderTimeline() {
    const events = filteredEvents();
    if (state.currentEventIndex >= events.length) state.currentEventIndex = Math.max(0, events.length - 1);
    $('#storyCounter').textContent = events.length ? `${state.currentEventIndex + 1} / ${events.length}` : '0 / 0';
    $('#timeline').innerHTML = events.map((e, i) => `
      <button class="timeline-event ${i === state.currentEventIndex ? 'is-selected' : ''}" data-event-key="${esc(e.event_key)}" data-actor="${esc(e.actor)}">
        <span class="event-date">${esc(e.date_label)}</span><i class="event-node"></i><span class="event-phase">${esc(e.phase)}</span>
        <span class="event-copy"><b>${esc(e.title)}</b><small>${esc(e.summary)}</small></span>
        <span class="event-articles">${(e.articles || []).map(a => `<i>${esc(a)}</i>`).join('')}</span>
      </button>`).join('') || '<div class="empty-state">Nenhum evento neste filtro.</div>';
  }

  function renderSwimlane() {
    const events = filteredEvents();
    const lanes = ['SIMBAL', 'PICCOLI', 'JUÍZO / RELATOR', 'TERCEIROS'];
    let html = `<div class="swimlane-head">ATOR ↓ / TEMPO →</div>` + events.map(e => `<div class="swimlane-date">${esc(e.date_label)}</div>`).join('');
    lanes.forEach(lane => {
      html += `<div class="swimlane-actor">${lane}</div>`;
      events.forEach(e => {
        const hit = actorLane(e.actor) === lane;
        html += `<div class="swim-cell">${hit ? `<button class="swim-event ${actorClass(e.actor)}" data-event-key="${esc(e.event_key)}"><b>${esc(e.title)}</b><small>${esc(e.phase)}</small></button>` : ''}</div>`;
      });
    });
    const swim = $('#swimlane');
    swim.style.gridTemplateColumns = `100px repeat(${Math.max(1, events.length)},145px)`;
    swim.innerHTML = html;
  }

  function selectEventByKey(key, scroll = false) {
    const events = filteredEvents();
    const idx = events.findIndex(e => e.event_key === key);
    if (idx >= 0) state.currentEventIndex = idx;
    const e = events[state.currentEventIndex];
    if (!e) return;
    renderTimeline();
    renderEventInspector(e);
    if (scroll) {
      const row = $(`[data-event-key="${CSS.escape(e.event_key)}"]`);
      row?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function stepEvent(delta) {
    const events = filteredEvents();
    if (!events.length) return;
    state.currentEventIndex = Math.max(0, Math.min(events.length - 1, state.currentEventIndex + delta));
    selectEventByKey(events[state.currentEventIndex].event_key, true);
  }

  function renderEventInspector(e) {
    $('#inspectorTitle').textContent = e.title;
    const sourceMatch = state.sources.find(s => driveId(s.view_url) && driveId(s.view_url) === driveId(e.source_url));
    $('#inspectorBody').innerHTML = `
      <div class="eyebrow">${esc(e.date_label)} · ${esc(e.actor)}</div>
      <h3>${esc(e.title)}</h3><p>${esc(e.summary)}</p>
      <div class="inspector-meta">
        <div><span>Fase</span><b>${esc(e.phase)}</b></div>
        <div><span>Remissão</span><b>${esc([e.movement, e.page_ref].filter(Boolean).join(' · ') || '—')}</b></div>
        <div><span>Por que importa</span><b>${esc(e.effect || '—')}</b></div>
        <div><span>Art. 966</span><b>${esc((e.articles || []).join(' · ') || 'contexto processual')}</b></div>
      </div>
      ${sourceMatch ? `<button class="inspector-source" data-source="${esc(sourceMatch.source_key)}">Abrir dentro dos autos →</button>` : e.source_url ? `<a class="inspector-source" href="${esc(e.source_url)}" target="_blank" rel="noopener noreferrer">Abrir documento-fonte ↗</a>` : ''}
    `;
  }

  function renderThesisEvolution() {
    $('#thesisEvolution').innerHTML = state.thesis.map(t => `
      <article class="evolution-card" data-article-card="${esc(t.article_966)}">
        <header class="evolution-head"><div class="evolution-roman">${esc(t.article_966)}</div><div><h3>${esc(t.title)}</h3><p>Trajetória da formulação rescindente</p></div><span class="state-badge ${esc(t.status)}">${esc(statusLabel[t.status] || t.status)}</span></header>
        <div class="evolution-grid">
          <section class="evolution-stage"><span>1 · INICIAL DA RESCISÓRIA</span><b>Formulação original</b><p>${esc(t.initial_position)}</p></section>
          <section class="evolution-stage"><span>2 · CONTESTAÇÃO / RELATOR</span><b>Objeção enfrentada</b><p>${esc(t.objection)}</p></section>
          <section class="evolution-stage"><span>3 · RÉPLICA</span><b>Correção assumida</b><p>${esc(t.reply_refinement)}</p></section>
          <section class="evolution-stage surviving"><span>4 · NÚCLEO SOBREVIVENTE</span><b>O que permanece</b><p>${esc(t.surviving_nucleus)}</p></section>
        </div>
        <div class="evolution-risk"><b>RISCO CONTROLADO:</b> ${esc(t.risk_note || '—')}</div>
      </article>`).join('');
  }

  function renderArticleTabs() {
    $('#articleTabs').innerHTML = articleOrder.map(a => `<button class="article-tab ${a === state.currentArticle ? 'is-active' : ''}" data-article-tab="${a}">ART. 966 · ${a}</button>`).join('');
  }

  function renderLegalTests(article = state.currentArticle) {
    state.currentArticle = article;
    renderArticleTabs();
    const tests = state.tests.filter(t => t.article_966 === article).sort((a,b) => a.step_order - b.step_order);
    $('#legalTests').innerHTML = tests.map((t, i) => `
      <article class="legal-test" data-test-id="${esc(t.id)}">
        <span class="test-order">${String(i + 1).padStart(2,'0')}</span>
        <div class="test-question"><b>${esc(t.test_question)}</b><p>${esc(t.explanation)}</p></div>
        <div class="test-candidate"><span>CANDIDATO</span><b>${esc(t.candidate || '—')}</b><span class="test-status ${esc(t.status)}">${esc(statusLabel[t.status] || t.status)}</span></div>
      </article>`).join('');
    if ($('#microTests')) renderMicroTests();
  }

  function renderMicroTests() {
    const tests = state.tests.filter(t => t.article_966 === 'VIII').sort((a,b) => a.step_order - b.step_order);
    $('#microTests').innerHTML = tests.map((t,i) => `<button class="micro-test" data-test-id="${esc(t.id)}"><span>${String(i+1).padStart(2,'0')}</span><b>${esc(t.test_question)}</b><span class="test-status ${esc(t.status)}">${esc(statusLabel[t.status] || t.status)}</span></button>`).join('');
  }

  function renderTestInspector(t) {
    $('#inspectorTitle').textContent = `Art. 966, ${t.article_966}`;
    $('#inspectorBody').innerHTML = `
      <div class="eyebrow">TESTE DE SUBSUNÇÃO · ${esc(statusLabel[t.status] || t.status)}</div>
      <h3>${esc(t.test_question)}</h3><p>${esc(t.explanation)}</p>
      <div class="inspector-meta"><div><span>Candidato</span><b>${esc(t.candidate || '—')}</b></div><div><span>Fonte / remissão</span><b>${esc(t.source_ref || '—')}</b></div><div><span>Status</span><b>${esc(statusLabel[t.status] || t.status)}</b></div></div>`;
  }

  function renderScopeMatrix() {
    $('#scopeMatrix').innerHTML = state.scopes.map(s => `
      <article class="scope-row">
        <div class="scope-cell scope-label"><span>ELEMENTO</span><b>${esc(s.evidence_type)}</b><p>${esc(s.source_ref || '')}</p></div>
        <div class="scope-cell scope-yes"><span>O QUE DEMONSTRA</span><p>${esc(s.proves)}</p></div>
        <div class="scope-cell scope-no"><span>O QUE NÃO DEMONSTRA SOZINHO</span><p>${esc(s.does_not_prove)}</p></div>
        <div class="scope-cell"><span>LEITURA NA RÉPLICA</span><p>${esc(s.reply_position)}</p>${s.sentence_use ? `<p style="margin-top:7px"><b>Na sentença:</b> ${esc(s.sentence_use)}</p>` : ''}</div>
      </article>`).join('');
  }

  function renderSourceBrowser() {
    const groups = [...new Set(state.sources.map(s => s.group_name))];
    if (!groups.includes(state.currentSourceGroup)) state.currentSourceGroup = groups[0];
    $('#sourceGroups').innerHTML = groups.map(g => `<button class="source-group ${g === state.currentSourceGroup ? 'is-active' : ''}" data-source-group="${esc(g)}">${esc(g)}</button>`).join('');
    const list = state.sources.filter(s => s.group_name === state.currentSourceGroup);
    $('#sourceList').innerHTML = list.map(s => `<button class="source-item ${s.source_key === state.currentSourceKey ? 'is-active' : ''}" data-source="${esc(s.source_key)}"><b>${esc(s.title)}</b><small>${esc([s.folio_range, s.movement, s.page_ref].filter(Boolean).join(' · ') || s.subtitle || '')}</small></button>`).join('');
  }

  function selectSource(key) {
    const s = state.sources.find(x => x.source_key === key);
    if (!s) return;
    state.currentSourceKey = key; state.currentSourceGroup = s.group_name;
    renderSourceBrowser();
    $('#readerGroup').textContent = s.group_name;
    $('#readerTitle').textContent = s.title;
    $('#readerMeta').textContent = [s.subtitle, s.folio_range && `fls. ${s.folio_range}`, s.movement, s.page_ref].filter(Boolean).join(' · ');
    $('#readerFrame').src = s.preview_url;
    $('#readerOpen').href = s.view_url;
  }

  function openSource(key) { switchView('autos'); setTimeout(() => selectSource(key), 50); }

  function openPreview(previewUrl, title = 'Documento-fonte') {
    switchView('autos');
    $('#readerGroup').textContent = 'DOCUMENTO-FONTE';
    $('#readerTitle').textContent = title;
    $('#readerMeta').textContent = 'Fonte individualizada no Google Drive';
    $('#readerFrame').src = previewUrl;
    $('#readerOpen').href = previewUrl.replace('/preview', '/view');
  }

  function graphPositions(nodes) {
    const groups = { document: [], fact: [], decision: [], argument: [], page: [], entity: [] };
    nodes.forEach(n => (groups[n.node_type] || groups.argument).push(n));
    const xs = { document: 150, fact: 470, decision: 790, argument: 1110, page:790, entity:150 };
    const positions = {};
    Object.entries(groups).forEach(([type, list]) => {
      const gap = Math.max(92, Math.min(126, 760 / Math.max(1, list.length - 1)));
      list.forEach((n, i) => positions[n.node_key] = { x: xs[type] || 790, y: 70 + i * gap });
    });
    return positions;
  }

  function renderGraph(filter = 'ALL') {
    state.currentGraphFilter = filter;
    $$('.graph-filter').forEach(b => b.classList.toggle('is-active', b.dataset.graphFilter === filter));
    const visible = state.graphNodes.filter(n => filter === 'ALL' || n.article_966 === filter || n.article_966 === 'GERAL');
    const ids = new Set(visible.map(n => n.node_key));
    const positions = graphPositions(visible);
    const elements = [
      ...visible.map(n => ({ data:{ id:n.node_key, label:n.label, type:n.node_type, article:n.article_966 || 'GERAL', strength:n.strength || 3 }, position:positions[n.node_key] })),
      ...state.graphEdges.filter(e => ids.has(e.source_node_key) && ids.has(e.target_node_key)).map((e,i) => ({ data:{ id:`edge-${i}`, source:e.source_node_key, target:e.target_node_key, label:e.label || e.relation || '', relation:e.relation || '' } }))
    ];
    state.cy?.destroy();
    state.cy = cytoscape({
      container: $('#cy'), elements, layout:{ name:'preset', fit:true, padding:55 }, minZoom:.34, maxZoom:2.2, wheelSensitivity:.18,
      style:[
        { selector:'node', style:{ 'shape':'round-rectangle','width':195,'height':66,'background-color':'#fffdf8','border-width':1.3,'border-color':'#b59a65','label':'data(label)','font-family':'Lora','font-size':10,'font-weight':600,'color':'#24231f','text-wrap':'wrap','text-max-width':164,'text-valign':'center','text-halign':'center','padding':8,'overlay-opacity':0 } },
        { selector:'node[type="document"]', style:{ 'background-color':'#f3e5cc','border-color':'#b59a65','width':210 } },
        { selector:'node[type="fact"]', style:{ 'background-color':'#e7eee7','border-color':'#6d8170' } },
        { selector:'node[type="decision"]', style:{ 'background-color':'#f1e4e1','border-color':'#91645e','width':210 } },
        { selector:'node[type="argument"]', style:{ 'background-color':'#2f302d','border-color':'#2f302d','color':'#fffdf8','width':160,'font-family':'IBM Plex Mono','font-size':9 } },
        { selector:'node[article="GERAL"][type="argument"]', style:{ 'background-color':'#ede0ca','border-color':'#b59a65','color':'#4a3e2c' } },
        { selector:'edge', style:{ 'width':1.4,'line-color':'#c5b284','target-arrow-color':'#9c814f','target-arrow-shape':'triangle','curve-style':'taxi','taxi-direction':'rightward','taxi-turn':'24px','arrow-scale':.72,'opacity':.75,'label':'data(label)','font-family':'IBM Plex Mono','font-size':6.4,'color':'#756b5c','text-background-color':'#fffdf8','text-background-opacity':.9,'text-background-padding':2 } },
        { selector:'.dim', style:{ 'opacity':.08,'text-opacity':.08 } }, { selector:'.focus', style:{ 'opacity':1,'z-index':999 } }, { selector:':selected', style:{ 'border-width':3,'border-color':'#80663d' } }
      ]
    });
    state.cy.on('tap','node',ev => inspectGraphNode(ev.target));
    state.cy.on('tap',ev => { if (ev.target === state.cy) state.cy.elements().removeClass('dim focus'); });
  }

  function inspectGraphNode(node) {
    state.cy.elements().addClass('dim').removeClass('focus');
    node.closedNeighborhood().removeClass('dim').addClass('focus'); node.select();
    const n = state.graphNodes.find(x => x.node_key === node.id());
    if (!n) return;
    const rels = state.graphEdges.filter(e => e.source_node_key === n.node_key || e.target_node_key === n.node_key);
    const doc = n.document_id ? state.caseDocuments.find(d => d.id === n.document_id) : null;
    $('#inspectorTitle').textContent = n.label;
    $('#inspectorBody').innerHTML = `<div class="eyebrow">${esc(n.node_type)} · ${esc(n.article_966 || 'GERAL')}</div><h3>${esc(n.label)}</h3><p>${esc(n.subtitle || '')}</p><div class="inspector-meta"><div><span>Remissão</span><b>${esc(n.page_ref || doc?.origin_pages || '—')}</b></div><div><span>Força</span><b>${'●'.repeat(n.strength || 3)}${'○'.repeat(5-(n.strength || 3))}</b></div><div><span>Relações</span><b>${rels.length} vínculos explícitos</b></div></div>${doc?.probative_value ? `<p><b>Valor probatório:</b> ${esc(doc.probative_value)}</p>` : ''}${n.source_url ? `<a class="inspector-source" target="_blank" rel="noopener noreferrer" href="${esc(n.source_url)}">Abrir documento-fonte ↗</a>` : ''}`;
  }

  function buildSearchIndex() {
    const items = [];
    state.events.forEach(e => items.push({ type:'evento', title:e.title, subtitle:`${e.date_label} · ${e.phase}`, text:[e.title,e.summary,e.effect,e.actor,e.page_ref,e.movement,(e.articles||[]).join(' ')].join(' '), action:() => { switchView('journey'); state.phaseFilter='ALL'; renderPhaseFilters(); renderTimeline(); renderSwimlane(); selectEventByKey(e.event_key,true); } }));
    state.thesis.forEach(t => items.push({ type:`art. 966 ${t.article_966}`, title:t.title, subtitle:'evolução da tese', text:[t.initial_position,t.objection,t.reply_refinement,t.surviving_nucleus].join(' '), action:() => { switchView('evolution'); setTimeout(() => $(`[data-article-card="${t.article_966}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),60); } }));
    state.tests.forEach(t => items.push({ type:`teste ${t.article_966}`, title:t.test_question, subtitle:statusLabel[t.status] || t.status, text:[t.test_question,t.candidate,t.explanation,t.source_ref].join(' '), action:() => { switchView('tests'); renderLegalTests(t.article_966); renderTestInspector(t); } }));
    state.sources.forEach(s => items.push({ type:'autos', title:s.title, subtitle:s.group_name, text:[s.title,s.subtitle,s.folio_range,s.movement,s.page_ref].join(' '), action:() => openSource(s.source_key) }));
    state.scopes.forEach(s => items.push({ type:'alcance da prova', title:s.evidence_type, subtitle:s.article_966 || 'geral', text:[s.proves,s.does_not_prove,s.reply_position].join(' '), action:() => { switchView('scope'); } }));
    state.graphNodes.forEach(n => items.push({ type:'nó probatório', title:n.label, subtitle:n.article_966 || 'geral', text:[n.label,n.subtitle,n.page_ref,n.article_966].join(' '), action:() => { switchView('graph'); setTimeout(() => { renderGraph('ALL'); const el=state.cy?.getElementById(n.node_key); if(el?.length){state.cy.center(el); state.cy.zoom({level:1.05,position:el.position()}); inspectGraphNode(el);} },90); } }));
    return items;
  }

  function handleSearch(q) {
    const box = $('#searchResults');
    const term = q.trim().toLowerCase();
    if (term.length < 2) { box.hidden = true; box.innerHTML=''; return; }
    const results = buildSearchIndex().filter(i => `${i.title} ${i.subtitle} ${i.text}`.toLowerCase().includes(term)).slice(0,18);
    box.innerHTML = results.length ? results.map((r,i) => `<button class="search-result" data-search-index="${i}"><span>${esc(r.type)}</span><b>${esc(r.title)}</b><small>${esc(r.subtitle)}</small></button>`).join('') : '<div class="empty-state">Nenhum resultado.</div>';
    box.hidden = false;
    box._results = results;
  }

  function bindEvents() {
    $$('.tab').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
    document.addEventListener('click', e => {
      const go = e.target.closest('[data-go]'); if (go) { switchView(go.dataset.go); return; }
      const phase = e.target.closest('[data-phase]'); if (phase) { state.phaseFilter=phase.dataset.phase; state.currentEventIndex=0; renderPhaseFilters(); renderTimeline(); renderSwimlane(); const first=filteredEvents()[0]; if(first) renderEventInspector(first); return; }
      const eventEl = e.target.closest('[data-event-key]'); if (eventEl) { selectEventByKey(eventEl.dataset.eventKey); return; }
      const eventAlias = e.target.closest('[data-event]'); if (eventAlias) { switchView('journey'); state.phaseFilter='ALL'; renderPhaseFilters(); renderTimeline(); renderSwimlane(); setTimeout(() => selectEventByKey(eventAlias.dataset.event,true),60); return; }
      const article = e.target.closest('[data-article]'); if (article) { switchView('tests'); renderLegalTests(article.dataset.article); return; }
      const articleTab = e.target.closest('[data-article-tab]'); if (articleTab) { renderLegalTests(articleTab.dataset.articleTab); return; }
      const test = e.target.closest('[data-test-id]'); if (test) { const t=state.tests.find(x=>x.id===test.dataset.testId); if(t) renderTestInspector(t); return; }
      const source = e.target.closest('[data-source]'); if (source) { openSource(source.dataset.source); return; }
      const sg = e.target.closest('[data-source-group]'); if (sg) { state.currentSourceGroup=sg.dataset.sourceGroup; const first=state.sources.find(s=>s.group_name===state.currentSourceGroup); if(first) selectSource(first.source_key); else renderSourceBrowser(); return; }
      const doc = e.target.closest('[data-doc-url]'); if (doc) { openPreview(doc.dataset.docUrl, 'SEFAZ/AM — Nota Técnica / NF-e 9.883'); return; }
      const gf = e.target.closest('[data-graph-filter]'); if (gf) { renderGraph(gf.dataset.graphFilter); return; }
      if (!e.target.closest('.searchbox') && !e.target.closest('.search-results')) $('#searchResults').hidden = true;
    });
    $('#prevEvent').addEventListener('click', () => stepEvent(-1));
    $('#nextEvent').addEventListener('click', () => stepEvent(1));
    $('#globalSearch').addEventListener('input', e => handleSearch(e.target.value));
    $('#searchResults').addEventListener('click', e => { const b=e.target.closest('[data-search-index]'); if(!b) return; const r=$('#searchResults')._results?.[Number(b.dataset.searchIndex)]; $('#searchResults').hidden=true; if(r) r.action(); });
    $('#judgeMode').addEventListener('click', () => { document.body.classList.toggle('judge-mode'); $('#judgeMode').textContent = document.body.classList.contains('judge-mode') ? 'Sair do modo julgamento' : 'Modo julgamento'; if(state.currentView==='graph') setTimeout(()=>renderGraph(state.currentGraphFilter),60); });
    window.addEventListener('scroll', () => { const root=document.documentElement,max=root.scrollHeight-root.clientHeight,p=max?root.scrollTop/max*100:0; $('#readingProgress').style.width=`${p}%`; }, { passive:true });
  }

  function initialRender() {
    renderMetrics(); renderPhaseFilters(); renderTimeline(); renderSwimlane(); renderThesisEvolution(); renderLegalTests('V'); renderScopeMatrix(); renderSourceBrowser(); renderMicroTests();
    const first = filteredEvents()[0]; if (first) renderEventInspector(first);
  }

  async function init() {
    bindEvents();
    try {
      await loadData();
      $('#dbStatus').textContent = 'Supabase conectado'; $('#dbStatus').classList.remove('status-local'); $('#dbStatus').classList.add('status-db');
      initialRender();
    } catch (err) {
      console.error(err); $('#dbStatus').textContent = 'falha na base';
      $('#timeline').innerHTML = '<div class="empty-state">Não foi possível carregar a base estruturada. Recarregue a página ou confira a conexão.</div>';
    }
  }

  init();
})();
