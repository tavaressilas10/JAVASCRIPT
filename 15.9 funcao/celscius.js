let C, F
C = prompt("Escreva o seu número em Celsius: ")
function ConvertCtoF(C, F) {
    F = parseInt(C) * 1.8 + 32
    return F
}
alert("O valor convertido para Fahrenheit é: " + ConvertCtoF(C, F))