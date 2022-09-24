let imc, peso, altura
peso = prompt("Digite o número do peso: ")
altura = prompt("Digite a altura: ")

function Paciente(peso, altura) {
    imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
    return imc
}
alert("O IMC do paciente é: " + Paciente(peso, altura).toFixed(2))