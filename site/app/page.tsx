import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BotaoPrincipal, LinkSeta, Pendente, Seta, Sobretitulo, linkContato } from "@/components/ui";
import { DadosEstruturados } from "@/components/dados-estruturados";
import {
  ATENDIMENTO,
  CONTATO,
  ETAPAS,
  PERGUNTAS,
  PRIORITARIAS,
  REGIOES,
  SERVICOS,
  SITE,
} from "@/lib/conteudo";

const container = "mx-auto max-w-[1312px] px-6 md:px-10 lg:px-16";
const tituloSecao = "m-0 font-editorial text-[32px] leading-[1.1] font-medium md:text-[44px]";

export default function Home() {
  const contato = linkContato();
  return (
    <>
      <DadosEstruturados />
      <a
        href="#conteudo"
        className="sr-only z-50 bg-offwhite px-4 py-2 text-grafite focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>

      {/* ===== HERO (versão C) ===== */}
      <header id="inicio" className="relative overflow-hidden bg-grafite">
        <img
          src="/logos/fp-monograma-principal-fundo-escuro.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-[4%] right-[-30%] h-[112%] max-w-none opacity-40 md:right-[-8%] md:opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#2D2D2D_38%,rgba(45,45,45,0.82)_60%,rgba(45,45,45,0.2)_100%)]"
        />
        <nav aria-label="Principal" className="relative flex items-center justify-between gap-6 px-6 py-6 md:px-10 lg:px-16">
          <Link href="#inicio" aria-label={`${SITE.nome} — início`}>
            <img src="/logos/fp-horizontal-principal-fundo-escuro.svg" alt={SITE.nome} className="h-9 w-auto md:h-11" />
          </Link>
          <ul className="m-0 hidden list-none gap-8 p-0 text-[13px] font-medium tracking-[0.08em] uppercase md:flex">
            <li><a href="#atuacao" className="no-underline hover:text-dourado">Atuação</a></li>
            <li><a href="#atendimento" className="no-underline hover:text-dourado">Atendimento</a></li>
            <li><a href="#sobre" className="no-underline hover:text-dourado">Sobre</a></li>
            <li><a href="#perguntas" className="no-underline hover:text-dourado">Perguntas</a></li>
          </ul>
          <a href="#contato" className="group text-[13px] font-medium tracking-[0.08em] text-dourado uppercase no-underline">
            Contato <Seta />
          </a>
        </nav>

        <div className={`relative ${container} flex flex-col gap-8 pt-14 pb-24 md:pt-24 md:pb-28`}>
          <p className="m-0 text-[12px] font-medium tracking-[0.24em] text-dourado uppercase">
            Advocacia criminal · Brasília/DF e Entorno
          </p>
          <h1 className="m-0 max-w-[920px] font-editorial text-[56px] leading-[0.95] font-medium tracking-[-0.02em] md:text-[96px] lg:text-[132px]">
            Defesa técnica.
            <br />
            <em className="font-normal text-dourado">Estratégia em cada etapa.</em>
          </h1>
          <div className="mt-2 flex flex-wrap items-end gap-10">
            <p className="m-0 max-w-[460px] border-l border-dourado pl-5 text-[17px] leading-relaxed text-bege md:text-[18px]">
              ANPP, audiência de custódia, prisão em flagrante e demais fases do processo penal, com orientação clara e
              acompanhamento individualizado.
            </p>
            <BotaoPrincipal href={contato}>Falar com a advogada</BotaoPrincipal>
          </div>
        </div>
      </header>

      <div aria-label="Regiões atendidas" className="bg-bordo py-5">
        <p className="m-0 px-6 font-editorial text-[22px] leading-snug text-offwhite italic md:px-16 md:text-[34px] lg:whitespace-nowrap">
          {REGIOES.map((r, i) => (
            <span key={r.cidade}>
              {i > 0 && <span aria-hidden="true" className="px-2 text-dourado md:px-3">·</span>}{" "}
              <span className="whitespace-nowrap">{r.cidade}/{r.uf}</span>
            </span>
          ))}
        </p>
      </div>

      <main id="conteudo">
        {/* ===== TRÊS PRIORITÁRIAS ===== */}
        <section aria-labelledby="t-prioritarias" className="claro bg-offwhite text-grafite">
          <div className={`${container} flex flex-col gap-12 py-16 md:py-24`}>
            <div className="flex max-w-[720px] flex-col gap-4">
              <Sobretitulo className="text-dourado-texto">Atuação prioritária</Sobretitulo>
              <h2 id="t-prioritarias" className={tituloSecao}>
                Três frentes que pedem atenção técnica desde o início.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {PRIORITARIAS.map((s) => (
                <article
                  key={s.titulo}
                  className={
                    s.urgente
                      ? "relative flex flex-col gap-4 border border-bordo border-t-4 bg-offwhite p-8 md:p-10"
                      : "relative flex flex-col gap-4 border border-bege bg-offwhite p-8 md:p-10"
                  }
                >
                  {s.titulo === "Audiência de custódia" && (
                    <BorderBeam size={90} duration={8} colorFrom="#C4A484" colorTo="#540516" borderWidth={2} />
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className="num font-editorial text-[52px] leading-none text-dourado">{s.num}</span>
                    {s.urgente ? (
                      <span className="rounded-[2px] bg-bordo px-2.5 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-offwhite uppercase">
                        {s.rotulo}
                      </span>
                    ) : (
                      <span className="text-[12px] tracking-[0.14em] text-suave uppercase">{s.rotulo}</span>
                    )}
                  </div>
                  <h3 className="m-0 text-[22px] leading-snug font-semibold">{s.titulo}</h3>
                  <p className="m-0 text-[16px] leading-relaxed text-suave">{s.texto}</p>
                  {s.urgente ? (
                    <a
                      href={linkContato(`Olá, preciso de atendimento urgente: ${s.titulo.toLowerCase()}.`)}
                      className="group mt-auto inline-flex min-h-11 items-center gap-2.5 self-start rounded-[2px] bg-bordo px-5 text-[15px] font-semibold text-offwhite no-underline hover:bg-bordo-hover"
                    >
                      {s.acao} <Seta />
                    </a>
                  ) : (
                    <LinkSeta href="#perguntas" className="mt-auto self-start">
                      {s.acao}
                    </LinkSeta>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ATUAÇÃO CRIMINAL ===== */}
        <section id="atuacao" aria-labelledby="t-atuacao" className="flex flex-wrap">
          <div className="claro flex min-w-0 flex-[1_1_480px] flex-col justify-center gap-5 bg-bege px-6 py-16 text-grafite md:px-16 md:py-24">
            <Sobretitulo className="text-dourado-escuro" linha="bg-dourado-texto">
              Atuação criminal
            </Sobretitulo>
            <h2 id="t-atuacao" className={tituloSecao}>
              Em todas as fases,
              <br />
              com estratégia.
            </h2>
            <p className="m-0 max-w-[480px] text-[17px] leading-relaxed text-tinta-suave">
              Da investigação à execução da pena: defesa técnica, análise do caso e orientação clara sobre direitos em cada
              etapa do processo penal.
            </p>
          </div>
          <ul className="m-0 flex min-w-0 flex-[1_1_560px] list-none flex-col bg-bordo px-6 py-10 md:px-16 md:py-16">
            {SERVICOS.map((s, i) => (
              <li key={s} className="border-b border-offwhite/20 last:border-b-0">
                <a href={linkContato(`Olá, gostaria de falar sobre: ${s.toLowerCase()}.`)} className="group grid grid-cols-[56px_1fr_auto] items-center gap-5 py-5 no-underline">
                  <span className="num font-editorial text-[28px] text-dourado">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] font-semibold">{s}</span>
                  <span aria-hidden="true" className="text-[22px] text-dourado transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== ATENDIMENTO ===== */}
        <section id="atendimento" aria-labelledby="t-atendimento" className="claro bg-offwhite text-grafite">
          <div className={`${container} flex flex-wrap gap-16 py-16 md:py-24`}>
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
              <Sobretitulo className="text-dourado-texto">Atendimento</Sobretitulo>
              <h2 id="t-atendimento" className={tituloSecao}>
                Brasília/DF e Entorno, de forma remota ou presencial.
              </h2>
              <p className="m-0 max-w-[520px] text-[17px] leading-relaxed text-suave">
                Atendimento remoto e presencial mediante agendamento. Honorários tratados de forma individual, conforme as
                regras da OAB.
              </p>
              <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0 text-[14px]">
                {REGIOES.map((r) => (
                  <li key={r.cidade} className="rounded-[2px] border border-bege px-4 py-2">
                    {r.cidade}/{r.uf}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid min-w-0 flex-[1_1_480px] content-start gap-6 sm:grid-cols-2">
              {ATENDIMENTO.map((a, i) => (
                <div key={a.titulo} className={i === 0 ? "flex flex-col gap-3 bg-bege p-8" : "flex flex-col gap-3 bg-grafite p-8 text-offwhite"}>
                  <h3 className="m-0 text-[20px] font-semibold">{a.titulo}</h3>
                  <p className={i === 0 ? "m-0 text-[16px] leading-relaxed text-tinta-suave" : "m-0 text-[16px] leading-relaxed text-bege"}>{a.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FORMA DE ATUAÇÃO ===== */}
        <section aria-labelledby="t-etapas" className="bg-grafite">
          <div className={`${container} flex flex-col gap-14 py-16 md:py-24`}>
            <div className="flex max-w-[720px] flex-col gap-4">
              <Sobretitulo className="text-dourado">Forma de atuação</Sobretitulo>
              <h2 id="t-etapas" className={tituloSecao}>Clareza em cada passo.</h2>
            </div>
            <ol className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {ETAPAS.map((e) => (
                <li key={e.num} className="flex flex-col gap-3 border-t border-dourado pt-6">
                  <span className="num font-editorial text-[40px] leading-none text-dourado">{e.num}</span>
                  <h3 className="m-0 text-[20px] font-semibold">{e.titulo}</h3>
                  <p className="m-0 text-[16px] leading-relaxed text-bege">{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <section id="sobre" aria-labelledby="t-sobre" className="claro bg-offwhite text-grafite">
          <div className={`${container} flex flex-wrap items-center gap-16 py-16 md:py-24`}>
            <div className="flex aspect-[4/5] min-w-[260px] flex-[0_1_400px] items-center justify-center bg-bege p-8 text-center text-[14px] text-tinta-suave">
              {/* Trocar por <img src="/fotos/fernanda.jpg" alt="Fernanda Pacheco, advogada" /> quando a foto existir */}
              [Foto da advogada em ambiente de trabalho — a produzir]
            </div>
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
              <Sobretitulo className="text-dourado-texto">Sobre</Sobretitulo>
              <h2 id="t-sobre" className={tituloSecao}>{SITE.advogada}</h2>
              <p className="m-0 text-[15px] text-suave">
                Advogada · {CONTATO.oab ?? <Pendente>OAB/UF e número a confirmar</Pendente>}
              </p>
              <p className="m-0 max-w-[600px] text-[17px] leading-relaxed text-suave">
                <Pendente>Apresentação a escrever pela Fernanda: trajetória, formação e forma de trabalhar, em primeira pessoa, sem resultados de casos.</Pendente>
              </p>
              <blockquote className="m-0 mt-2 max-w-[600px] border-l border-dourado pl-6 font-editorial text-[26px] leading-snug italic">
                Cada caso é analisado de forma individual, com técnica, responsabilidade e respeito às garantias fundamentais.
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===== PERGUNTAS FREQUENTES ===== */}
        <section id="perguntas" aria-labelledby="t-perguntas" className="claro border-t border-bege bg-offwhite text-grafite">
          <div className={`${container} flex flex-wrap gap-16 py-16 md:py-24`}>
            <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
              <Sobretitulo className="text-dourado-texto">Perguntas frequentes</Sobretitulo>
              <h2 id="t-perguntas" className={tituloSecao}>Respostas diretas para dúvidas comuns.</h2>
            </div>
            <div className="flex min-w-0 flex-[2_1_560px] flex-col border-t border-bege">
              {PERGUNTAS.map((q) => (
                <details key={q.p} className="group border-b border-bege py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[19px] font-semibold">
                    {q.p}
                    <span aria-hidden="true" className="text-[22px] text-dourado-texto transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="m-0 mt-3 max-w-[640px] text-[16px] leading-relaxed text-suave">{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== CONTATO / RODAPÉ ===== */}
      <footer id="contato" className="border-t border-linha-escura bg-grafite">
        <div className={`${container} flex flex-col gap-14 pt-16 pb-10 md:pt-24`}>
          <div className="flex flex-wrap items-center gap-12">
            <img src="/logos/fp-vertical-principal-fundo-escuro.svg" alt={SITE.nome} className="h-auto w-[260px] max-w-full" />
            <ul className="m-0 flex min-w-0 flex-[1_1_360px] list-none flex-col gap-3 border-l border-dourado p-0 pl-8 text-[15px] md:pl-10">
              <li><span className="inline-block min-w-[120px] text-[12px] tracking-[0.14em] text-dourado uppercase">Advogada</span>{CONTATO.oab ?? <Pendente>OAB a confirmar</Pendente>}</li>
              <li><span className="inline-block min-w-[120px] text-[12px] tracking-[0.14em] text-dourado uppercase">WhatsApp</span>{CONTATO.whatsapp ? <a href={linkContato()} target="_blank" rel="noopener">Enviar mensagem</a> : <Pendente>número a confirmar</Pendente>}</li>
              <li><span className="inline-block min-w-[120px] text-[12px] tracking-[0.14em] text-dourado uppercase">E-mail</span>{CONTATO.email ? <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a> : <Pendente>e-mail a confirmar</Pendente>}</li>
              <li><span className="inline-block min-w-[120px] text-[12px] tracking-[0.14em] text-dourado uppercase">Atendimento</span>Remoto e presencial mediante agendamento</li>
            </ul>
            <BotaoPrincipal href={contato}>Falar com a advogada</BotaoPrincipal>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-t border-linha-escura pt-6 text-[13px] text-bege-escuro">
            <span>© {new Date().getFullYear()} {SITE.nome} · Santa Maria/DF, Brasília/DF e Entorno</span>
            <span>Conteúdo informativo. Não substitui a análise individual do caso.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
