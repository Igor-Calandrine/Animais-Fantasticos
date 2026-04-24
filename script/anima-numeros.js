/*
Para melhor utilização é importante atribuir data-numero como atributo na tag do HTML desejado

Pode-se aumentar ou diminuir a quebra de números alterando a valor em #numerosIncremento(valor)

Pode-se também alterar o valor do intervalo da contagem alterando o valor em
numerosAnimados(valor)
*/
export default class AnimaNumeros {
   constructor(item) {
      this.item = Array.from(document.querySelectorAll(item))
      this.numeroMax = []
      this.incremento = []
      this.flagNumeros = this.item.map(() => false)
   }

   //Salva o números que devem ser atingidos
   numerosMaximos() {
      const listaNumeros = this.item.map((item) => {
         return parseInt(item.textContent)
      })

      this.numeroMax = listaNumeros
   }

   //Zeros o texto com os números
   numerosZerados() {
      this.item.forEach((item) => {
         item.textContent = 0
      })
   }

   //Divide o número em partes iguais para ser incrementado
   numerosIncremento(valor) {
      const listaIncremento = this.numeroMax.map((item) => {
         return Math.floor(item / valor)
      })
      this.incremento = listaIncremento
   }

   //Não permite abrir o incremento de forma repetitiva, realiza a animação em intervalos do seu #valor
   numerosAnimados(valor) {
      this.item.forEach((item, index) => {
         if (this.flagNumeros[index] && !item.classList.contains("animado")) {
            item.classList.add("animado")

            let numeroAtual = 0
            const maximo = this.numeroMax[index]

            const intervalo = setInterval(() => {
               if (numeroAtual < maximo) {
                  numeroAtual = numeroAtual + this.incremento[index]
                  item.textContent = numeroAtual
               } else {
                  clearInterval(intervalo)
               }
            }, valor)
         }
      })
   }

   //Cria um obervador para ativar um flag e depois ativar a animação
   observadorNumero() {
      const observador = new IntersectionObserver(
         (entradas) => {
            entradas.forEach((item) => {
               const index = this.item.indexOf(item.target)

               if (item.isIntersecting) {
                  this.flagNumeros[index] = true
                  this.numerosAnimados(50)
               } else {
                  this.flagNumeros[index] = false
               }
            })
         },
         { threshold: 1 },
      )

      this.item.forEach((item) => observador.observe(item))
   }

   iniciar() {
      this.numerosMaximos()
      this.numerosZerados()
      this.numerosIncremento(100)
      this.observadorNumero()
   }
}
