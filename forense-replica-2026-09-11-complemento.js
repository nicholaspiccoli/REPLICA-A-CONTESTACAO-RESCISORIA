(() => {
  'use strict';
  if (window.__PICCOLI_FORENSE_20260911_COMPLEMENTO__) return;
  window.__PICCOLI_FORENSE_20260911_COMPLEMENTO__ = true;

  const q = (s, r = document) => r.querySelector(s);

  const emailSection = q('#forense-email .section-inner');
  if (emailSection && !q('[data-forense-extra="email-method"]', emailSection)) {
    const block = document.createElement('div');
    block.dataset.forenseExtra = 'email-method';
    block.innerHTML = `
      <div class="section-head" style="margin-top:34px;margin-bottom:18px">
        <div><div class="section-index">CONTROLES DE CORROBORAÇÃO</div><h3 style="font-size:clamp(25px,3vw,36px)">Dois achados adicionais qualificam a resposta à impugnação documental</h3></div>
        <p class="section-intro">Nenhum deles autentica por derivação o e-mail ausente; ambos reduzem a margem para tratar a narrativa como criação isolada ou desconectada do acervo contemporâneo.</p>
      </div>
      <div class="grid two">
        <div class="card"><span class="badge green">canal confirmado</span><h4>Vanessa Foli era interlocutora real e recorrente</h4><p>Múltiplos e-mails originais de abril a setembro de 2015 confirmam comunicação direta Vanessa/Jonny sobre duplicatas e protestos, antes do episódio controvertido.</p><div class="forense-source">EVID-0002 · FACT — prova a relação comunicacional, não o conteúdo de 14.10.2015.</div></div>
        <div class="card"><span class="badge green">controle de método</span><h4>Um documento processual já possui MATCH_EXACT com o mailstore</h4><p>Thread de 23.04.2015: Message-ID e timestamp do documento de referência correspondem ao e-mail original preservado. O achado demonstra, em ao menos um caso verificável, fidelidade entre reprodução documental e fonte eletrônica.</p><div class="forense-source">EVID-0003_0009 · FACT · art. 966, V — não autoriza generalizar a autenticidade para todas as imagens.</div></div>
      </div>`;
    emailSection.appendChild(block);
  }

  const gapSection = q('#forense-lacuna .section-inner');
  if (gapSection && !q('[data-forense-extra="root-cause"]', gapSection)) {
    const block = document.createElement('div');
    block.dataset.forenseExtra = 'root-cause';
    block.innerHTML = `
      <div class="section-head" style="margin-top:34px;margin-bottom:18px">
        <div><div class="section-index">CAUSA-RAIZ</div><h3 style="font-size:clamp(25px,3vw,36px)">As hipóteses alternativas foram confrontadas contra artefatos independentes</h3></div>
        <p class="section-intro">O relatório não chegou à causa técnica por exclusão retórica; testou hipóteses incompatíveis com a continuidade do perfil e com os logs disponíveis.</p>
      </div>
      <div class="grid four">
        <div class="card"><div class="meta">H1 · CONFIRMADA</div><h4>Máquina desligada</h4><p>Zero boot, shutdown, logon, aplicativo, segurança ou ESENT durante 34 dias.</p></div>
        <div class="card"><div class="meta">H2 · REFUTADA</div><h4>Mudança de máquina</h4><p>LNK e Jump Lists preservam a mesma identificação de máquina, com continuidade antes e depois da lacuna.</p></div>
        <div class="card"><div class="meta">H6 · REFUTADA</div><h4>Formatação/reinstalação</h4><p>A estrutura de arquivos, perfil e artefatos permanece contínua, sem ruptura compatível com reinstalação.</p></div>
        <div class="card"><div class="meta">H8 · REFUTADA</div><h4>Exclusão seletiva</h4><p>O silêncio atinge toda a atividade do perfil e todos os remetentes; não há padrão seletivo SIMBAL.</p></div>
      </div>
      <div class="callout" style="margin-top:18px"><div class="label">LIMITE</div><h4>O motivo do desligamento continua indeterminável.</h4><p>A análise identifica o estado técnico da máquina, não a razão humana ou material pela qual permaneceu desligada. Não se deve preencher esse ponto por conjectura.</p></div>`;
    gapSection.appendChild(block);
  }

  const patternSection = q('#forense-padrao .section-inner');
  if (patternSection && !q('[data-forense-extra="historical-workpapers"]', patternSection)) {
    const block = document.createElement('div');
    block.dataset.forenseExtra = 'historical-workpapers';
    block.innerHTML = `
      <div class="grid two" style="margin-top:18px">
        <div class="card"><span class="badge green">documentação interna contemporânea</span><h4>Seis planilhas jurídicas — abril a agosto de 2015</h4><p>Controles internos preservados documentam rotina de protestos, duplicidade, retirada de títulos e cartas de anuência meses antes de outubro. Expressões como “NÃO EXISTE ESTA DUPLICATA” e “COBRANÇA DUPLICIDADE” coincidem com o teor atribuído à cautelar de 2015.</p><div class="forense-source">EVID-HOST-0003 · FACT. Função: coerência histórica e boa-fé; não prova as NF-es litigiosas específicas.</div></div>
        <div class="card forense-limit"><span class="badge gold">inferência qualificada</span><h4>“Honorários Processo Simbal” não será tratado como vínculo direto</h4><p>O pagamento de honorários de 15.05.2015 é temporal e tematicamente compatível com a cautelar 0614260, mas não contém referência cruzada explícita ao número do processo. A correlação permanece inferencial.</p><div class="forense-source">Regra: STRONG_INFERENCE ≠ FACT.</div></div>
      </div>`;
    patternSection.appendChild(block);
  }

  const docBody = q('#docBody');
  if (docBody && !q('tr[data-forense-doc="match-exact"]', docBody)) {
    const extraRows = [
      ['vanessa-channel','Correspondência Vanessa/Jonny — abr–set/2015','Canal de comunicação genuíno e recorrente sobre duplicatas/protestos.','EVID-0002','Corrobora interlocução; não prova o conteúdo de 14.10.','depurado'],
      ['match-exact','Thread de 23.04.2015 — MATCH_EXACT','Documento de referência correlacionado a e-mail original por Message-ID e timestamp.','EVID-0003_0009','Controle de fidelidade do método de reprodução documental.','crítico'],
      ['workpapers','Planilhas jurídicas abr–ago/2015','Rotina documentada de duplicidade/protestos, retirada e carta de anuência.','EVID-HOST-0003','Contexto contemporâneo e coerência histórica.','depurado']
    ];
    extraRows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.forenseDoc = r[0];
      tr.innerHTML = `<td><strong>${r[1]}</strong></td><td>${r[2]}</td><td><span class="doc-ref">${r[3]}</span></td><td>${r[4]}</td><td><span class="status ${r[5] === 'crítico' ? 'critical' : 'warn'}">${r[5]}</span></td>`;
      docBody.appendChild(tr);
    });
  }
})();
