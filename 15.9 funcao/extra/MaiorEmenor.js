let n1, n2, n3, r1, r2
n1 = prompt("Digite o primeiro número: ")
n2 = prompt("Digite o segundo número: ")
n3 = prompt("Digite o terceiro número: ")

function MaiorNumero(n1, n2, n3) {
    r1 = Math.max(n1, n2, n3)
    return r1
}
alert("O maior número é: " + MaiorNumero(n1, n2, n3))

function MenosNumero(n1, n2, n3) {
    r2 = Math.min(n1, n2, n3)
    return r2
}
alert("O menor número é: " + MenosNumero(n1, n2, n3))