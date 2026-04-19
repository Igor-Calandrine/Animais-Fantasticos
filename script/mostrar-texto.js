export default class MostrarTexto {
   constructor(itemTextos, itemImagens) {
      this.itemTexto = document.querySelectorAll(itemTextos)
      this.itemImagens = document.querySelectorAll(itemImagens)
   }

   esconderTextos() {
      this.itemTexto.forEach((item) => {
         item.classList.add("texto-desativo")
      })
   }

   mostrarPrimeiroTexto() {
      this.itemTexto[0].classList.toggle("texto-desativo")
   }

   reiniciarEstilosEntrada() {
      this.itemTexto.forEach((item) => {
         item.classList.remove("entrada-textos")
      })
   }

   selecionarItem() {
      this.itemImagens.forEach((item, index) => {
         item.addEventListener("click", () => {
            this.esconderTextos()
            this.reiniciarEstilosEntrada()

            this.itemTexto[index].classList.toggle("texto-desativo")
            this.itemTexto[index].classList.add("entrada-textos")
         })
      })
   }

   iniciar() {
      this.esconderTextos()
      this.mostrarPrimeiroTexto()
      this.selecionarItem()
   }
}
