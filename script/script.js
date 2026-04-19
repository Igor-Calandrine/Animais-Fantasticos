import AbrirSubmenu from "./abrir-submenu.js"
import MostrarTexto from "./mostrar-texto.js"

const perguntas = new AbrirSubmenu(".pergunta")
const textoAnimais = new MostrarTexto("[data-textos] div", "[data-animais] div")

perguntas.iniciar()
textoAnimais.iniciar()

function TituloAnimadoScroll() {
   const alturaTela = window.innerHeight
   const tituloAnima = document.querySelectorAll(".js-scrollAnima")

   tituloAnima.forEach((item) => {
      item.classList.add("js-scrollAnimação")
   })
   tituloAnima[0].classList.remove("js-scrollAnimação")

   window.addEventListener("scroll", () => {
      tituloAnima.forEach((item) => {
         if (
            item.getBoundingClientRect().bottom > 0 &&
            item.getBoundingClientRect().top < alturaTela * 0.85
         ) {
            item.classList.remove("js-scrollAnimação")
         } else if (
            item.getBoundingClientRect().bottom < 0 ||
            item.getBoundingClientRect().top > alturaTela * 0.7
         ) {
            item.classList.add("js-scrollAnimação")
         }
      })
   })
}

TituloAnimadoScroll()
