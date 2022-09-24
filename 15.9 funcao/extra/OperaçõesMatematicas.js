let n1, n2, Soma, Sub, Mult, Div
n1 = prompt("Digite um número: ")
n2 = prompt("Digite um número: ")

function Calculos(n1, n2) {
    Soma = parseInt(n1) + parseInt(n2);
    Sub = parseInt(n1) - parseInt(n2);
    Mult = parseInt(n1) * parseInt(n2);
    Div = parseInt(n1) / parseInt(n2);

    return Soma, Sub, Mult, Div
}
Calculos(n1, n2)
alert("A soma dos números é de: " + Soma + "\nA subtração dos dois números é de: " + Sub +
    "\nA multiplicação dos dois números é de: " + Mult + "\nA divisão dos dois números é de: " + Div)
