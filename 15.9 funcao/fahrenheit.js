let C, F
F = prompt("Escreva o seu número em Fahrenheit: ")
function  ConvertCtoF(C, F){
    C = F - 32 / 1.8
    return C
}
alert("O valor convertido para Celcius é: " + ConvertCtoF(C, F))