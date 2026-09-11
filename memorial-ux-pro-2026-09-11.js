(() => {
  'use strict';
  if (window.__PICCOLI_JUDICIAL_UX_PRO__) return;
  window.__PICCOLI_JUDICIAL_UX_PRO__ = true;

  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];
  const main = q('main');
  if (!main) return;

  const style = document.createElement('style');
  style.id = 'judicial-ux-pro-style';
  style.textContent = `
    :root{--ux-paper:#fffdf9;--ux-line:#d8cec0;--ux-ink:#272522;--ux-muted:#71695f;--ux-gold:#9c7b43;--ux-red:#8f2f2f;--ux-green:#496a5b;--ux-blue:#465d72}
    .ux-hidden{display:none!important}
    #ux-modebar{position:fixed;right:18px;bottom:18px;z-index:120;display:flex;gap:6px;padding:6px;border:1px solid rgba(156,123,67,.25);background:rgba(247,243,236,.94);backdrop-filter:blur(16px);border-radius:999px;box-shadow:0 14px 36px rgba(35,31,27,.12)}
    #ux-modebar button{border:0;background:transparent;color:#6f655a;font:800 9px Inter;letter-spacing:.08em;text-transform:uppercase;padding:9px 11px;border-radius:999px;cursor:pointer}#ux-modebar button.on{background:#171817;color:#fff}
    #ux-orient{position:fixed;right:18px;top:88px;width:220px;z-index:44;background:rgba(255,253,249,.94);border:1px solid var(--ux-line);border-radius:18px;padding:14px;box-shadow:0 12px 30px rgba(35,31,27,.08);backdrop-filter:blur(12px);transition:.2s}
    #ux-orient .ey{font:800 8px Inter;letter-spacing:.13em;text-transform:uppercase;color:var(--ux-red)}#ux-orient h5{font:600 14px/1.2 Lora;margin:5px 0 10px}#ux-orient dl{margin:0;display:grid;grid-template-columns:58px 1fr;gap:5px 7px;font-size:9.5px}#ux-orient dt{font-weight:800;color:#81776c;text-transform:uppercase;letter-spacing:.05em}#ux-orient dd{margin:0;color:#4f4942}
    .ux-compare{margin:20px 0;border:1px solid var(--ux-line);border-radius:24px;background:rgba(255,253,249,.93);overflow:hidden;box-shadow:0 10px 26px rgba(44,37,30,.05)}.ux-compare-head{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:16px 20px;border-bottom:1px solid var(--ux-line);background:#f4ede3}.ux-compare-head span{font:800 9px Inter;letter-spacing:.12em;text-transform:uppercase;color:var(--ux-red)}.ux-compare-head b{font:600 15px Lora}.ux-compare-grid{display:grid;grid-template-columns:1fr 44px 1fr;gap:0}.ux-side{padding:20px}.ux-side .cap{font:800 8px Inter;letter-spacing:.12em;text-transform:uppercase;color:#85796d}.ux-side h4{font:600 18px/1.2 Lora;margin:7px 0 9px}.ux-side p{font-size:11.5px;color:#5e574f}.ux-vs{display:grid;place-items:center;background:#f8f4ed;color:var(--ux-gold);font:700 15px Lora;border-left:1px solid var(--ux-line);border-right:1px solid var(--ux-line)}.ux-consequence{padding:13px 20px;border-top:1px solid var(--ux-line);font-size:10.5px;color:#554d45}.ux-consequence strong{font-family:Lora;color:var(--ux-ink)}
    .ux-docchips{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.ux-docchip{border:1px solid var(--ux-line);background:#fff;border-radius:999px;padding:6px 9px;font:800 8.5px Inter;color:#675e54;cursor:pointer}.ux-docchip:hover{border-color:var(--ux-gold);color:#2f2b27}
    #ux-drawer{position:fixed;inset:0;z-index:200;pointer-events:none}#ux-drawer .veil{position:absolute;inset:0;background:rgba(19,20,19,.34);opacity:0;transition:.22s}#ux-drawer .panel{position:absolute;right:0;top:0;height:100%;width:min(480px,92vw);background:#f7f3ec;transform:translateX(104%);transition:.28s;box-shadow:-24px 0 60px rgba(0,0,0,.18);padding:28px;overflow:auto}#ux-drawer.open{pointer-events:auto}#ux-drawer.open .veil{opacity:1}#ux-drawer.open .panel{transform:none}.ux-close{position:absolute;right:18px;top:16px;border:1px solid var(--ux-line);background:#fff;border-radius:50%;width:34px;height:34px;cursor:pointer}.ux-doc-title{font:600 28px/1.1 Lora;margin:34px 0 8px}.ux-doc-meta{font:800 8px Inter;letter-spacing:.12em;text-transform:uppercase;color:var(--ux-red)}.ux-doc-table{margin-top:18px;border-top:1px solid var(--ux-line)}.ux-doc-row{display:grid;grid-template-columns:92px 1fr;gap:12px;padding:11px 0;border-bottom:1px solid var(--ux-line);font-size:11px}.ux-doc-row b{font-size:9px;text-transform:uppercase;letter-spacing:.07em;color:#776d63}.ux-doc-row span{color:#4f4942}
    .ux-counter{margin:22px 0;border:1px solid var(--ux-line);border-radius:24px;padding:22px;background:linear-gradient(180deg,#fffdf9,#f7f1e8)}.ux-counter h4{font:600 22px/1.2 Lora;margin:0 0 14px}.ux-counter-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.ux-counter-card{border:1px solid var(--ux-line);border-radius:16px;padding:14px;background:#fff}.ux-counter-card span{font:800 8px Inter;letter-spacing:.1em;text-transform:uppercase;color:var(--ux-red)}.ux-counter-card b{font:600 13px/1.2 Lora;display:block;margin:6px 0}.ux-counter-card p{font-size:10px;line-height:1.45;color:#625a51;margin:0}
    .ux-graph{margin:20px 0;border:1px solid var(--ux-line);border-radius:24px;padding:20px;background:#fffdf9}.ux-graph h4{font:600 21px Lora;margin:0 0 14px}.ux-graphline{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:7px;align-items:stretch}.ux-node{position:relative;border:1px solid var(--ux-line);border-radius:14px;padding:13px 10px;background:#faf6ef;min-height:106px}.ux-node:not(:last-child):after{content:'→';position:absolute;right:-12px;top:42%;width:22px;height:22px;border:1px solid var(--ux-line);border-radius:50%;background:#fff;display:grid;place-items:center;color:var(--ux-gold);z-index:2}.ux-node small{font:800 7.5px Inter;letter-spacing:.1em;text-transform:uppercase;color:#8b7f72}.ux-node b{display:block;font:600 12.5px/1.2 Lora;margin:6px 0}.ux-node p{font-size:9px;line-height:1.35;color:#655d55;margin:0}.ux-node.official{border-color:#b7c2cb;background:#f1f4f6}.ux-node.financial{border-color:#c9baa4;background:#f6f0e7}.ux-node.issue{border-color:#d0aaa6;background:#f5e9e7}
    .ux-effects{margin:20px 0;border-radius:26px;padding:24px;background:#171817;color:#f5efe6}.ux-effects h4{font:600 25px Lora;margin:0 0 14px}.ux-effects-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.ux-effect{padding:14px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.035)}.ux-effect b{font:600 13px Lora}.ux-effect p{font-size:9.5px;line-height:1.45;color:#c9c0b5}
    .ux-deep-link{display:inline-flex;margin-top:8px;border:0;background:none;padding:0;color:#78664f;font:800 8.5px Inter;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.ux-deep-link:after{content:' · copiar link'}
    body.ux-executive .section[data-relator-secondary='true']{display:none!important}body.ux-executive #tempo,body.ux-executive #documentos,body.ux-executive #atlas-11572,body.ux-executive #pin,body.ux-executive #carinhoso{display:none!important}
    @media(max-width:1280px){#ux-orient{display:none}.ux-counter-grid{grid-template-columns:1fr 1fr}.ux-graphline{grid-template-columns:1fr 1fr}.ux-node:not(:last-child):after{display:none}}
    @media(max-width:820px){#ux-modebar{left:12px;right:12px;justify-content:center}.ux-compare-grid{grid-template-columns:1fr}.ux-vs{min-height:32px;border:0;border-top:1px solid var(--ux-line);border-bottom:1px solid var(--ux-line)}.ux-counter-grid,.ux-effects-grid,.ux-graphline{grid-template-columns:1fr}}
    @media print{#ux-modebar,#ux-orient,#ux-drawer,.ux-deep-link{display:none!important}.ux-compare,.ux-counter,.ux-graph,.ux-effects{break-inside:avoid;box-shadow:none}}
  `;
  document.head.appendChild(style);

  const modebar = document.createElement('div');
  modebar.id = 'ux-modebar';
  modebar.innerHTML = `<button data-mode="executive">Visão executiva</button><button class="on" data-mode="full">Conferência completa</button>`;
  document.body.appendChild(modebar);
  const applyMode = (mode) => {
    document.body.classList.toggle('ux-executive', mode === 'executive');
    qa('#ux-modebar button').forEach(b => b.classList.toggle('on', b.dataset.mode === mode));
    localStorage.setItem('piccoli_memorial_mode', mode);
  };
  qa('#ux-modebar button').forEach(b => b.addEventListener('click', () => applyMode(b.dataset.mode)));
  const savedMode = localStorage.getItem('piccoli_memorial_mode');
  if (savedMode === 'executive') applyMode('executive');

  const drawer = document.createElement('div');
  drawer.id = 'ux-drawer';
  drawer.innerHTML = `<div class="veil"></div><aside class="panel" role="dialog" aria-modal="true" aria-label="Ficha documental"><button class="ux-close" aria-label="Fechar">×</button><div id="ux-drawer-content"></div></aside>`;
  document.body.appendChild(drawer);
  const docs = {
    sefaz9883:{title:'Resposta oficial da SEFAZ · NF-e 9.883',origin:'SEFAZ/AM',kind:'Documento oficial nos autos',fact:'A NF-e 9.883 foi indicada como não encontrada na EFD consultada.',use:'Confronto objetivo com a utilização geral do ofício fiscal na sentença.',ground:'Art. 966, VIII',ref:'Ofício/Nota Técnica SEFAZ juntados à rescisória'},
    carinhoso:{title:'Diligência à Transportes Carinhoso',origin:'Autos da monitória',kind:'Ato processual + resposta da instrução',fact:'A prova direta de entrega foi objeto de diligência expressamente requerida e deferida.',use:'Reconstrução da regra de julgamento aplicada ao fato constitutivo após os embargos.',ground:'Art. 966, V',ref:'Movimentos da fase instrutória da monitória'},
    bradesco:{title:'Produção bancária judicial · Bradesco',origin:'Bradesco / autos judiciais',kind:'Documentação bancária produzida judicialmente',fact:'Extratos e identificação de beneficiários integram a reconstrução individualizada dos pagamentos.',use:'Base subsidiária para prova nova, observados os requisitos próprios do inciso VII.',ground:'Art. 966, VII',ref:'Documentação bancária juntada na rescisória'},
    pagamentos:{title:'Cadeia financeira · pagamentos e beneficiários',origin:'Extratos + documentos contemporâneos',kind:'Conjunto documental financeiro',fact:'A relação comercial registrava pluralidade de canais de liquidação, inclusive instruções de depósito direto.',use:'Reconstrução de pagamentos, beneficiários, ciência e nexo sem presumir equivalência automática entre títulos.',ground:'Art. 966, III',ref:'Extratos, comprovantes e correspondência corporativa'},
    familia11572:{title:'Família 11.572',origin:'Autos + documentos financeiros',kind:'Família cambial correlata',fact:'A parcela 11.572A integrou a cobrança e as correlatas B/C integram a reconstrução financeira da família.',use:'Visualizar separadamente cobrança, pagamentos correlatos, beneficiários e encadeamento documental.',ground:'Art. 966, III',ref:'Atlas visual · família 11.572'},
    cautelar2015:{title:'Ação 0614260-23.2015.8.04.0001',origin:'TJAM · 2015',kind:'Antecedente processual contemporâneo',fact:'PICCOLI já havia judicializado controvérsia cambial envolvendo a SIMBAL durante a mesma relação comercial.',use:'Responder à tese de construção retrospectiva, sem presumir vício para títulos diversos.',ground:'Contexto da réplica',ref:'Ação judicial de 2015'}
  };
  const openDoc = (key) => {
    const d = docs[key]; if (!d) return;
    q('#ux-drawer-content').innerHTML = `<div class="ux-doc-meta">Ficha de conferência</div><h3 class="ux-doc-title">${d.title}</h3><div class="ux-doc-table"><div class="ux-doc-row"><b>Origem</b><span>${d.origin}</span></div><div class="ux-doc-row"><b>Natureza</b><span>${d.kind}</span></div><div class="ux-doc-row"><b>Fato</b><span>${d.fact}</span></div><div class="ux-doc-row"><b>Função</b><span>${d.use}</span></div><div class="ux-doc-row"><b>Inciso</b><span>${d.ground}</span></div><div class="ux-doc-row"><b>Referência</b><span>${d.ref}</span></div></div>`;
    drawer.classList.add('open');
  };
  drawer.addEventListener('click', e => { if (e.target.classList.contains('veil') || e.target.classList.contains('ux-close')) drawer.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') drawer.classList.remove('open'); });

  const chip = (key,label) => `<button class="ux-docchip" data-doc="${key}">${label}</button>`;
  const bindChips = (root=document) => qa('[data-doc]',root).forEach(b => b.addEventListener('click', () => openDoc(b.dataset.doc)));

  const compare = (id, title, leftTitle, leftText, rightTitle, rightText, consequence, chips='') => {
    const el = document.createElement('div');
    el.className='ux-compare'; el.id=id;
    el.innerHTML=`<div class="ux-compare-head"><span>SENTENÇA × AUTOS</span><b>${title}</b></div><div class="ux-compare-grid"><div class="ux-side"><div class="cap">Premissa / decisão</div><h4>${leftTitle}</h4><p>${leftText}</p></div><div class="ux-vs">×</div><div class="ux-side"><div class="cap">Documento / fato objetivo</div><h4>${rightTitle}</h4><p>${rightText}</p><div class="ux-docchips">${chips}</div></div></div><div class="ux-consequence"><strong>Conseqüência rescindente:</strong> ${consequence}</div>`;
    return el;
  };

  const sentenca = q('#sentenca .section-inner');
  if (sentenca && !q('#ux-compare-v')) {
    sentenca.appendChild(compare('ux-compare-v','Art. 966, V · regra de julgamento','Procedência após os embargos','A decisão final resolveu o fato constitutivo dentro da dinâmica probatória formada após a oposição dos embargos monitórios.','A instrução buscou prova direta de entrega','A própria autora requereu diligência à transportadora; o juízo deferiu a busca dos comprovantes, integrando formalmente essa questão à instrução.','O confronto é jurídico-processual: resultado da instrução + ônus do fato constitutivo + regra de julgamento. Não depende de reabrir toda a prova.',chip('carinhoso','Diligência / instrução')));
  }
  const nfe = q('#nfe9883 .section-inner');
  if (nfe && !q('#ux-compare-viii')) {
    nfe.appendChild(compare('ux-compare-viii','Art. 966, VIII · NF-e 9.883','Uso geral do ofício fiscal','A sentença utilizou a documentação fiscal como elemento de corroboração da cobrança no conjunto examinado.','SEFAZ: NF-e 9.883 não encontrada','A resposta oficial individualiza a NF-e 9.883 como não encontrada na EFD consultada.','A cadeia isola um microfato verificável e permite discutir o alcance da premissa sentencial sobre essa parcela específica.',chip('sefaz9883','SEFAZ · NF-e 9.883')));
  }
  const pagamentosSec = q('#pagamentos .section-inner');
  if (pagamentosSec && !q('#ux-compare-iii')) {
    pagamentosSec.appendChild(compare('ux-compare-iii','Art. 966, III · cadeia financeira','Cobrança apresentada como crédito exigível','A cobrança monitória parte da premissa de subsistência dos títulos exigidos.','Fluxos financeiros individualizáveis','Extratos, beneficiários, pagamentos correlatos e prática contemporânea de liquidação permitem reconstruir a cadeia título → pagamento → beneficiário → ciência.','O inciso III exige demonstração de conduta, ciência e nexo; o site organiza os documentos nessa sequência, sem inferir dolo de mera inconsistência.',chip('pagamentos','Cadeia financeira')+chip('familia11572','Família 11.572')));
  }
  const bradescoSec = q('#bradesco .section-inner');
  if (bradescoSec && !q('#ux-compare-vii')) {
    bradescoSec.appendChild(compare('ux-compare-vii','Art. 966, VII · prova bancária','Acervo disponível no processo originário','A decisão rescindenda foi formada sem a produção bancária judicial posteriormente obtida.','Documentação bancária produzida em 2026','Os extratos e beneficiários permitem confrontos individualizados que não estavam materializados da mesma forma no acervo originário.','A função do VII permanece subsidiária e depende do preenchimento de seus requisitos próprios; o memorial apenas organiza a prova produzida.',chip('bradesco','Produção Bradesco')));
  }
  bindChips();

  const family = q('#atlas-11572 .section-inner');
  if (family && !q('#ux-family-graph')) {
    const graph=document.createElement('div'); graph.className='ux-graph'; graph.id='ux-family-graph';
    graph.innerHTML=`<h4>Grafo documental da família 11.572</h4><div class="ux-graphline"><div class="ux-node issue"><small>Cobrança</small><b>11.572A</b><p>Parcela inserida na cobrança/condenação global.</p></div><div class="ux-node"><small>Família</small><b>11.572 B/C</b><p>Correlatas examinadas separadamente.</p></div><div class="ux-node financial"><small>Pagamento</small><b>Lançamentos</b><p>Reconstrução por extratos e comprovantes.</p></div><div class="ux-node financial"><small>Beneficiário</small><b>SIMBAL / fundos</b><p>Identificação do destinatário de cada fluxo.</p></div><div class="ux-node official"><small>Documento</small><b>Extrato / comprovante</b><p>Fonte primária de conferência.</p></div><div class="ux-node"><small>Conhecimento</small><b>Ciência</b><p>Elemento a demonstrar na cadeia do inciso III.</p></div><div class="ux-node issue"><small>Subsunção</small><b>Art. 966, III</b><p>Conduta + ciência + nexo, quando documentalmente demonstrados.</p></div></div><div class="ux-docchips">${chip('familia11572','Abrir ficha da família')}</div>`;
    family.appendChild(graph); bindChips(graph);
  }

  const contest = q('#contestacao .section-inner');
  if (contest && !q('#ux-counter-index')) {
    const box=document.createElement('div'); box.className='ux-counter'; box.id='ux-counter-index';
    box.innerHTML=`<h4>Contestação → resposta → documento → inciso</h4><div class="ux-counter-grid"><div class="ux-counter-card"><span>Ataque</span><b>“Mera revaloração da prova”</b><p>Resposta: separar regra jurídica, microfato objetivo, cadeia financeira e prova nova em quatro caminhos autônomos.</p></div><div class="ux-counter-card"><span>Documento</span><b>Instrução / Carinhoso</b><p>Fato processual ligado ao ônus e à regra de julgamento.</p></div><div class="ux-counter-card"><span>Documento</span><b>SEFAZ · NF-e 9.883</b><p>Microfato fiscal individualizado para o inciso VIII.</p></div><div class="ux-counter-card"><span>Resultado</span><b>III · V · VII · VIII</b><p>Cada fundamento mantém pressuposto, prova e efeito rescindente próprios.</p></div></div><div class="ux-docchips">${chip('carinhoso','Instrução')} ${chip('sefaz9883','SEFAZ')} ${chip('bradesco','Bradesco')} ${chip('cautelar2015','Antecedente 2015')}</div>`;
    contest.appendChild(box); bindChips(box);
  }

  const pedidos = q('#pedidos .section-inner');
  if (pedidos && !q('#ux-effects')) {
    const eff=document.createElement('div'); eff.className='ux-effects'; eff.id='ux-effects';
    eff.innerHTML=`<h4>Se o Tribunal acolher apenas um fundamento</h4><div class="ux-effects-grid"><div class="ux-effect"><b>V · regra de julgamento</b><p>O efeito deve acompanhar o vício jurídico-processual concretamente reconhecido, nos limites da parcela atingida.</p></div><div class="ux-effect"><b>VIII · NF-e 9.883</b><p>Permite tratamento modular da parcela ligada ao microfato individualizado, sem exigir desconstituição indiscriminada.</p></div><div class="ux-effect"><b>III · cadeia financeira</b><p>Alcança apenas o que for demonstrado por conduta, ciência e nexo documentalmente estabelecidos.</p></div><div class="ux-effect"><b>VII · prova nova</b><p>Opera subsidiariamente nos pontos em que os requisitos legais próprios estiverem preenchidos.</p></div></div>`;
    pedidos.appendChild(eff);
  }

  const orient=document.createElement('aside'); orient.id='ux-orient';
  orient.innerHTML=`<div class="ey">Roteiro do julgamento</div><h5 id="ux-o-title">Núcleo decisório</h5><dl><dt>Premissa</dt><dd id="ux-o-prem">Quatro fundamentos autônomos</dd><dt>Documento</dt><dd id="ux-o-doc">Mapa da réplica</dd><dt>Inciso</dt><dd id="ux-o-inc">III · V · VII · VIII</dd><dt>Efeito</dt><dd id="ux-o-eff">Rescisão nos limites demonstrados</dd></dl>`;
  document.body.appendChild(orient);
  const orientData={
    sentenca:['Regra de julgamento','Instrução / Carinhoso','V','Controle da regra aplicada'],
    nfe9883:['Premissa fiscal','SEFAZ · NF-e 9.883','VIII','Parcela individualizada'],
    pagamentos:['Subsistência do crédito','Extratos / beneficiários','III','Cadeia conduta-ciência-nexo'],
    bradesco:['Acervo originário','Produção bancária 2026','VII','Função subsidiária'],
    contestacao:['Revaloração alegada','Resposta estruturada','III · V · VII · VIII','Autonomia dos fundamentos'],
    pedidos:['Resultado rescindente','Quadro de subsunção','III · V · VII · VIII','Efeito modular']
  };
  const oo=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const d=orientData[e.target.id];if(!d)return;q('#ux-o-title').textContent=e.target.querySelector('h3')?.textContent||'Roteiro do julgamento';q('#ux-o-prem').textContent=d[0];q('#ux-o-doc').textContent=d[1];q('#ux-o-inc').textContent=d[2];q('#ux-o-eff').textContent=d[3];}),{rootMargin:'-32% 0px -56% 0px',threshold:.01});
  Object.keys(orientData).forEach(id=>{const el=q('#'+id);if(el)oo.observe(el)});

  const deepSections=['atlas-relator','sentenca','nfe9883','pagamentos','bradesco','atlas-suframa','contestacao','replica','pedidos','atlas-11572','documentos'];
  deepSections.forEach(id=>{const sec=q('#'+id); if(!sec||q('.ux-deep-link',sec)) return; const head=q('.section-head',sec)||q('.section-inner',sec); if(!head)return; const btn=document.createElement('button');btn.className='ux-deep-link';btn.textContent='URL desta seção';btn.addEventListener('click',async()=>{const url=`${location.origin}${location.pathname}#${id}`;try{await navigator.clipboard.writeText(url);btn.textContent='Link copiado';setTimeout(()=>btn.textContent='URL desta seção',1400)}catch{location.hash=id}});head.appendChild(btn)});

  if (location.hash) {
    requestAnimationFrame(()=>{const t=q(location.hash); if(t) t.scrollIntoView({block:'start'})});
  }
})();
