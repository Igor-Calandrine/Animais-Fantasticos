export default class AbrirSubmenu {
   constructor(elemento) {
      this.elemento = document.querySelectorAll(elemento)
   }

   esconderSubmenu() {
      this.elemento.forEach((pergunta) => {
         pergunta.nextElementSibling.classList.toggle("desativo")
      })
   }

   mostrarPrimeiroSubmenu() {
      this.elemento[0].nextElementSibling.classList.toggle("desativo")
   }

   mostrarResposta() {
      this.elemento.forEach((pergunta) => {
         pergunta.addEventListener("click", (event) => {
            const pergunta = event.target
            const resposta = pergunta.nextElementSibling

            resposta.classList.toggle("desativo")
         })
      })
   }

   iniciar() {
      this.esconderSubmenu()
      this.mostrarPrimeiroSubmenu()
      this.mostrarResposta()
   }
}
