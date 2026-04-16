import AbrirSubmenu from "./abrir-submenu.js"

const perguntas = new AbrirSubmenu(".pergunta")
perguntas.mostrarResposta()

const animaisImg = document.querySelectorAll(".js-animais img")
const animaisText = document.querySelectorAll(".js-descrição div")

function animaisTexto() {
   animaisText.forEach((animalText) => {
      animalText.classList.add("js-desativo")
   })
   animaisText[0].classList.toggle("js-desativo")

   if (animaisImg.length && animaisText.length) {
      animaisImg.forEach((animal, index) => {
         animal.addEventListener("click", () => {
            animaisText.forEach((animalText) => {
               animalText.classList.add("js-desativo")
            })
            animaisText[index].classList.toggle("js-desativo")
         })
      })
   }
}

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

animaisTexto()
TituloAnimadoScroll()
