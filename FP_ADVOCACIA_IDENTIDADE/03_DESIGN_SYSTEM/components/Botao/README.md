# Botão

Botões da marca: o **primário** (bordô, uma vez por tela) leva à ação principal; o **secundário** (contorno) a uma alternativa; o **link** (texto com filete dourado e seta) a "saiba mais".

- Forneça: `<a>` ou `<button>` com as classes `fp-btn fp-btn--primario`, `fp-btn--secundario` ou `fp-btn--link`; seta opcional em `<span class="fp-seta" aria-hidden="true">→</span>`.
- Texto em `botao` (Inter 600, 15px), verbo no início, até quatro palavras: "Falar com a advogada", "Agendar atendimento", "Conheça a atuação".
- Altura mínima de 48px (toque confortável no celular). Cantos `raio-1`.
- No fundo escuro, o contorno muda para `marca-dourado` (token `borda-chamada`) porque o bordô some sobre o grafite.
- Não use dourado como cor de fundo de botão com texto pequeno, nem dois primários lado a lado.
- Não prometa resultado no texto do botão ("Garanta sua liberdade" é proibido).
