let N, P, resultado
N = prompt("Escreva o seu número: ")
P = prompt("Escreva o número da porcentagem: ")
function  porcentagem(N, P){
    resultado = parseInt(N) * parseInt(P) / 100
    return resultado
}
alert("O valor da cálculo é: " + porcentagem(N, P))