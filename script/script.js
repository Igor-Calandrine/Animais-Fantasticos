import AbrirSubmenu from "./abrir-submenu.js"
import MostrarTexto from "./mostrar-texto.js"
import TitulosAnimados from "./entrada-titulos.js"
import AnimaNumeros from "./anima-numeros.js"
import Funcionamento from "./funcionamento.js"

const perguntas = new AbrirSubmenu(".pergunta")
const textoAnimais = new MostrarTexto("[data-textos] div", "[data-animais] div")
const titulosAnimados = new TitulosAnimados("[data-titulos]")
const animaNumeros = new AnimaNumeros("[data-numeros]")
const hrFuncionamento = new Funcionamento(".funcionamento", [1, 5], [8, 18], [12, 14])

perguntas.iniciar()
textoAnimais.iniciar()
titulosAnimados.iniciar()
animaNumeros.iniciar()
hrFuncionamento.iniciar()






