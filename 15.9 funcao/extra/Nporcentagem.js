let num, P, resultado
num = prompt("Escreva o seu número: ")
P = prompt("Escreva o número da porcentagem: ")

function Porcentagem(num, P) {
    resultado = parseInt(num) * (parseInt(P) / 100)
    return resultado
}
alert("O resultado é: " + Porcentagem(num, P))