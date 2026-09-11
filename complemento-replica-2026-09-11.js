(() => {
  'use strict';

  if (window.__PICCOLI_REFORCOS_REPLICA_20260911__) return;
  window.__PICCOLI_REFORCOS_REPLICA_20260911__ = true;

  const q = (s, r = document) => r.querySelector(s);

  // Remove qualquer vestígio de uma versão anterior que criasse seção autônoma.
  q('#complementos-replica')?.remove();
  q('.side nav a[href="#complementos-replica"]')?.remove();

  const makeBlock = (html) => {
    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();
    return wrap.firstElementChild;
  };

  // 1) CONTESTAÇÃO: reforço histórico/documental no local em que a defesa tenta
  // reduzir a controvérsia a construção retrospectiva ou a reproduções isoladas.
  const contestacao = q('#contestacao .section-inner');
  if (contestacao && !q('#reforco-contestacao-2015')) {
    const block = makeBlock(`
      <div id="reforco-contestacao-2015" class="grid two" style="margin-top:18px">
        <div class="card">
          <div class="meta">CONTEXTO DOCUMENTAL CONTEMPORÂNEO</div>
          <h4>A controvérsia sobre duplicatas já existia em 2015</h4>
          <p>Documentação contemporânea demonstra que, meses antes dos fatos posteriormente discutidos, já havia controvérsia formal entre PICCOLI e SIMBAL envolvendo duplicatas apontadas como inexistentes ou em duplicidade, protestos e cartas de anuência.</p>
          <p><strong>Função jurídica:</strong> afastar a ideia de construção retrospectiva da controvérsia, sem presumir que títulos distintos possuam automaticamente o mesmo vício.</p>
        </div>
        <div class="card">
          <div class="meta">AÇÃO 0614260-23.2015.8.04.0001</div>
          <h4>Antecedente processual diretamente relacionado à mesma relação comercial</h4>
          <p>O processo de 2015 foi ajuizado pela PICCOLI contra a SIMBAL e documentou, naquele contexto, discussão sobre duplicatas inexistentes/em duplicidade e cancelamento de protestos.</p>
          <p><strong>Limite:</strong> o antecedente serve para contextualização e coerência histórica; não substitui a prova individual dos títulos da monitória rescindenda.</p>
        </div>
      </div>`);
    contestacao.appendChild(block);
  }

  // 2) PAGAMENTOS / ART. 966, III: o e-mail de setembro entra apenas como prova
  // do modo operacional de cobrança/pagamento por canal direto, nunca como prova
  // de entrega, nem como correlação com documento físico ou NF específica.
  const pagamentos = q('#pagamentos .section-inner');
  if (pagamentos && !q('#reforco-pagamentos-diretos')) {
    const block = makeBlock(`
      <div id="reforco-pagamentos-diretos" class="callout" style="margin-top:18px">
        <div class="label">REFORÇO SOBRE A DINÂMICA DOS PAGAMENTOS</div>
        <h4>Os pagamentos não seguiam necessariamente um único canal bancário.</h4>
        <p>Correspondência corporativa da própria SIMBAL, contemporânea à relação comercial, registra títulos mantidos “em carteira” e orientação para pagamento mediante depósito direto em conta indicada pela fornecedora. O dado é relevante porque demonstra a coexistência de formas distintas de liquidação e ajuda a explicar por que a reconstrução financeira não pode ser reduzida à fórmula “um título = um boleto = um beneficiário”.</p>
        <p style="margin-top:10px"><strong>Alcance:</strong> o e-mail demonstra a existência desse modo operacional; a comprovação de pagamentos específicos e de sua pulverização entre SIMBAL, fundos e outros agentes depende dos extratos bancários e da individualização de cada lançamento.</p>
      </div>`);
    pagamentos.appendChild(block);
  }

  // 3) BRADESCO: conecta o dado operacional anterior à leitura dos extratos,
  // sem transformar o e-mail em prova nova ou em prova de pagamento específico.
  const bradesco = q('#bradesco .section-inner');
  if (bradesco && !q('#reforco-bradesco-canais')) {
    const block = makeBlock(`
      <div id="reforco-bradesco-canais" class="card" style="margin-top:18px">
        <div class="meta">LEITURA CONJUNTA DOS EXTRATOS</div>
        <h4>Pluralidade de canais de liquidação</h4>
        <p>A documentação bancária deve ser lida em conjunto com a prática comercial contemporânea já documentada: havia títulos fora do fluxo bancário ordinário e instruções de pagamento direto. Por isso, depósitos em favor da própria SIMBAL e pagamentos a fundos ou agentes distintos precisam ser individualizados antes de qualquer conclusão sobre inadimplemento.</p>
        <p><strong>Limite probatório:</strong> essa circunstância não prova, sozinha, a quitação de título litigioso; ela impede apenas que a ausência de correspondência linear entre boleto, título e beneficiário seja tratada como prova automática de ausência de pagamento.</p>
      </div>`);
    bradesco.appendChild(block);
  }

  // 4) RÉPLICA: síntese metodológica discreta, integrada à arquitetura já existente.
  const replica = q('#replica .section-inner');
  if (replica && !q('#reforco-replica-metodo')) {
    const block = makeBlock(`
      <div id="reforco-replica-metodo" class="card" style="margin-top:18px">
        <div class="meta">REFORÇO DA DEPURAÇÃO DOCUMENTAL</div>
        <h4>Documentação antiga só é utilizada onde responde a uma proposição concreta da defesa.</h4>
        <p>O material contemporâneo da relação comercial foi distribuído pelos próprios pontos da réplica aos quais pertence: histórico da controvérsia, dinâmica de pagamento e leitura dos extratos. Não se cria fundamento rescindente novo, não se amplia o art. 966, VII e não se desloca o núcleo do erro de fato já delimitado.</p>
      </div>`);
    replica.appendChild(block);
  }

  // 5) ÍNDICE DOCUMENTAL: acrescenta apenas referências com função jurídica concreta.
  const docBody = q('#docTable tbody') || q('#docBody');
  if (docBody && !q('tr[data-reforco-doc="pagamento-direto"]', docBody)) {
    const rows = [
      ['pagamento-direto','Correspondência corporativa SIMBAL · set/2015','Registra títulos “em carteira” e orientação de pagamento por depósito direto.','Acervo contemporâneo · set/2015','Contextualiza pluralidade de canais de liquidação','apoio'],
      ['cautelar-2015','Ação 0614260-23.2015.8.04.0001','PICCOLI contra SIMBAL; duplicatas inexistentes/em duplicidade e anuências.','TJAM · 2015','Anterioridade e coerência histórica da controvérsia','apoio'],
      ['thread-2109','Correspondência de 21.09.2015','Questão de títulos/protestos permanecia ativa no período.','Acervo contemporâneo · 21.09.2015','Contexto cronológico; sem criar novo art. 966, VIII','contexto']
    ];
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.reforcoDoc = r[0];
      tr.innerHTML = `<td><strong>${r[1]}</strong></td><td>${r[2]}</td><td><span class="doc-ref">${r[3]}</span></td><td>${r[4]}</td><td><span class="status warn">${r[5]}</span></td>`;
      docBody.appendChild(tr);
    });
  }

  // Conteúdo inserido dinamicamente deve aparecer imediatamente. Não usamos a classe
  // .reveal nos novos elementos para evitar o espaço em branco causado pelo observer
  // inicial do documento, que roda antes desta injeção.
})();
