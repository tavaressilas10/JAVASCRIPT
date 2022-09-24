let r, d, s, n1, n2, n3
n1 = prompt("Digite o numero 1")
n2 = prompt("Digite o numero 2")
n3 = prompt("Digite o numero 3")

r = parseInt(n1) ** 2 + parseInt(n2) ** 2  
s = parseInt(n2) ** 2 + parseInt(n3) ** 2 
d = (r + s)/ 2

alert(d)

//**2 ou **3 faz o quadrado ou triagulo do numero
//**2 faz o numero vezes o proprio numero
//nesse exemplo funiona usar a mesma variavel "n2" duas vezes