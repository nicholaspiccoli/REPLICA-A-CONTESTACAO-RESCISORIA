(() => {
  'use strict';

  if (window.__PICCOLI_RELATOR_FIRST_20260911__) return;
  window.__PICCOLI_RELATOR_FIRST_20260911__ = true;

  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];
  const main = q('main');
  const hero = q('#top');
  if (!main || !hero) return;

  // Remove vestígios de versões anteriores que criavam bloco autônomo de "complementos".
  q('#complementos-replica')?.remove();
  q('.side nav a[href="#complementos-replica"]')?.remove();

  // Ajustes visuais mínimos: preservam a identidade gráfica original e apenas reforçam a leitura sequencial.
  if (!q('#relator-first-style')) {
    const style = document.createElement('style');
    style.id = 'relator-first-style';
    style.textContent = `
      .hero{min-height:72vh}
      .relator-path{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
      .relator-path .atlas-q{grid-template-columns:38px 1fr;text-decoration:none;color:inherit;transition:.2s;min-height:154px}
      .relator-path .atlas-q:hover{transform:translateY(-2px);border-color:var(--gold);box-shadow:0 10px 28px rgba(51,43,34,.08)}
      .relator-path .atlas-q i{width:32px;height:32px}
      .proof-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .proof-card{background:rgba(255,253,249,.9);border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:0 8px 22px rgba(61,49,38,.045)}
      .proof-card h4{font:600 21px/1.22 Lora;margin:8px 0 12px}
      .proof-card p{font-size:12.5px;color:#514b44;margin:8px 0}
      .proof-chain{margin-top:14px;padding:13px 14px;border-left:3px solid var(--gold);background:#f4ede3;border-radius:0 12px 12px 0;font-size:11.5px;color:#514a42}
      .proof-chain strong{font-family:Lora;font-size:12.5px;color:var(--ink)}
      .relator-sequence{display:flex;gap:7px;flex-wrap:wrap;margin-top:16px}
      .relator-sequence a{text-decoration:none;border:1px solid var(--line);background:var(--white);border-radius:999px;padding:8px 11px;font-size:10px;font-weight:800;color:#5f574e}
      .section[data-relator-secondary="true"] .section-index::after{content:" · DETALHE";color:var(--gold)}
      @media(max-width:1100px){.relator-path{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:820px){.relator-path,.proof-grid{grid-template-columns:1fr}.hero{min-height:auto}}
    `;
    document.head.appendChild(style);
  }

  // HERO: transforma a entrada do site em convite explícito à leitura do Relator.
  const heroSub = q('.hero-sub');
  if (heroSub) {
    heroSub.textContent = 'Memorial visual de apoio à réplica. A leitura começa pelo núcleo decisório: quatro fundamentos autônomos do art. 966 do CPC, cada um ligado ao fato, documento e efeito jurídico correspondente.';
  }
  const heroActions = q('.hero-actions');
  if (heroActions) {
    heroActions.innerHTML = `
      <a class="pill primary" href="#atlas-relator">Começar · Relator 5 min</a>
      <a class="pill ghost" href="#atlas">Mapa dos 4 incisos</a>
      <a class="pill ghost" href="#atlas-decisao">Árvore decisória</a>
      <a class="pill ghost" href="#pedidos">Ir aos pedidos</a>`;
  }

  // RELATOR 5 MIN: primeira seção substantiva. Substitui perguntas por uma rota de decisão em cinco passos.
  const relator = q('#atlas-relator .section-inner');
  if (relator) {
    relator.innerHTML = `
      <div class="section-head">
        <div>
          <div class="section-index">COMECE AQUI · RELATOR · 5 MIN</div>
          <h3>A réplica em cinco passos decisórios</h3>
        </div>
        <p class="section-intro">A contestação procura reduzir a ação a revaloração de prova. A réplica responde separando quatro hipóteses do art. 966 e demonstrando, em cada uma, qual fato processual ou documental deve ser confrontado com a sentença.</p>
      </div>
      <div class="relator-path">
        <a class="atlas-q" href="#sentenca"><i>1</i><div><b>Art. 966, V</b><p>Comece pela regra de julgamento usada depois dos embargos: quem suportou o ônus do fato constitutivo?</p></div></a>
        <a class="atlas-q" href="#nfe9883"><i>2</i><div><b>Art. 966, VIII</b><p>Veja a NF-e 9.883: cobrança, resposta oficial da SEFAZ e premissa adotada pela sentença.</p></div></a>
        <a class="atlas-q" href="#pagamentos"><i>3</i><div><b>Art. 966, III</b><p>Examine 11.572A, pagamentos correlatos, cadeia de beneficiários e ciência da credora.</p></div></a>
        <a class="atlas-q" href="#bradesco"><i>4</i><div><b>Art. 966, VII</b><p>Confira a prova bancária obtida judicialmente em 2026 e sua função subsidiária.</p></div></a>
        <a class="atlas-q" href="#pedidos"><i>5</i><div><b>Efeito pedido</b><p>O resultado é modular: cada fundamento alcança apenas a parcela da sentença que efetivamente toca.</p></div></a>
      </div>
      <div class="atlas-foot" style="margin-top:16px"><strong>Ordem sugerida:</strong> V → VIII → III → VII → pedidos. O percurso temporal e o caderno documental ficam depois, para conferência.</div>
      <div class="relator-sequence">
        <a href="#atlas">Mapa dos 4 incisos</a>
        <a href="#atlas-decisao">Árvore decisória</a>
        <a href="#atlas-suframa">Matriz de comprovação</a>
        <a href="#tempo">Cronologia</a>
        <a href="#documentos">Índice documental</a>
      </div>`;
  }

  // MAPA DOS QUATRO INCISOS: mantém a interação original, mas simplifica a linguagem.
  const atlasHero = q('#atlas .atlas-hero');
  if (atlasHero) {
    atlasHero.innerHTML = `
      <div class="section-index" style="color:#c9b38d">MAPA DOS QUATRO FUNDAMENTOS</div>
      <h4>Quatro incisos. Quatro verificações diferentes.</h4>
      <p>Documento → fato objetivo → premissa da sentença → inciso do art. 966 → efeito pedido. Clique em cada fundamento para ver a cadeia correspondente.</p>`;
  }
  const atlasHead = q('#atlas .section-head');
  if (atlasHead) {
    atlasHead.innerHTML = `
      <div><div class="section-index">MAPA-MÃE</div><h3>A sentença no centro; os quatro fundamentos nas bordas</h3></div>
      <p class="section-intro">O mapa organiza a réplica pelo que o Tribunal precisa decidir, não pela ordem em que os documentos foram juntados.</p>`;
  }
  const atlasTabs = q('#atlas .atlas-tabs');
  if (atlasTabs) {
    atlasTabs.innerHTML = `
      <a href="#atlas-relator">Relator · 5 min</a>
      <a href="#atlas">Mapa dos 4 incisos</a>
      <a href="#atlas-decisao">Árvore decisória</a>
      <a href="#sentenca">V · regra de julgamento</a>
      <a href="#nfe9883">VIII · NF-e 9.883</a>
      <a href="#pagamentos">III · cadeia financeira</a>
      <a href="#bradesco">VII · prova bancária</a>
      <a href="#atlas-suframa">Matriz de comprovação</a>
      <a href="#pedidos">Pedidos</a>`;
  }

  // ÁRVORE DECISÓRIA: muda apenas o enquadramento editorial.
  const decisionHead = q('#atlas-decisao .section-head');
  if (decisionHead) {
    decisionHead.innerHTML = `
      <div><div class="section-index">ROTA DE DECISÃO</div><h3>Primeiro: é revaloração ou hipótese rescindente delimitada?</h3></div>
      <p class="section-intro">A árvore converte a objeção central da contestação em uma sequência objetiva de verificações.</p>`;
  }

  // INCISO V: reforça a leitura positiva do fato processual comprovado.
  const sentencaIntro = q('#sentenca .section-intro');
  if (sentencaIntro) sentencaIntro.textContent = 'O ponto de partida é objetivo: depois dos embargos, a sentença explicitou a regra de julgamento que sustentou a procedência.';
  const carinhosoHead = q('#carinhoso .section-head');
  if (carinhosoHead) {
    carinhosoHead.innerHTML = `
      <div><div class="section-index">ART. 966, V · RESULTADO DA INSTRUÇÃO</div><h3>A prova direta de entrega foi buscada no próprio processo</h3></div>
      <p class="section-intro">A SIMBAL pediu os comprovantes à transportadora; o juízo deferiu; a instrução terminou sem a apresentação dos recibos solicitados.</p>`;
  }
  const carinhosoCallout = q('#carinhoso .callout');
  if (carinhosoCallout) {
    carinhosoCallout.innerHTML = `<div class="label">FATO PROCESSUAL COMPROVADO</div><h4>A diligência para obter prova direta de entrega integrou formalmente a instrução e não produziu os recibos requeridos.</h4><p>Esse dado se conecta ao inciso V porque a sentença, ainda assim, resolveu definitivamente os embargos a partir da regra de julgamento reproduzida no próprio decisum.</p>`;
  }
  const pinHead = q('#pin .section-head');
  if (pinHead) {
    pinHead.innerHTML = `
      <div><div class="section-index">ART. 966, V · SUFRAMA / LOGÍSTICA FISCAL</div><h3>PIN e vistoria na cadeia de comprovação</h3></div>
      <p class="section-intro">O PIN é apresentado pelo que efetivamente representa no percurso administrativo: ingresso, vistoria e situação fiscal/logística, a serem lidos em conjunto com a prova civil de entrega discutida na monitória.</p>`;
  }

  // INCISO III: integra o achado do pagamento direto como parte da cadeia financeira, sem qualquer referência a NF específica ou imagem.
  const pagamentos = q('#pagamentos .section-inner');
  q('#reforco-pagamentos-diretos')?.remove();
  if (pagamentos) {
    const block = document.createElement('div');
    block.id = 'reforco-pagamentos-diretos';
    block.className = 'callout';
    block.style.marginTop = '18px';
    block.innerHTML = `
      <div class="label">DINÂMICA FINANCEIRA DOCUMENTADA</div>
      <h4>A relação comercial admitia liquidação por canais distintos.</h4>
      <p>Correspondência corporativa contemporânea da própria SIMBAL registra títulos mantidos “em carteira” e instrução de pagamento mediante depósito direto em conta indicada pela fornecedora. O dado documenta que a liquidação não se limitava ao fluxo ordinário boleto/DDA.</p>
      <p style="margin-top:10px"><strong>Função na réplica:</strong> ler os extratos bancários como cadeia financeira — SIMBAL, fundos e demais agentes — e individualizar a vinculação de cada pagamento antes de concluir sobre inadimplemento.</p>`;
    pagamentos.appendChild(block);
  }

  // INCISO VII: conecta a prova bancária posterior à pluralidade documentada de canais.
  const bradesco = q('#bradesco .section-inner');
  q('#reforco-bradesco-canais')?.remove();
  if (bradesco) {
    const block = document.createElement('div');
    block.id = 'reforco-bradesco-canais';
    block.className = 'card';
    block.style.marginTop = '18px';
    block.innerHTML = `
      <div class="meta">CADEIA DE PAGAMENTOS</div>
      <h4>Extratos + prática comercial contemporânea</h4>
      <p>A produção bancária de 2026 deve ser lida em conjunto com a dinâmica comercial documentada: havia pagamentos dirigidos à própria SIMBAL e fluxos envolvendo outros beneficiários. A finalidade do inciso VII é permitir a reconstrução individualizada desses lançamentos quando preenchidos os requisitos próprios da prova nova.</p>`;
    bradesco.appendChild(block);
  }

  // CONTESTAÇÃO: o antecedente de 2015 entra exatamente onde responde à tese de construção retrospectiva.
  const contestacao = q('#contestacao .section-inner');
  q('#reforco-contestacao-2015')?.remove();
  if (contestacao) {
    const block = document.createElement('div');
    block.id = 'reforco-contestacao-2015';
    block.className = 'grid two';
    block.style.marginTop = '18px';
    block.innerHTML = `
      <div class="card"><div class="meta">RESPOSTA À TESE DE CONSTRUÇÃO RETROSPECTIVA</div><h4>A controvérsia sobre duplicatas já era contemporânea à relação comercial</h4><p>Documentação de 2015 registra discussão formal entre PICCOLI e SIMBAL envolvendo duplicatas apontadas como inexistentes ou em duplicidade, protestos e cartas de anuência. O dado demonstra anterioridade histórica da controvérsia que a rescisória depois organiza juridicamente.</p></div>
      <div class="card"><div class="meta">AÇÃO 0614260-23.2015.8.04.0001</div><h4>PICCOLI já havia judicializado conflito cambial contra a SIMBAL</h4><p>O processo anterior foi ajuizado pela PICCOLI contra a SIMBAL e integrou a mesma relação comercial. Na réplica, ele funciona como antecedente documental da controvérsia, enquanto os títulos da monitória atual permanecem examinados individualmente.</p></div>`;
    contestacao.appendChild(block);
  }

  // RÉPLICA: síntese do método sem chamar os achados de "complementos".
  const replica = q('#replica .section-inner');
  q('#reforco-replica-metodo')?.remove();
  if (replica) {
    const block = document.createElement('div');
    block.id = 'reforco-replica-metodo';
    block.className = 'card';
    block.style.marginTop = '18px';
    block.innerHTML = `<div class="meta">MÉTODO DA RÉPLICA</div><h4>Cada documento é lido dentro do fundamento rescindente ao qual pertence.</h4><p>O memorial segue a mesma lógica da peça: fato processual ou documental → fonte primária → inciso do art. 966 → efeito jurídico. O objetivo é reduzir a carga de leitura sem alterar os fundamentos já deduzidos.</p>`;
    replica.appendChild(block);
  }

  // MATRIZ DE COMPROVAÇÃO: substitui o antigo bloco "o que prova / não prova" por quatro cadeias positivas de comprovação.
  const matriz = q('#atlas-suframa .section-inner');
  if (matriz) {
    matriz.innerHTML = `
      <div class="section-head">
        <div><div class="section-index">MATRIZ DE COMPROVAÇÃO · ART. 966</div><h3>Quatro cadeias objetivas, uma para cada fundamento</h3></div>
        <p class="section-intro">Aqui o relator vê apenas a sequência afirmativa: fato documentado, fonte nos autos e questão rescindente correspondente.</p>
      </div>
      <div class="proof-grid">
        <article class="proof-card"><span class="badge">ART. 966, V</span><h4>Regra de julgamento após os embargos</h4><p><strong>Fato documentado:</strong> a própria SIMBAL requereu prova externa de entrega; a diligência foi deferida; a instrução encerrou sem os recibos solicitados; e a sentença imputou à embargante o encargo de infirmar a obrigação.</p><div class="proof-chain"><strong>Cadeia:</strong> instrução → sentença → arts. 373, I e 702, §1º → violação manifesta alegada.</div></article>
        <article class="proof-card"><span class="badge red">ART. 966, VIII</span><h4>NF-e 9.883 e a premissa fiscal da sentença</h4><p><strong>Fato documentado:</strong> o título 000009883A integrou a cobrança; a SEFAZ informou que a NF-e 9.883 não foi encontrada em nenhuma EFD; e o ofício foi utilizado na fundamentação como corroboração geral da escrituração.</p><div class="proof-chain"><strong>Cadeia:</strong> título cobrado → resposta oficial da SEFAZ → premissa decisória → erro de fato alegado → possível rescisão parcial.</div></article>
        <article class="proof-card"><span class="badge gold">ART. 966, III</span><h4>11.572A e a cadeia financeira</h4><p><strong>Fato documentado:</strong> 11.572A integra a cobrança; a família correlata possui pagamentos apontados; os extratos registram fluxos para SIMBAL e outros beneficiários; e a correspondência contemporânea documenta liquidação também por depósito direto.</p><div class="proof-chain"><strong>Cadeia:</strong> crédito cobrado → pagamentos/beneficiários → ciência → conduta processual → nexo com a condenação.</div></article>
        <article class="proof-card"><span class="badge blue">ART. 966, VII</span><h4>Produção bancária posterior à coisa julgada</h4><p><strong>Fato documentado:</strong> a produção de prova contra o Bradesco foi ajuizada em 2026 e gerou extratos bancários posteriores ao trânsito em julgado, destinados à individualização de pagamentos e beneficiários.</p><div class="proof-chain"><strong>Cadeia:</strong> documento bancário → preexistência do fato → acesso posterior → aptidão decisiva → prova nova em caráter subsidiário.</div></article>
      </div>`;
  }

  // ÍNDICE DOCUMENTAL: referências objetivas, sem linguagem de "complementos".
  const docBody = q('#docTable tbody') || q('#docBody');
  if (docBody) {
    qa('tr[data-reforco-doc]', docBody).forEach(tr => tr.remove());
    const rows = [
      ['pagamento-direto','Correspondência corporativa SIMBAL · set/2015','Registra títulos em carteira e orientação de pagamento por depósito direto.','Acervo contemporâneo · set/2015','Cadeia financeira / art. 966, III','apoio'],
      ['cautelar-2015','Ação 0614260-23.2015.8.04.0001','PICCOLI contra SIMBAL em controvérsia cambial contemporânea à relação comercial.','TJAM · 2015','Resposta à tese de construção retrospectiva','apoio'],
      ['thread-2109','Correspondência de 21.09.2015','Registra que a questão dos títulos e protestos permanecia ativa no período.','Acervo contemporâneo · 21.09.2015','Contexto cronológico da controvérsia','contexto']
    ];
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.reforcoDoc = r[0];
      tr.innerHTML = `<td><strong>${r[1]}</strong></td><td>${r[2]}</td><td><span class="doc-ref">${r[3]}</span></td><td>${r[4]}</td><td><span class="status warn">${r[5]}</span></td>`;
      docBody.appendChild(tr);
    });
  }

  // ORDEM EDITORIAL: o Relator encontra primeiro a síntese e os quatro fundamentos; o histórico vem depois para conferência.
  const order = [
    'atlas-relator',
    'atlas',
    'atlas-decisao',
    'sentenca',
    'atlas-bifase',
    'nfe9883',
    'pagamentos',
    'bradesco',
    'atlas-suframa',
    'contestacao',
    'replica',
    'pedidos',
    'tempo',
    'origem',
    'instrucao',
    'carinhoso',
    'pin',
    'atlas-11572',
    'documentos',
    'atlas-swimlane',
    'rescisoria',
    'visao',
    'incisos'
  ];
  let cursor = hero;
  order.forEach(id => {
    const el = q('#' + id);
    if (el) {
      cursor.insertAdjacentElement('afterend', el);
      cursor = el;
    }
  });

  // As seções posteriores aos pedidos passam a ser claramente material de conferência/detalhe.
  ['tempo','origem','instrucao','carinhoso','pin','atlas-11572','documentos','atlas-swimlane','rescisoria','visao','incisos'].forEach(id => {
    const el = q('#' + id);
    if (el) el.dataset.relatorSecondary = 'true';
  });

  // SIDEBAR: reconstrói a navegação na mesma sequência cognitiva do Relator.
  const nav = q('.side nav');
  if (nav) {
    nav.innerHTML = `
      <div class="nav-group">COMECE AQUI</div>
      <a href="#atlas-relator"><span class="dot"></span>Relator · 5 min</a>
      <a href="#atlas"><span class="dot"></span>Mapa dos 4 incisos</a>
      <a href="#atlas-decisao"><span class="dot"></span>Árvore decisória</a>
      <div class="nav-group">QUATRO FUNDAMENTOS</div>
      <a href="#sentenca"><span class="dot"></span>V · Regra de julgamento</a>
      <a href="#nfe9883"><span class="dot"></span>VIII · NF-e 9.883</a>
      <a href="#pagamentos"><span class="dot"></span>III · Cadeia financeira</a>
      <a href="#bradesco"><span class="dot"></span>VII · Prova bancária</a>
      <a href="#atlas-suframa"><span class="dot"></span>Matriz de comprovação</a>
      <div class="nav-group">RESPOSTA E DESFECHO</div>
      <a href="#contestacao"><span class="dot"></span>Contestação × réplica</a>
      <a href="#replica"><span class="dot"></span>Arquitetura da réplica</a>
      <a href="#pedidos"><span class="dot"></span>Pedidos</a>
      <div class="nav-group">CONFERÊNCIA</div>
      <a href="#tempo"><span class="dot"></span>Percurso temporal</a>
      <a href="#carinhoso"><span class="dot"></span>Prova de entrega</a>
      <a href="#pin"><span class="dot"></span>PIN / SUFRAMA</a>
      <a href="#atlas-11572"><span class="dot"></span>Família 11.572</a>
      <a href="#documentos"><span class="dot"></span>Índice documental</a>
      <a href="#atlas-swimlane"><span class="dot"></span>Swimlane</a>`;

    const links = qa('a[href^="#"]', nav);
    links.forEach(a => a.addEventListener('click', () => q('#sidebar')?.classList.remove('open')));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, {rootMargin:'-32% 0px -58% 0px', threshold:.01});
    links.forEach(a => {
      const target = q(a.getAttribute('href'));
      if (target) obs.observe(target);
    });
  }

  // Ferramenta lateral: linguagem coerente com a nova leitura.
  const firstTool = q('.side-tools button');
  if (firstTool) firstTool.textContent = 'Alternar leitura 5 min / completa';

  // O antigo bloco autônomo dos quatro incisos fica como detalhe de conferência; a síntese principal passa a ser o mapa + matriz.
  const oldIncisosHead = q('#incisos .section-head');
  if (oldIncisosHead) {
    oldIncisosHead.innerHTML = `<div><div class="section-index">QUADRO JURÍDICO DETALHADO</div><h3>Os quatro fundamentos, em leitura ampliada</h3></div><p class="section-intro">Quadro de conferência para quem desejar aprofundar a síntese apresentada no início do memorial.</p>`;
  }
})();