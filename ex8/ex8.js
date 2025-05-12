
let numero = 10
const button = document.querySelector("button")
button.addEventListener("click", () => {
  numero++
  console.log(numero)
})
console.log(numero)

let somar = (valor1, valor2) => valor1 + valor2
let multiplicacao = (numero1, numero2) => numero1 * numero2
console.log(somar(10, 70))