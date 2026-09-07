window.CASE_SEED = {
  grounds: [
    {
      id: "g-v", type: "ground", roman: "V", label: "Violação manifesta de norma jurídica",
      subtitle: "Arts. 373, I e II, 700 e 702 do CPC — critério jurídico de julgamento dos embargos monitórios.",
      use: "Núcleo principal: distinguir a prova escrita suficiente para instaurar a monitória da regra de julgamento em cognição plena após os embargos.",
      strength: "direct"
    },
    {
      id: "g-viii", type: "ground", roman: "VIII", label: "Erro de fato",
      subtitle: "NF-e 9.883 — resultado binário da diligência fiscal da SEFAZ/AM.",
      use: "Sustentar que a sentença tratou a escrituração fiscal em formulação geral sem individualizar a exceção documentalmente certificada da NF-e 9.883.",
      strength: "direct"
    },
    {
      id: "g-iii", type: "ground", roman: "III", label: "Dolo da parte vencedora",
      subtitle: "Recorte estreito: duplicata 000011572A e cadeia de titularidade/pagamento.",
      use: "Preservar somente a hipótese individualizada que sobreviva aos filtros de pagamento, ciência, conduta incompatível e nexo causal com a condenação.",
      strength: "strong"
    },
    {
      id: "g-vii", type: "ground", roman: "VII", label: "Prova nova",
      subtitle: "Extrato bancário produzido no processo Bradesco, com complementação técnica.",
      use: "Fundamento subsidiário e modular: separar prova bancária efetivamente produzida de análises posteriores ou documentos que já estavam disponíveis no processo originário.",
      strength: "context"
    }
  ],

  documents: [
    {
      id: "d-sentenca", type: "document", label: "Sentença rescindenda — Ação Monitória 0625249-83.2018.8.04.0001",
      subtitle: "Documento-fonte separado da sentença originária.",
      driveUrl: "https://drive.google.com/file/d/1tX1PQPHALJAHHE5-jiQh1HxVN4fnhhPO/view?usp=drivesdk",
      reference: "fls. 425/426; mov. 1.89, pp. 803/804 da rescisória",
      grounds: ["V", "VIII"], strength: "direct",
      use: "Documento decisório central para cotejar a regra jurídica empregada e a formulação geral sobre a SEFAZ."
    },
    {
      id: "d-sefaz-9883", type: "document", label: "SEFAZ/AM — Ofício 0984/2020 + Nota Técnica 061/2020",
      subtitle: "Manifestação fiscal sobre EFDs; registra expressamente a exceção da NF-e 9.883.",
      driveUrl: "https://drive.google.com/file/d/1wY9VDIu4URTYbHLtubV_K__lf0uo9Hzp/view?usp=drivesdk",
      reference: "fls. 386/387; mov. 1.88, pp. 764/765 da rescisória",
      grounds: ["VIII", "V"], strength: "direct",
      use: "Prova oficial de que a NF-e 9.883 não foi encontrada em nenhuma EFD da PICCOLI; também delimita o alcance do dado fiscal, que não equivale a recibo civil de entrega."
    },
    {
      id: "d-9041", type: "document", label: "NF-e 9041 — relatório técnico-documental",
      subtitle: "Confronto CT-e 1645 cancelado × CT-e 1647 autorizado, pagamentos e protestos.",
      driveUrl: "https://drive.google.com/file/d/1jz8rxpCqjrR1m3_ZRVe36LCjamSw2AO_/view?usp=drivesdk",
      reference: "mov. 1.115, p. 994 e ss. da rescisória",
      grounds: ["V"], strength: "strong",
      use: "Exemplo de por que a cadeia documental deve ser conferida documento a documento, sem tratar DACTE, CT-e substituído e consulta fiscal como objetos equivalentes."
    },
    {
      id: "d-cte-1647", type: "document", label: "CT-e 1647 — documento substituto da família 9041",
      subtitle: "CT-e posterior, autorizado após o cancelamento do CT-e 1645.",
      driveUrl: "https://drive.google.com/file/d/13F1EfyftLXRv3oO0bnNGZIU0h3YACRde/view?usp=drivesdk",
      reference: "família NF-e 9041 / relatório mov. 1.115",
      grounds: ["V"], strength: "direct",
      use: "Demonstra que o documento fiscal de transporte válido precisa ser individualizado antes de qualquer inferência sobre o transporte da NF-e."
    },
    {
      id: "d-10868", type: "document", label: "NF-e 10868 — consulta fiscal/XML",
      subtitle: "Família usada como laboratório metodológico de NF-e, PIN, SUFRAMA, protesto e transporte.",
      driveUrl: "https://drive.google.com/file/d/1FjJ0KT019srMSY3Tk952tW7-X6NDbyGh/view?usp=drivesdk",
      reference: "família 10868; múltiplos movs. na rescisória",
      grounds: ["V"], strength: "context",
      use: "Apoio para demonstrar que vistoria e internalização são atos fiscais distintos e que a existência de registros administrativos não substitui automaticamente a ponte para o recebimento civil."
    },
    {
      id: "d-11572", type: "document", label: "Comprovantes de pagamento / boletos — família 11572",
      subtitle: "Acervo bancário e cartorário relacionado às duplicatas 11572A/B/C/D.",
      driveUrl: "https://drive.google.com/file/d/1c6PWEv7MxTGuiCZnDgWAnoIRpX4DX3WP/view?usp=drivesdk",
      reference: "item 4.3.1 da inicial; mov. 1.1, p. 42; réplica item 3.9.1.1",
      grounds: ["III", "VII"], strength: "strong",
      use: "Base documental para a auditoria da duplicata 000011572A e das parcelas irmãs, sem presumir identidade de pagamento sem metadados bancários suficientes."
    },
    {
      id: "d-bradesco", type: "document", label: "Produção antecipada de prova — PICCOLI × Banco Bradesco",
      subtitle: "Processo 0037002-18.2026.8.04.1000; extratos e metadados bancários.",
      driveUrl: "https://drive.google.com/file/d/1H-Kf2tPsDPCuAmwfM5IfQfah25b5riVF/view?usp=drivesdk",
      reference: "mov. 31.2, pp. 247/251 do processo Bradesco, conforme réplica",
      grounds: ["VII", "III"], strength: "direct",
      use: "Prova bancária primária já produzida pelo próprio banco; serve de ponte para individualização título ↔ pagamento, com complementação técnica ainda tratada como pendente na réplica."
    },
    {
      id: "d-protestos", type: "document", label: "Certidão unificada de protestos nº 081232",
      subtitle: "Apresentantes, espécies, credor original/atual e anotação de endosso.",
      driveUrl: "https://drive.google.com/file/d/1z7giOX0RjgXb1uuoqXfU6bMHGU7dEYfN/view?usp=drivesdk",
      reference: "certidão unificada; reproduzida nos autos da rescisória e no processo Bradesco",
      grounds: ["III"], strength: "context",
      use: "Permite auditar a cadeia cartorária e a titularidade; a réplica trata divergências de espécie como inconsistência registral, não como novação automática."
    },
    {
      id: "d-originario", type: "document", label: "Ação originária — peças-chave e sentença rescindenda",
      subtitle: "Seleção dos atos centrais da monitória, incluindo pedidos à Transportes Carinhoso.",
      driveUrl: "https://drive.google.com/file/d/1MhStiswLHMI6xAbx-OSQhFq_CdTGAZYm/view?usp=drivesdk",
      reference: "autos originários; especialmente fls. 355/356, 358, 381, 391 e 426",
      grounds: ["V", "VIII"], strength: "direct",
      use: "Reconstitui o iter probatório originário e permite conferir que a própria credora buscou comprovantes de entrega junto à transportadora."
    }
  ],

  facts: [
    { id:"f-onus", type:"fact", label:"A sentença emprega critério de prova/ônus que a réplica impugna", subtitle:"A discussão rescindente não é a aptidão inicial da prova escrita, mas o critério jurídico usado no julgamento definitivo dos embargos.", reference:"fl. 426; mov. 1.89, p. 804", grounds:["V"], strength:"direct", use:"Cotejar com arts. 373, 700 e 702 do CPC." },
    { id:"f-9883", type:"fact", label:"NF-e 9.883: 'não encontrada' na EFD", subtitle:"Resultado expresso da diligência fiscal oficial.", reference:"fls. 386/387; mov. 1.88, pp. 764/765", grounds:["VIII"], strength:"direct", use:"Microfato binário para o art. 966, VIII; evita revaloração global da prova." },
    { id:"f-sefaz-limite", type:"fact", label:"EFD/SEFAZ não equivale a recibo civil de entrega", subtitle:"A própria contestação admite que o Fisco não atestou a entrega; a réplica limita o alcance inferencial do registro fiscal.", reference:"contestação mov. 22.1, p. 2635; réplica item 3.4", grounds:["V"], strength:"strong", use:"Impedir que escrituração fiscal seja convertida, por salto lógico, em certificação de tradição física." },
    { id:"f-carinhoso", type:"fact", label:"A própria SIMBAL requereu comprovantes de entrega à Carinhoso", subtitle:"Pedido de confirmação de entrega e apresentação de comprovantes; diligência deferida e reiterada.", reference:"fls. 355/356; mov. 1.87, pp. 733/734; fl. 358/p.736; fl.381/p.759; fl.391/p.769", grounds:["V"], strength:"direct", use:"Demonstra que a credora tratou os comprovantes de entrega como relevantes para dissipar dúvida sobre a dívida." },
    { id:"f-9041-cancel", type:"fact", label:"CT-e 1645 foi cancelado e o CT-e 1647 foi autorizado depois", subtitle:"Os documentos possuem conteúdo fiscal/econômico distinto; não são simples segundas vias.", reference:"relatório mov. 1.115, p. 994 e ss.", grounds:["V"], strength:"direct", use:"Exigir correlação com o documento fiscal efetivamente válido antes de inferir o transporte da operação." },
    { id:"f-10868-method", type:"fact", label:"Vistoria SUFRAMA e internalização são eventos distintos", subtitle:"Ambos integram a cadeia fiscal/logística, mas não são sinônimos de entrega civil ao comprador.", reference:"família 10868 / réplica item 3.6", grounds:["V"], strength:"context", use:"Calibrar o valor probatório: nem irrelevância do PIN, nem equivalência automática com canhoto/recibo." },
    { id:"f-manifesto", type:"fact", label:"Dados agregados de manifesto não podem ser atribuídos automaticamente à NF-e individual", subtitle:"Há manifestos com múltiplos conhecimentos e parcela não individualizada no conjunto auditado.", reference:"réplica item 3.6.3; mov. 1.100/1.101", grounds:["V"], strength:"strong", use:"Impedir apropriação do total global do manifesto como se descrevesse apenas o CT-e/NF-e exibido." },
    { id:"f-11572a", type:"fact", label:"Duplicata 000011572A permaneceu cobrada; família exige auditoria individualizada", subtitle:"A réplica preserva este recorte no art. 966, III e abandona generalizações mais amplas.", reference:"fl. 2; mov. 1.32, p. 380; mov. 1.1, p. 42", grounds:["III"], strength:"strong", use:"Testar pagamento específico, ciência da credora, conduta incompatível e nexo com a condenação." },
    { id:"f-bradesco", type:"fact", label:"Extrato produzido pelo Bradesco é prova bancária primária, porém parcial", subtitle:"A réplica reserva juntada técnica complementar para fechar a individualização de pagamentos.", reference:"processo 0037002-18.2026.8.04.1000, mov. 31.2, pp. 247/251", grounds:["VII","III"], strength:"direct", use:"Sustentar o VII em caráter subsidiário e reforçar a auditoria do III sem chamar extrato genérico de comprovante autossuficiente." },
    { id:"f-endosso", type:"fact", label:"Certidão registra 'ENDOSSO: MANDATO' em apontamentos", subtitle:"A réplica afasta aplicação automática da Súmula 475/STJ, sem dispensar auditoria da cadeia de titularidade.", reference:"contestação mov. 22.1, p. 2644; réplica item 3.9", grounds:["III"], strength:"context", use:"Reduzir exageros e preservar somente a inconsistência documental realmente demonstrável." },
    { id:"f-taxa-zero", type:"fact", label:"PIN litigioso com 'Taxa Zero: Sim' impede inferência automática sobre cada pagamento SUFRAMA", subtitle:"O pagamento administrativo precisa ser ligado à guia/protocolo/PIN/NF-e específica.", reference:"PIN 110445715; mov. 1.100, p. 900; mov. 1.101, p. 907", grounds:["V"], strength:"context", use:"Exigir rastreabilidade antes de converter pagamento à autarquia em prova da obrigação mercantil específica." }
  ],

  pages: [
    { id:"p-804", type:"page", label:"Rescisória p. 804", subtitle:"Sentença rescindenda — mérito / regra de julgamento", reference:"mov. 1.89, p. 804; fl. 426", grounds:["V","VIII"], strength:"direct", use:"Página decisória central." },
    { id:"p-764", type:"page", label:"Rescisória p. 764", subtitle:"Nota Técnica SEFAZ — exceção da NF-e 9.883", reference:"mov. 1.88, p. 764; fl. 386", grounds:["VIII","V"], strength:"direct", use:"Texto oficial da diligência fiscal." },
    { id:"p-765", type:"page", label:"Rescisória p. 765", subtitle:"Quadro individualizado — NF-e 9.883 'Não encontrada'", reference:"mov. 1.88, p. 765; fl. 387", grounds:["VIII"], strength:"direct", use:"Repetição tabular individualizada do resultado." },
    { id:"p-733", type:"page", label:"Rescisória pp. 733/734", subtitle:"SIMBAL requer confirmação de entrega e comprovantes", reference:"mov. 1.87, pp. 733/734; fls. 355/356", grounds:["V"], strength:"direct", use:"Posição processual da própria credora." },
    { id:"p-736", type:"page", label:"Rescisória p. 736", subtitle:"Juízo defere a diligência à Carinhoso", reference:"mov. 1.87, p. 736; fl. 358", grounds:["V"], strength:"direct", use:"Confirma relevância processual da diligência." },
    { id:"p-759", type:"page", label:"Rescisória p. 759", subtitle:"Ofício reiterado à Carinhoso", reference:"mov. 1.88, p. 759; fl. 381", grounds:["V"], strength:"direct", use:"Persistência da busca por comprovantes de entrega." },
    { id:"p-769", type:"page", label:"Rescisória p. 769", subtitle:"Manifestação da SIMBAL após a SEFAZ", reference:"mov. 1.88, p. 769; fl. 391", grounds:["V"], strength:"strong", use:"A credora invoca EFD, mas continua cobrando esclarecimento sobre os comprovantes da transportadora." },
    { id:"p-994", type:"page", label:"Rescisória p. 994+", subtitle:"Relatório técnico da família 9041", reference:"mov. 1.115, p. 994 e ss.", grounds:["V"], strength:"strong", use:"Cadeia CT-e cancelado/substituto, pagamentos e protestos." },
    { id:"p-380", type:"page", label:"Rescisória p. 380", subtitle:"Planilha da monitória / duplicatas e valores", reference:"mov. 1.32, p. 380; fl. 2 dos autos originários", grounds:["III"], strength:"direct", use:"Base para identificar a 000011572A na cobrança." },
    { id:"p-247b", type:"page", label:"Bradesco mov. 31.2, pp. 247/251", subtitle:"Extrato bancário produzido judicialmente", reference:"processo 0037002-18.2026.8.04.1000", grounds:["VII","III"], strength:"direct", use:"Fonte bancária primária para a auditoria de pagamentos." }
  ],

  edges: [
    {source:"d-sentenca",target:"f-onus",kind:"direct",label:"contém regra impugnada"},
    {source:"f-onus",target:"p-804",kind:"direct",label:"localiza"},
    {source:"p-804",target:"g-v",kind:"direct",label:"subsunção"},

    {source:"d-sefaz-9883",target:"f-9883",kind:"direct",label:"certifica"},
    {source:"f-9883",target:"p-764",kind:"direct",label:"texto"},
    {source:"f-9883",target:"p-765",kind:"direct",label:"quadro"},
    {source:"p-764",target:"g-viii",kind:"direct",label:"microfato"},
    {source:"p-765",target:"g-viii",kind:"direct",label:"microfato"},
    {source:"d-sefaz-9883",target:"f-sefaz-limite",kind:"support",label:"delimita alcance"},
    {source:"f-sefaz-limite",target:"g-v",kind:"support",label:"evita salto inferencial"},
    {source:"p-804",target:"g-viii",kind:"support",label:"premissa decisória geral"},

    {source:"d-originario",target:"f-carinhoso",kind:"direct",label:"contém pedido/diligência"},
    {source:"f-carinhoso",target:"p-733",kind:"direct",label:"pedido"},
    {source:"f-carinhoso",target:"p-736",kind:"direct",label:"deferimento"},
    {source:"f-carinhoso",target:"p-759",kind:"direct",label:"reiteração"},
    {source:"f-carinhoso",target:"p-769",kind:"direct",label:"manifestação"},
    {source:"p-733",target:"g-v",kind:"support",label:"contexto de ônus"},
    {source:"p-759",target:"g-v",kind:"support",label:"contexto de prova"},

    {source:"d-9041",target:"f-9041-cancel",kind:"direct",label:"consolida"},
    {source:"d-cte-1647",target:"f-9041-cancel",kind:"direct",label:"documento substituto"},
    {source:"f-9041-cancel",target:"p-994",kind:"direct",label:"remissão"},
    {source:"p-994",target:"g-v",kind:"support",label:"metodologia probatória"},

    {source:"d-10868",target:"f-10868-method",kind:"support",label:"cadeia fiscal"},
    {source:"f-10868-method",target:"g-v",kind:"support",label:"limita inferência"},
    {source:"d-10868",target:"f-manifesto",kind:"support",label:"exemplo de agregação"},
    {source:"f-manifesto",target:"g-v",kind:"support",label:"individualização"},
    {source:"d-10868",target:"f-taxa-zero",kind:"support",label:"PIN"},
    {source:"f-taxa-zero",target:"g-v",kind:"support",label:"rastreabilidade"},

    {source:"d-11572",target:"f-11572a",kind:"direct",label:"acervo de pagamento"},
    {source:"f-11572a",target:"p-380",kind:"direct",label:"título cobrado"},
    {source:"p-380",target:"g-iii",kind:"direct",label:"recorte do dolo"},
    {source:"d-bradesco",target:"f-bradesco",kind:"direct",label:"produz extrato"},
    {source:"f-bradesco",target:"p-247b",kind:"direct",label:"localiza"},
    {source:"p-247b",target:"g-vii",kind:"direct",label:"prova nova subsidiária"},
    {source:"p-247b",target:"g-iii",kind:"support",label:"auditoria de pagamento"},
    {source:"f-bradesco",target:"f-11572a",kind:"support",label:"pode fechar individualização"},

    {source:"d-protestos",target:"f-endosso",kind:"direct",label:"registra"},
    {source:"f-endosso",target:"g-iii",kind:"support",label:"delimita cadeia"}
  ],

  priorityChains: [
    {title:"Regra de julgamento dos embargos",chain:"SENTENÇA → p. 804 → ART. 373/700/702 → 966, V",text:"É a cadeia mais limpa porque o documento decisório e a norma jurídica ficam lado a lado; não depende de revaloração do peso de prova periférica."},
    {title:"Exceção objetiva da NF-e 9.883",chain:"SEFAZ → pp. 764/765 → SENTENÇA p. 804 → 966, VIII",text:"O foco é binário: a nota foi ou não encontrada na EFD. A estrutura evita transformar o inciso VIII em reexame geral de entrega."},
    {title:"Diligência requerida pela própria credora",chain:"SIMBAL → CARINHOSO → pp. 733/734, 736, 759, 769 → 966, V",text:"A sequência processual mostra que a própria credora reputou relevantes os comprovantes de entrega, mesmo após invocar a EFD."},
    {title:"Pagamento e individualização bancária",chain:"11572A → BRADESCO mov. 31.2 → p. 380 → 966, III/VII",text:"Separar o que o extrato já prova do que ainda depende de metadados técnicos evita chamar saída bancária genérica de quitação autossuficiente."}
  ]
};
