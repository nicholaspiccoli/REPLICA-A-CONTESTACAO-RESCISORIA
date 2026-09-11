(() => {
  'use strict';

  if (window.__PICCOLI_FORENSE_20260911__) return;
  window.__PICCOLI_FORENSE_20260911__ = true;

  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];

  const insertHTMLAfter = (node, html) => {
    if (!node) return null;
    node.insertAdjacentHTML('afterend', html);
    return node.nextElementSibling;
  };

  const addonCSS = `
    .forense-proofline{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0}
    .forense-proofline .card{min-height:150px}
    .forense-proofline .metric{font-size:28px}
    .forense-scope{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px}
    .forense-scope .mini{min-height:118px}
    .forense-label{font-size:9px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--muted);display:block;margin-bottom:6px}
    .forense-source{font-size:10px;color:var(--muted);margin-top:10px;border-top:1px solid var(--line);padding-top:9px}
    .forense-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    .forense-actions a{font:700 10px Inter;text-decoration:none;border:1px solid var(--line);border-radius:999px;padding:7px 10px;background:var(--white)}
    .forense-actions a:hover{border-color:var(--gold);color:var(--red)}
    .forense-limit{border-left:4px solid var(--gold)}
    @media(max-width:900px){.forense-proofline{grid-template-columns:repeat(2,minmax(0,1fr))}.forense-scope{grid-template-columns:1fr}}
    @media(max-width:600px){.forense-proofline{grid-template-columns:1fr}}
  `;
  const style = document.createElement('style');
  style.id = 'forense-20260911-style';
  style.textContent = addonCSS;
  document.head.appendChild(style);

  const sectionOverview = `
<section class="section alt" id="forense-2026" data-forense="2026-09-11">
  <div class="section-inner">
    <div class="section-head">
      <div><div class="section-index">09-A • ACHADOS FORENSES DE 11.09.2026</div><h3>O que a investigação técnica efetivamente acrescenta à réplica</h3></div>
      <p class="section-intro">A camada forense não cria causa rescindente nova. Ela responde objeções documentais formuladas na contestação, reforça o contexto do inciso V e delimita, com igual importância, aquilo que a perícia não autoriza afirmar.</p>
    </div>
    <div class="callout">
      <div class="label">REGRA DE INTEGRIDADE</div>
      <h4>Fato técnico, corroboração e fundamento rescindente permanecem separados.</h4>
      <p>Os achados abaixo somente ingressam na réplica na extensão em que forem acompanhados da fonte primária pertinente e utilizados para responder à contestação. Não se converte ausência de vestígio em inexistência; não se transforma contexto em prova autônoma; e nenhum achado Toshiba é apresentado, isoladamente, como prova nova do art. 966, VII.</p>
    </div>
    <div class="forense-proofline">
      <div class="card"><div class="meta">FATO TÉCNICO</div><div class="metric">34 dias</div><h4>Computador sem atividade</h4><p>Zero eventos de qualquer natureza entre 24.09.2015, 21:57, e 28.10.2015, 14:23.</p></div>
      <div class="card"><div class="meta">CORROBORAÇÃO INDEPENDENTE</div><div class="metric">0 / 0</div><h4>Silêncio geral</h4><p>Documentos e e-mails de qualquer remetente caem simultaneamente a zero; a lacuna não é seletiva da SIMBAL.</p></div>
      <div class="card"><div class="meta">DOCUMENTO DA PRÓPRIA RÉ</div><div class="metric">8</div><h4>Cartas de “desacordo comercial”</h4><p>Entre 14 e 30.04.2015, a própria SIMBAL instruiu instituição financeira a não protestar e devolver títulos.</p></div>
      <div class="card"><div class="meta">PRECEDENTE TÉCNICO</div><div class="metric">16.09</div><h4>E-mail original preservado</h4><p>Jessica Rozin, com Vanessa Foli em cópia, solicita depósito direto no mesmo padrão operacional descrito na narrativa de outubro.</p></div>
    </div>
    <div class="forense-scope">
      <div class="mini"><b>ART. 966, V</b><span>É o principal ponto de aderência: a perícia reforça a resposta à contestação e a confiabilidade contextual do acervo, sem substituir SEFAZ/EFD, entrega ou ônus probatório.</span></div>
      <div class="mini"><b>ART. 966, III e VII</b><span>Não são ampliados pela perícia. Não há achado Toshiba que, sozinho, demonstre dolo processual da SIMBAL ou preencha o requisito técnico de prova nova.</span></div>
      <div class="mini"><b>ART. 966, VIII</b><span>O núcleo permanece a NF-e 9.883 e a premissa decisória correspondente. O thread de 21.09 é apenas contextual, sem elevar-se a fundamento autônomo.</span></div>
    </div>
  </div>
</section>`;

  const sectionGap = `
<section class="section" id="forense-lacuna" data-forense="2026-09-11">
  <div class="section-inner">
    <div class="section-head">
      <div><div class="section-index">09-B • CONTESTAÇÃO VI.6</div><h3>A ausência do e-mail de outubro deixa de sustentar uma inferência de seleção documental</h3></div>
      <p class="section-intro">A perícia não encontrou o original de 14.10.2015. O dado relevante é outro: encontrou uma causa técnica objetiva, geral e independente para a lacuna.</p>
    </div>
    <div class="compare">
      <div class="col claim"><span class="badge red">contestação</span><h4>Imagem sem cabeçalhos técnicos</h4><p>A SIMBAL impugna a mensagem atribuída a Vanessa Foli porque o original não foi juntado e não há cabeçalhos técnicos verificáveis.</p></div>
      <div class="bridge">→</div>
      <div class="col reply"><span class="badge green">apurado</span><h4>NOT_FOUND + causa técnica demonstrada</h4><p>O original continua não localizado. Contudo, os Event Logs mostram que o computador ficou sem atividade durante toda a janela crítica e a lacuna atingiu indiscriminadamente o perfil, os documentos e todas as mensagens.</p></div>
    </div>
    <div class="flow" style="grid-template-columns:repeat(5,minmax(0,1fr));margin-top:20px">
      <div class="step"><small>16.09.2015</small><b>Padrão real preservado</b><p>E-mail original de depósito direto, com Jessica e Vanessa, tecnicamente verificável.</p></div>
      <div class="step"><small>21.09.2015</small><b>Problema ainda ativo</b><p>SIMBAL informa que reuniria “todos os títulos” para resolução.</p></div>
      <div class="step"><small>24.09.2015</small><b>Última atividade</b><p>Última sessão normal antes da lacuna.</p></div>
      <div class="step"><small>13–16.10.2015</small><b>Episódio alegado</b><p>Mensagens e pagamento narrados na inicial não são recuperados nesta fonte local.</p></div>
      <div class="step"><small>28.10.2015</small><b>Atividade retorna</b><p>O mesmo computador/perfil volta a registrar atividade.</p></div>
    </div>
    <div class="grid two" style="margin-top:18px">
      <div class="card"><span class="badge green">o que demonstra</span><h4>A lacuna é estrutural e não seletiva</h4><p>Zero eventos de Windows por 34 dias, somado a zero documentos e zero e-mails de qualquer origem, é incompatível com a hipótese de simples remoção seletiva de uma mensagem da SIMBAL.</p><div class="forense-source">EVID-WIN-CRITICAL · EVID-HOST-0010 · EVID-0001 · EVID-0010</div></div>
      <div class="card forense-limit"><span class="badge gold">limite probatório</span><h4>Não autentica o e-mail de 14.10</h4><p>A perícia explica a ausência local; não transforma a imagem da inicial em original, não prova o conteúdo específico da mensagem e não comprova o pagamento de R$ 4.353,82.</p><div class="forense-source">Função na réplica: resposta específica ao item VI.6 + art. 435 CPC, sem nova causa de pedir.</div></div>
    </div>
  </div>
</section>`;

  const sectionEmail = `
<section class="section alt" id="forense-email" data-forense="2026-09-11">
  <div class="section-inner">
    <div class="section-head">
      <div><div class="section-index">09-C • E-MAIL PRECEDENTE</div><h3>16.09.2015: o mesmo padrão operacional existia antes da lacuna</h3></div>
      <p class="section-intro">O achado não autentica por derivação a mensagem de 14.10. Ele reduz, porém, a plausibilidade da tese de que o padrão narrado seria inverossímil ou fabricado.</p>
    </div>
    <div class="flow" style="grid-template-columns:repeat(5,minmax(0,1fr))">
      <div class="step"><small>REMETENTE</small><b>Jessica Rozin</b><p>Correspondência original preservada no mailstore.</p></div>
      <div class="step"><small>CÓPIA</small><b>Vanessa Foli</b><p>Interlocutora real e recorrente em assuntos financeiros SIMBAL.</p></div>
      <div class="step"><small>ORIENTAÇÃO</small><b>Depósito direto</b><p>O mesmo tipo de solicitação descrito no episódio de outubro.</p></div>
      <div class="step"><small>CONTA</small><b>BB Ag. 3407-X</b><p>Conta coincidente com o padrão narrado; número integral deve permanecer no documento juntado, não necessariamente na página pública.</p></div>
      <div class="step"><small>REFERÊNCIA</small><b>NF 10106A</b><p>Nota correlata fisicamente confirmada no acervo local.</p></div>
    </div>
    <div class="grid two" style="margin-top:18px">
      <div class="card"><span class="badge green">corroboração forte</span><h4>Conta + pessoas + mecanismo + período</h4><p>Os quatro elementos centrais do padrão operacional aparecem conjuntamente em mensagem original anterior, com cabeçalhos e artefato técnico preservado.</p><div class="forense-source">EVID-EMAIL-PRECEDENTE-001 · FACT_STRONG_CORROBORATION</div></div>
      <div class="card forense-limit"><span class="badge red">não extrapolar</span><h4>Não é “confissão” e não é art. 966, VII</h4><p>O e-mail não admite fraude, não demonstra a quitação dos títulos litigiosos e, por ter permanecido no computador da própria autora, não deve ser rotulado como prova nova rescindente.</p><div class="forense-source">Uso: reforço contextual e resposta probatória à impugnação do item VI.6.</div></div>
    </div>
  </div>
</section>`;

  const sectionPattern = `
<section class="section" id="forense-padrao" data-forense="2026-09-11">
  <div class="section-inner">
    <div class="section-head">
      <div><div class="section-index">09-D • PADRÃO DOCUMENTADO EM 2015</div><h3>Antes de outubro, a controvérsia sobre duplicatas SIMBAL já era formal, documental e judicializada</h3></div>
      <p class="section-intro">Aqui o valor é contextual e de coerência histórica: demonstrar que o litígio sobre duplicatas não surgiu com a rescisória nem com a construção posterior da narrativa.</p>
    </div>
    <div class="grid three">
      <div class="card"><div class="meta">14–30.04.2015</div><h4>8 cartas da própria SIMBAL</h4><p>A empresa informa “desacordo comercial”, declara operações não concluídas e orienta instituição financeira a não protestar e devolver títulos.</p><div class="forense-source">EVID-HOST-0001_0009 · FACT</div></div>
      <div class="card"><div class="meta">2015 · TJAM</div><h4>Processo 0614260-23.2015.8.04.0001</h4><p>Tratava-se de ação da PICCOLI contra a SIMBAL — e não do inverso. O processo registra controvérsia sobre duplicatas inexistentes/em duplicidade e cartas de anuência.</p><div class="forense-source">EVID-HOST-0008 · FACT quanto à existência/teor citado; correlações auxiliares permanecem inferenciais.</div></div>
      <div class="card"><div class="meta">21.09.2015</div><h4>“Todos os títulos”</h4><p>Em thread imediatamente anterior à lacuna, a SIMBAL reconhece internamente que a questão dos títulos/protestos seguia ativa e seria consolidada para resolução.</p><div class="forense-source">EVID-EMAIL-0220_0222 · FACT contextual</div></div>
    </div>
    <div class="callout red" style="margin-top:18px">
      <div class="label">LIMITE JURÍDICO</div>
      <h4>O padrão anterior não prova, por presunção, vício nas duplicatas específicas da monitória.</h4>
      <p>Esses documentos servem para contextualizar a plausibilidade e a anterioridade da controvérsia e para corrigir a leitura do processo 0614260. Não substituem a individualização de cada título, não demonstram por si sós o dolo do art. 966, III e não deslocam o núcleo do inciso VIII.</p>
    </div>
  </div>
</section>`;

  const sectionLimits = `
<section class="section alt" id="forense-limites" data-forense="2026-09-11">
  <div class="section-inner">
    <div class="section-head">
      <div><div class="section-index">09-E • FILTRO RESCINDENTE</div><h3>O que foi encontrado — e deliberadamente não será inflado na réplica</h3></div>
      <p class="section-intro">A utilidade do relatório também está em fechar hipóteses fracas. O memorial passa a registrar expressamente esses limites.</p>
    </div>
    <div class="grid four">
      <div class="card"><span class="badge red">III</span><h4>Dolo não demonstrado pela perícia</h4><p>Nenhum artefato do Toshiba, isoladamente, prova dolo processual da SIMBAL na obtenção da sentença. O inciso III permanece dependente da cadeia probatória própria já articulada na réplica.</p></div>
      <div class="card"><span class="badge blue">VII</span><h4>Nenhum achado Toshiba é prova nova</h4><p>Os artefatos estavam fisicamente no computador da autora; a impossibilidade de uso anterior não foi demonstrada. O inciso VII continua concentrado na produção bancária superveniente.</p></div>
      <div class="card"><span class="badge red">VIII</span><h4>Thread de 21.09 é contexto</h4><p>Sem cotejo exato com a ratio decidendi, a mensagem não deve ser elevada a erro de fato. O núcleo VIII continua a NF-e 9.883.</p></div>
      <div class="card"><span class="badge gold">NOT_FOUND</span><h4>Ausência não é inexistência</h4><p>NF-es, o e-mail de outubro e o registro bancário não aparecerem no host não autoriza afirmar que nunca existiram; a própria lacuna técnica explica a ausência.</p></div>
    </div>
    <div class="callout" style="margin-top:18px"><div class="label">CONCLUSÃO PARA A RÉPLICA</div><h4>Entram quatro blocos; saem as extrapolações.</h4><p>Entram: (1) causa técnica objetiva da lacuna; (2) e-mail original de 16.09 como corroboração do padrão; (3) cartas SIMBAL + processo 0614260 como contexto contemporâneo da disputa; e (4) thread de 21.09 apenas como elo cronológico. Não entram como novos fundamentos autônomos os demais resultados negativos, artefatos de cache, POP3, ApexSales, USB/LNK, Prefetch ou compatibilidade numérica de NF-e.</p></div>
  </div>
</section>`;

  const replica = q('#replica');
  if (replica && !q('#forense-2026')) {
    let anchor = insertHTMLAfter(replica, sectionOverview);
    anchor = insertHTMLAfter(anchor, sectionGap);
    anchor = insertHTMLAfter(anchor, sectionEmail);
    anchor = insertHTMLAfter(anchor, sectionPattern);
    insertHTMLAfter(anchor, sectionLimits);
  }

  const nav = q('.side nav');
  if (nav && !q('a[href="#forense-2026"]', nav)) {
    const replicaLink = q('a[href="#replica"]', nav);
    const block = document.createElement('div');
    block.innerHTML = `
      <div class="nav-group">Achados de 11.09.2026</div>
      <a href="#forense-2026"><span class="dot"></span>Síntese forense</a>
      <a href="#forense-lacuna"><span class="dot"></span>Lacuna técnica</a>
      <a href="#forense-email"><span class="dot"></span>E-mail 16.09</a>
      <a href="#forense-padrao"><span class="dot"></span>Padrão SIMBAL 2015</a>
      <a href="#forense-limites"><span class="dot"></span>Limites probatórios</a>`;
    const nodes = [...block.children];
    const reference = replicaLink ? replicaLink.nextSibling : null;
    nodes.forEach(n => nav.insertBefore(n, reference));
    qa('.side nav a[href^="#forense-"]').forEach(a => a.addEventListener('click', () => q('#sidebar')?.classList.remove('open')));
  }

  const docBody = q('#docBody');
  if (docBody && !q('tr[data-forense-doc="win-critical"]', docBody)) {
    const rows = [
      ['win-critical','Event Logs / Windows — lacuna crítica','Zero eventos entre 24.09.2015 21:57 e 28.10.2015 14:23; 34 dias sem atividade.','EVID-WIN-CRITICAL','Resposta ao VI.6; reforço contextual do inciso V.','crítico'],
      ['host-0010','Silêncio documental geral','Documentos e e-mails de qualquer origem caem a zero na mesma janela; não há seletividade SIMBAL.','EVID-HOST-0010','Corroboração independente da causa técnica da lacuna.','crítico'],
      ['email-1609','E-mail original de 16.09.2015','Jessica + Vanessa; depósito direto; mesmo padrão operacional narrado para outubro.','EVID-EMAIL-PRECEDENTE-001','Corroboração forte; não art. 966, VII.','crítico'],
      ['desacordo','Cartas “desacordo comercial” da SIMBAL','8 cartas de 14–30.04.2015: operações não concluídas; não protestar; devolver títulos.','EVID-HOST-0001_0009','Contexto contemporâneo da controvérsia; apoio ao V.','crítico'],
      ['proc0614260','Ação Cautelar 0614260-23.2015.8.04.0001','PICCOLI contra SIMBAL; duplicatas inexistentes/em duplicidade e cartas de anuência.','EVID-HOST-0008','Corrige a leitura do precedente; contextual.','depurado'],
      ['thread2109','Thread de 21.09.2015','SIMBAL reúne “todos os títulos” para resolução antes da lacuna.','EVID-EMAIL-0220_0222','Contexto cronológico; não novo VIII.','depurado']
    ];
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.forenseDoc = r[0];
      tr.innerHTML = `<td><strong>${r[1]}</strong></td><td>${r[2]}</td><td><span class="doc-ref">${r[3]}</span></td><td>${r[4]}</td><td><span class="status ${r[5] === 'crítico' ? 'critical' : 'warn'}">${r[5]}</span></td>`;
      docBody.appendChild(tr);
    });
  }

  const addMini = (id, title, text) => {
    const grid = q(`#${id} .mini-grid`);
    if (!grid || q(`[data-forense-mini="${id}"]`, grid)) return;
    const div = document.createElement('div');
    div.className = 'mini';
    div.dataset.forenseMini = id;
    div.innerHTML = `<b>${title}</b><span>${text}</span>`;
    grid.appendChild(div);
  };
  addMini('gv','Forense 11.09','Máquina desligada + silêncio geral + cartas SIMBAL reforçam a resposta probatória, sem substituir a regra jurídica dos arts. 373, I, e 702, §1º.');
  addMini('giii','Filtro forense','Nenhum achado Toshiba prova, isoladamente, dolo processual; o processo 0614260 e as cartas funcionam apenas como contexto histórico.');
  addMini('gvii','Filtro forense','Nenhum achado local preenche, isoladamente, o inciso VII. O núcleo de prova nova permanece a produção bancária judicial posterior.');
  addMini('gviii','Filtro forense','O thread de 21.09 é contextual. Sem correlação direta com a ratio decidendi, o núcleo VIII permanece a NF-e 9.883.');

  const relatorQs = q('#relatorQs');
  if (relatorQs && !q('[data-forense-q]', relatorQs)) {
    const qEl = document.createElement('div');
    qEl.className = 'atlas-q';
    qEl.dataset.forenseQ = '1';
    qEl.innerHTML = '<i>8</i><div><b>A ausência do original de outubro é seletiva?</b><p>Não segundo a perícia: o computador ficou sem atividade por 34 dias e o silêncio documental foi geral. Isso explica a ausência local, mas não autentica o conteúdo impugnado.</p></div>';
    relatorQs.appendChild(qEl);
  }

  const addedSections = qa('section[data-forense="2026-09-11"]');
  const addedLinks = qa('.side nav a[href^="#forense-"]');
  if ('IntersectionObserver' in window && addedSections.length && addedLinks.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        addedLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
    addedSections.forEach(s => obs.observe(s));
  }
})();
