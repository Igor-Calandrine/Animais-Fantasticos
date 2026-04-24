/*Para o funcionamento é importante acrescentar data-titulos onde se deseja que se tenha uma entrada animada

Pode-se modificar a posição de entrada ajustando a variável posição em #posicaoItemTela (posicao)*/
 
export default class TitulosAnimados {
   constructor (item) {
      this.item = document.querySelectorAll(item)
   }

   //Atualiza dados da altura da Tela
   alturaTelaTela () {
      const alturaTela = window.innerHeight
      return alturaTela
   }

   //Mostra o primeiro título do topo da página
   mostrarPrimeiroTitulo () {
      this.item[0].dataset.titulos = "animados"
   }

   //Anima na posicao desejada
   posicaoAnimacao (posicao) {
      window.addEventListener("scroll", () => {
         this.item.forEach((item) => {
            const topItem = item.getBoundingClientRect().top

            if (topItem < this.alturaTelaTela () * posicao) {
               item.dataset.titulos = "animados"
            }
            else if (topItem > this.alturaTelaTela()) {
               item.dataset.titulos = ""
            }
         })
      })
   }

   iniciar() {
      this.mostrarPrimeiroTitulo()
      this.posicaoAnimacao(0.85)
   }
    
}