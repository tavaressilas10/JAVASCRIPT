let numero, impar, par, positivo, negativo
numero=prompt("Digite seu número aqui: ")

if(numero %2 == 0 && numero > 0){
alert("O número digitado é par, positivo")
}else if(numero %2 == -1 && numero < 0){
  alert("O número digitado é ímpar, negativo")

}else if(numero %2 == 1 && numero > 0){
    alert("O número digitado é ímpar, positivo")
}else if(numero %2 == 0 && numero < 0){
    alert("O número digitado é par, negativo")
    
}else{
    alert("Neutro")}