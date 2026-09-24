/* ==========================================================================
   SOUJUNIOR — JAVASCRIPT

   Sumário
   01. Header
   02. Menu mobile
   03. Carrossel — Como Apoiar
   04. FAQ
   05. Acessibilidade
   ========================================================================== */






// ==========================================================================
// HEADER E MENU DE NAVEGAÇÃO
// ==========================================================================


// --------------------------------------------------------------------------
// 01. Elementos
// --------------------------------------------------------------------------

const header = document.querySelector(".header");
const botaoMenu = document.querySelector(".mobile-menu-button");
const navegacao = document.querySelector(".navbar");


// --------------------------------------------------------------------------
// 02. Estado do menu
// --------------------------------------------------------------------------

function definirEstadoDoMenu(aberto) {
    navegacao.classList.toggle("menu-open", aberto);
    header.classList.toggle("menu-is-open", aberto);

    botaoMenu.textContent = aberto ? "✕" : "☰";

    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
}


function fecharMenu() {
    definirEstadoDoMenu(false);
}


// --------------------------------------------------------------------------
// 03. Header ao rolar a página
// --------------------------------------------------------------------------

function atualizarHeaderAoRolar() {
    const paginaFoiRolada = window.scrollY > 50;

    header.classList.toggle("scrolled", paginaFoiRolada);

    if (!paginaFoiRolada) {
        fecharMenu();
    }
}


window.addEventListener("scroll", atualizarHeaderAoRolar);

atualizarHeaderAoRolar();


// --------------------------------------------------------------------------
// 04. Abrir e fechar menu
// --------------------------------------------------------------------------

botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = navegacao.classList.contains("menu-open");

    definirEstadoDoMenu(!menuEstaAberto);
});


// --------------------------------------------------------------------------
// 05. Fechar menu ao selecionar um link
// --------------------------------------------------------------------------

navegacao.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

// --------------------------------------------------------------------------
// 06. Carrossel — Como Apoiar
// --------------------------------------------------------------------------

const carrossel = document.querySelector(".support-options");
const setasCarrossel = document.querySelectorAll(".carousel-arrow");
const cardsCarrossel = document.querySelectorAll(".support-option");
const dotsCarrossel = document.querySelectorAll(".carousel-dots span");

let cardAtual = 0;

function atualizarCarrossel(indice) {
  if (!carrossel || !cardsCarrossel.length) return;

  cardAtual = Math.max(0, Math.min(indice, cardsCarrossel.length - 1));

  const card = cardsCarrossel[cardAtual];

  carrossel.scrollTo({
    left:
      card.offsetLeft -
      carrossel.clientWidth / 2 +
      card.offsetWidth / 2,
    behavior: "smooth"
  });

  cardsCarrossel.forEach((item, i) => {
    item.classList.toggle("card-ativo", i === cardAtual);
  });

  dotsCarrossel.forEach((dot, i) => {
    dot.classList.toggle("active", i === cardAtual);
  });
}

if (carrossel && setasCarrossel.length === 2 && cardsCarrossel.length) {
  setasCarrossel[0].addEventListener("click", () => {
    atualizarCarrossel(cardAtual - 1);
  });

  setasCarrossel[1].addEventListener("click", () => {
    atualizarCarrossel(cardAtual + 1);
  });

  atualizarCarrossel(0);
}
// --------------------------------------------------------------------------
// 07. FAQ — Abrir e fechar respostas
// --------------------------------------------------------------------------

const perguntasFAQ = document.querySelectorAll(".FAQ-question");

perguntasFAQ.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const itemAtual = pergunta.closest(".FAQ-item");
    const estavaAberto = itemAtual.classList.contains("active");

    // Fecha qualquer outra pergunta aberta
    document.querySelectorAll(".FAQ-item").forEach((item) => {
      item.classList.remove("active");

      const botao = item.querySelector(".FAQ-question");

      if (botao) {
        botao.setAttribute("aria-expanded", "false");
      }
    });

    // Se a pergunta clicada estava fechada, abre ela
    if (!estavaAberto) {
      itemAtual.classList.add("active");
      pergunta.setAttribute("aria-expanded", "true");
    }
  });
});