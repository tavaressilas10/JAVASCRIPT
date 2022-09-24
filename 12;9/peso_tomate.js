let peso_tomate, e, multa
peso_tomate = prompt("Quantos kgs de tomate foram comprados")
e = peso_tomate - 50
multa = e * 4
if(peso_tomate < 50){
    alert("não houve multa para o kg de tomates")
}else{
    alert("houve multa de " + multa + " R$")
}