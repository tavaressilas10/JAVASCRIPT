let anos, dias, dia, meses

anos = prompt("Qual anos você tem ? ")
meses = prompt("Qual o mês do seu nascimento ? ")   
dia = prompt("Qual dia você nasceu ?")

dias = (anos * anos) + (meses * 30) + dia 

alert("Você ja viveu " + dias + " dias")