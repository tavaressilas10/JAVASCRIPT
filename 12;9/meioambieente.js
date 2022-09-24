let x

x = parseFloat(prompt("Digite o indice de poluição: "))

if(x >= 0.3 && x < 0.4){
    alert("Industria do 1º grupo suspenda suas atividades!")
}else if (x >= 0.4 && x < 0.5){
    alert("Industria do 1º e 2º grupo suspendam suas atividades!")
}else if (x >= 0.5){
    alert("Industrias de todos os grupos suspendam suas atividades!")
}else if (x >= 0.05 && x <= 0.25){
    alert("Tudo nos conformes")
}else{
    alert("Preocupante")
}