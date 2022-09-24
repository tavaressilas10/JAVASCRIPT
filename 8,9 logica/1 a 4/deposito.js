//faça um algoritmo que receba um valor que 
//foi depositado e exiba o valor com rendimento 
//após um mês. considere fixo o juro da poupança em 0,70% a.m*/
let valor_inicial, valor_mes, juros, x
valor_inicial = prompt("Qual valor depositado ?")
juros = 0.07
valor_mes = parseFloat(valor_inicial) * (juros/100)
x = parseFloat(valor_mes) + parseFloat(valor_inicial)

alert("o valor rendeu " + x)
confirm(x + " o valor esta correto? ")

//declarar nunca com "," sempre com "."
//juros não precisou ser declarado com parse pois alocado numero nele 