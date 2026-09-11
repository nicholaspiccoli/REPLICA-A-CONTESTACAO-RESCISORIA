(() => {
  'use strict';

  if (window.__PICCOLI_COMPLEMENTO_REPLICA_20260911__) return;
  window.__PICCOLI_COMPLEMENTO_REPLICA_20260911__ = true;

  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];

  const replica = q('#replica');
  if (!replica) return;

  const section = `
<section class="section alt" id="complementos-replica" data-complemento-replica="2026-09-11">
  <div class="section-inner">
    <div class="section-head reveal">
      <div>
        <div class="section-index">COMPLEMENTOS DOCUMENTAIS DA RÉPLICA</div>
        <h3>O que a revisão do acervo antigo efetivamente acrescenta</h3>
      </div>
      <p class="section-intro">A revisão realizada em 11.09.2026 não cria fundamento rescindente novo. O critério é estrito: motivo da rescisória → alegação da inicial → ataque da contestação → resposta da réplica → documento antigo que efetivamente esclarece ou fortalece esse ponto.</p>
    </div>

    <div class="callout reveal">
      <div class="label">CRITÉRIO DE INCORPORAÇÃO</div>
      <h4>Documento reencontrado só entra se alterar uma resposta concreta.</h4>
      <p>Não se transforma contexto histórico em causa autônoma de rescindibilidade. Não se converte ausência de documento em prova de inexistência. Não se chama de “prova nova” aquilo que não satisfaz o art. 966, VII. E não se desloca o núcleo já delimitado dos incisos III, V, VII e VIII.</p>
    </div>

    <div class="grid two" style="margin-top:18px">
      <div class="card reveal">
        <div class="meta">CONTESTAÇÃO · ITEM VI.6</div>
        <h4>Correspondência atribuída a Vanessa Foli</h4>
        <p>A réplica já retirou a qualificação de “confissão” e reconheceu que a mensagem de 14.10.2015 foi reproduzida apenas como imagem. A revisão documental não altera essa cautela: o original específico continua não localizado.</p>
        <p><strong>O que foi consolidado:</strong> correspondências anteriores preservadas confirmam Vanessa Foli como interlocutora real e recorrente da PICCOLI em assuntos financeiros da SIMBAL; e uma mensagem de 16.09.2015 registra pedido de depósito direto no mesmo padrão operacional descrito na narrativa de outubro.</p>
        <p><strong>Uso na réplica:</strong> corroboração de plausibilidade e de contexto para responder à impugnação; não autenticação por derivação da mensagem de 14.10.2015.</p>
      </div>

      <div class="card reveal">
        <div class="meta">CONTEXTO CONTEMPORÂNEO · 2015</div>
        <h4>A controvérsia sobre duplicatas precede o episódio de outubro</h4>
        <p>O acervo antigo contém cartas formais da própria SIMBAL, emitidas em abril de 2015, comunicando “desacordo comercial”, operações não concluídas e orientação para não protesto/devolução de títulos.</p>
        <p>Também se confirmou que o processo nº 0614260-23.2015.8.04.0001 era ação da PICCOLI contra a SIMBAL, em contexto de duplicatas inexistentes/em duplicidade e cartas de anuência.</p>
        <p><strong>Uso na réplica:</strong> demonstrar anterioridade e coerência histórica da controvérsia, sem presumir que os títulos específicos da monitória padeçam do mesmo vício.</p>
      </div>

      <div class="card reveal">
        <div class="meta">21.09.2015 · ELO CRONOLÓGICO</div>
        <h4>O problema dos títulos ainda estava ativo</h4>
        <p>Correspondência imediatamente anterior à lacuna documental registra a continuidade da discussão sobre protestos e a informação de que seriam reunidos “todos os títulos” para resolução.</p>
        <p><strong>Uso na réplica:</strong> contexto cronológico. O documento não será promovido a erro de fato autônomo do art. 966, VIII e não substitui a individualização das duplicatas discutidas.</p>
      </div>

      <div class="card reveal">
        <div class="meta">CONTROLE DE FIDELIDADE DOCUMENTAL</div>
        <h4>Reprodução antiga e fonte eletrônica coincidem em caso verificável</h4>
        <p>Em uma thread de 23.04.2015, os elementos de identificação da correspondência preservada coincidem com a reprodução documental de referência, fornecendo controle objetivo de fidelidade em um caso concreto.</p>
        <p><strong>Uso na réplica:</strong> reforçar que a impugnação genérica a reproduções de e-mails não autoriza desqualificar indistintamente todo o acervo. O resultado, porém, não permite presumir autenticidade de documentos distintos.</p>
      </div>
    </div>

    <div class="section-head reveal" style="margin-top:42px;margin-bottom:20px">
      <div>
        <div class="section-index">ART. 966 · FILTRO DE PERTINÊNCIA</div>
        <h3 style="font-size:clamp(28px,3.6vw,44px)">O que muda — e o que permanece igual — em cada fundamento</h3>
      </div>
      <p class="section-intro">A utilidade dos documentos antigos é subordinada às causas rescindentes já propostas. O material não deve ampliar artificialmente o objeto da ação.</p>
    </div>

    <div class="grounds reveal" aria-label="Matriz dos complementos por inciso">
      <div class="ground g-v" data-inciso="V">
        <div class="rank">REFORÇO CONTEXTUAL</div>
        <h4>Violação manifesta de norma jurídica</h4>
        <p>Os documentos antigos não substituem o núcleo do inciso V: regra de julgamento, ônus da prova e insuficiência da prova direta de entrega. Servem apenas para responder objeções documentais e demonstrar que a controvérsia mercantil era contemporânea, e não construída na rescisória.</p>
      </div>
      <div class="ground g-viii" data-inciso="VIII">
        <div class="rank">NÚCLEO INALTERADO</div>
        <h4>Erro de fato</h4>
        <p>Permanece centrado na NF-e 9.883, na informação oficial da SEFAZ e na premissa utilizada pela sentença. A correspondência de 21.09.2015 é contexto, não novo erro de fato.</p>
      </div>
      <div class="ground g-iii" data-inciso="III">
        <div class="rank">SEM NOVO FUNDAMENTO DIRETO</div>
        <h4>Dolo da parte vencedora</h4>
        <p>A revisão documental não acrescentou elemento que, isoladamente, demonstre dolo processual na obtenção da sentença. O inciso III continua dependente da prova individualizada já construída para a cobrança, os pagamentos e a cadeia do crédito.</p>
      </div>
      <div class="ground g-vii" data-inciso="VII">
        <div class="rank">SEM AMPLIAÇÃO</div>
        <h4>Prova nova</h4>
        <p>Os documentos antigos revistos não serão qualificados, por si, como prova nova do art. 966, VII. O núcleo subsidiário permanece ligado à prova bancária produzida no processo contra o Bradesco e aos requisitos próprios do inciso.</p>
      </div>
    </div>

    <div class="section-head reveal" style="margin-top:42px;margin-bottom:20px">
      <div>
        <div class="section-index">INICIAL → CONTESTAÇÃO → RÉPLICA</div>
        <h3 style="font-size:clamp(28px,3.6vw,44px)">Pontos concretos de complementação da peça</h3>
      </div>
      <p class="section-intro">O objetivo não é criar capítulos paralelos, mas inserir cada documento no tópico em que ele responde a uma proposição da defesa.</p>
    </div>

    <div class="table-wrap reveal">
      <table>
        <thead><tr><th>Ponto da réplica</th><th>Estado atual</th><th>Complemento documental</th><th>Efeito jurídico permitido</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>3.13.6 · Correspondência de 14.10.2015</strong></td>
            <td>Retira “confissão”; reconhece reprodução apenas em imagem; reserva eventual juntada nos termos do art. 435 do CPC.</td>
            <td>Correspondências anteriores confirmam Vanessa como interlocutora; e-mail de 16.09 confirma o mesmo mecanismo de depósito direto.</td>
            <td>Reforçar plausibilidade e responder à impugnação de inverossimilhança. Não afirmar que o documento de 14.10 foi autenticado.</td>
          </tr>
          <tr>
            <td><strong>3.10.2 · Processo 0614260/2015</strong></td>
            <td>Já tratado como antecedente histórico, sem presunção automática de invalidade.</td>
            <td>Confirmação de que era ação da PICCOLI contra a SIMBAL e de que a controvérsia sobre duplicatas inexistentes/em duplicidade já era judicializada em 2015.</td>
            <td>Corrigir leitura histórica e demonstrar anterioridade do litígio, sem transpor o resultado para títulos distintos.</td>
          </tr>
          <tr>
            <td><strong>3.13.7 · Disciplina do acervo documental</strong></td>
            <td>Análises auxiliares não são tratadas como prova autônoma; prevalece o documento-fonte.</td>
            <td>Thread de 23.04.2015 permite conferência entre reprodução documental e correspondência preservada em um caso verificável.</td>
            <td>Reforçar método de conferência e simetria probatória, sem generalizar autenticidade.</td>
          </tr>
          <tr>
            <td><strong>Art. 966, V</strong></td>
            <td>Núcleo na regra de julgamento e no ônus da prova, não em revaloração genérica.</td>
            <td>Cartas de desacordo + processo 0614260 + documentação contemporânea da disputa.</td>
            <td>Contexto de anterioridade e resposta a alegação de construção retrospectiva; não fundamento autônomo.</td>
          </tr>
          <tr>
            <td><strong>Arts. 966, III, VII e VIII</strong></td>
            <td>Núcleos já delimitados na réplica.</td>
            <td>A revisão de documentos antigos não forneceu base segura para ampliar esses três incisos.</td>
            <td>Manter a delimitação atual e evitar superinterpretação.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout red reveal" style="margin-top:22px">
      <div class="label">O QUE NÃO ENTRA NA RÉPLICA</div>
      <h4>A varredura documental não vira narrativa processual.</h4>
      <p>Não interessa à peça relatar quantidade de arquivos examinados, programas antigos, caches, equipamentos, logs, mídias, falsos positivos ou etapas técnicas da busca. Esses elementos serviram apenas para localizar e qualificar documentos. Na réplica entram o documento, o fato objetivo que dele emerge, a remissão aos autos e sua função jurídica específica.</p>
    </div>
  </div>
</section>`;

  replica.insertAdjacentHTML('afterend', section);

  // Navegação: insere apenas um novo item no grupo já existente, sem criar categoria visual nova.
  const replicaLink = q('.side nav a[href="#replica"]');
  if (replicaLink && !q('.side nav a[href="#complementos-replica"]')) {
    replicaLink.insertAdjacentHTML('afterend', '<a href="#complementos-replica"><span class="dot"></span>Complementos documentais</a>');
  }

  // Índice documental: acrescenta somente os documentos com utilidade concreta para a resposta.
  const docBody = q('#docTable tbody') || q('#docBody');
  if (docBody && !q('tr[data-complemento-doc="email-1609"]', docBody)) {
    const rows = [
      ['email-1609','Correspondência de 16.09.2015','Pedido de depósito direto em padrão operacional anterior ao episódio controvertido.','Acervo antigo · 16.09.2015','Corroboração contextual do item 3.13.6','contexto'],
      ['vanessa','Correspondências Vanessa Foli / PICCOLI — 2015','Confirma canal de comunicação real e recorrente sobre duplicatas/protestos.','Acervo antigo · abr–set/2015','Interlocução real; não prova o conteúdo de 14.10','contexto'],
      ['thread-2109','Thread de 21.09.2015','Questão dos títulos/protestos seguia ativa imediatamente antes do episódio narrado.','Acervo antigo · 21.09.2015','Contexto cronológico; não novo art. 966, VIII','contexto'],
      ['desacordo','Cartas SIMBAL — desacordo comercial · abr/2015','Operações não concluídas; orientação de não protesto e devolução de títulos.','Documentos SIMBAL · 14–30.04.2015','Anterioridade da controvérsia; sem presunção sobre títulos diversos','apoio'],
      ['cautelar','Ação Cautelar 0614260-23.2015.8.04.0001','Ação da PICCOLI contra a SIMBAL sobre duplicatas inexistentes/em duplicidade e anuências.','TJAM · 2015','Correção histórica e contextualização do item 3.10.2','apoio'],
      ['match','Thread de 23.04.2015 — correlação com fonte preservada','Reprodução documental e correspondência eletrônica coincidem em um caso verificável.','Acervo antigo · 23.04.2015','Controle de fidelidade do método; sem generalização','apoio']
    ];
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.complementoDoc = r[0];
      tr.innerHTML = `<td><strong>${r[1]}</strong></td><td>${r[2]}</td><td><span class="doc-ref">${r[3]}</span></td><td>${r[4]}</td><td><span class="status warn">${r[5]}</span></td>`;
      docBody.appendChild(tr);
    });
  }

  // Integração com o Modo Relator existente: oculta o bloco de detalhamento quando o modo reduzido
  // já estiver escondendo as seções secundárias do memorial.
  const added = q('#complementos-replica');
  if (added) {
    const observer = new MutationObserver(() => {
      const body = document.body;
      const relatorOn = body.classList.contains('relator-mode') || body.dataset.mode === 'relator';
      if (relatorOn) added.classList.add('relator-compatible');
      else added.classList.remove('relator-compatible');
    });
    observer.observe(document.body, {attributes:true, attributeFilter:['class','data-mode']});
  }
})();
