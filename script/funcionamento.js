/*Classe para ativar um estilo quando o estabelcimento estiver dentro do horário de funcionamento
Deve-se inserir o Início de Fim do funcionamento dentro das listas e caso se tenha um intervalo, como pausa para almoço*/

export default class Funcionamento {
   constructor(item, diaFunc = [], horasFunc = [], intervalo = []) {
      this.item = document.querySelector(item)
      this.data = new Date()
      this.diaFunc = diaFunc
      this.horasFunc = horasFunc
      this.intervalo = intervalo
   }

   // Ativa no horário de funcionamento, Desativa fora do horário
   funcionamento() {
      const hoje = this.data.getDay()
      const horas = this.data.getHours()

      const dataFuncio = hoje >= this.diaFunc[0] && hoje <= this.diaFunc[1]
      const horaFuncio = horas >= this.horasFunc[0] && horas < this.horasFunc[1]

      if (dataFuncio && horaFuncio) {
         this.item.classList.add("ativo")
      } else {
         this.item.classList.remove("ativo")
      }
   }

   // Desativa no intervalo de funcionamento
   pausaIntervalo() {
      const horas = this.data.getHours()

      if (this.intervalo.length) {
         const emIntervalo =
            horas >= this.intervalo[0] && horas < this.intervalo[1]

         if (emIntervalo) {
            this.item.classList.remove("ativo")
         }
      }
   }

   iniciar() {
      if (this.item) {
         this.funcionamento()
         this.pausaIntervalo()
      }
   }
}
