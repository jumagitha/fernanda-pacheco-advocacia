/**
 * Conteúdo do site em um só lugar.
 * Tudo que estiver como `null` ainda não foi confirmado pela Fernanda
 * e aparece no site como "[a confirmar]" — nunca invente esses dados.
 */

export const SITE = {
  nome: "Fernanda Pacheco Advocacia",
  advogada: "Fernanda Pacheco",
  // Domínio oficial ainda não definido. Troque antes de publicar (ou use a variável NEXT_PUBLIC_SITE_URL).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.exemplo-a-definir.adv.br",
  titulo: "Advogada criminal em Brasília/DF e Entorno | Fernanda Pacheco Advocacia",
  descricao:
    "Advocacia criminal em Santa Maria/DF, Brasília/DF, Novo Gama, Cidade Ocidental, Céu Azul e Luziânia (GO). ANPP, audiência de custódia, prisão em flagrante e demais fases do processo penal. Atendimento remoto e presencial mediante agendamento.",
  frase: "Defesa técnica. Estratégia em cada etapa.",
} as const;

/** Dados de contato — preencher SOMENTE com informações confirmadas. */
export const CONTATO = {
  oab: null as string | null, // ex.: "OAB/DF 00.000"
  whatsapp: null as string | null, // só números com DDI e DDD, ex.: "5561999999999"
  email: null as string | null,
  endereco: null as string | null,
};

export const REGIOES = [
  { cidade: "Santa Maria", uf: "DF" },
  { cidade: "Brasília", uf: "DF" },
  { cidade: "Novo Gama", uf: "GO" },
  { cidade: "Cidade Ocidental", uf: "GO" },
  { cidade: "Céu Azul", uf: "GO" },
  { cidade: "Luziânia", uf: "GO" },
] as const;

export const PRIORITARIAS = [
  {
    num: "01",
    titulo: "ANPP",
    rotulo: "Acordo planejado",
    urgente: false,
    texto:
      "Avaliação do cabimento do acordo de não persecução penal, análise das condições propostas e acompanhamento até o cumprimento.",
    acao: "Entenda o ANPP",
  },
  {
    num: "02",
    titulo: "Audiência de custódia",
    rotulo: "Urgente",
    urgente: true,
    texto:
      "Atuação na audiência em que o juiz analisa a legalidade e a necessidade de manter a prisão, logo após o flagrante.",
    acao: "Preciso de atendimento agora",
  },
  {
    num: "03",
    titulo: "Prisão em flagrante",
    rotulo: "Urgente",
    urgente: true,
    texto:
      "Atuação imediata desde a comunicação da prisão, com orientação à família sobre o que fazer e o que esperar.",
    acao: "Preciso de atendimento agora",
  },
] as const;

export const SERVICOS = [
  "Inquérito e investigação criminal",
  "Liberdade provisória",
  "Relaxamento e revogação de prisão",
  "Habeas corpus",
  "Defesa em ação penal e resposta à acusação",
  "Audiências, julgamento e recursos",
  "Execução penal",
] as const;

export const ATENDIMENTO = [
  {
    titulo: "Consulta de orientação jurídica",
    texto: "Uma conversa técnica para entender a situação, os direitos envolvidos e os caminhos possíveis.",
  },
  {
    titulo: "Consultoria com análise documental",
    texto: "Análise dos documentos do caso e relatório personalizado em PDF, com a estratégia recomendada.",
  },
] as const;

export const ETAPAS = [
  { num: "01", titulo: "Primeiro contato", texto: "Você relata a situação. São identificadas a urgência, a localidade e a forma de atendimento adequada." },
  { num: "02", titulo: "Análise do caso", texto: "Estudo dos documentos e do momento do processo para entender riscos e possibilidades." },
  { num: "03", titulo: "Estratégia", texto: "Definição da estratégia de defesa e explicação clara dos próximos passos, sem promessas de resultado." },
  { num: "04", titulo: "Acompanhamento", texto: "Atuação em cada fase, com retorno sobre o andamento e orientação contínua." },
] as const;

/**
 * Perguntas frequentes — também viram dados estruturados (FAQPage) para Google e IAs.
 * Revisar o texto jurídico antes de publicar.
 */
export const PERGUNTAS = [
  {
    p: "O que é a audiência de custódia?",
    r: "É a audiência em que a pessoa presa em flagrante é apresentada a um juiz, em regra em até 24 horas, para que ele analise a legalidade da prisão e decida se ela deve ser mantida, convertida em outra medida ou relaxada.",
  },
  {
    p: "O que é o ANPP (acordo de não persecução penal)?",
    r: "É um acordo previsto no art. 28-A do Código de Processo Penal, que pode ser proposto pelo Ministério Público em infrações sem violência ou grave ameaça e com pena mínima inferior a quatro anos, mediante condições e confissão formal. Cumprido o acordo, extingue-se a punibilidade.",
  },
  {
    p: "Em quais cidades a advogada atende?",
    r: "Santa Maria/DF, Brasília/DF, Novo Gama/GO, Cidade Ocidental/GO, Céu Azul/GO e Luziânia/GO, com atendimento remoto e presencial mediante agendamento.",
  },
  {
    p: "O atendimento pode ser feito online?",
    r: "Sim. O atendimento é remoto ou presencial, sempre mediante agendamento. Os honorários são tratados de forma individual, conforme as regras da OAB.",
  },
] as const;
