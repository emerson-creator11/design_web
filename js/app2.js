let dia = prompt("escolha um dia da semana\nSendo 1:domingo - &:sábado");
dia = Number(dia);

if (dia <=0 || dia >=8 ){
    alert("Dia invalido")
}else if(dia==1){
    alert("voce escolheu domingo");
}else if(dia==2){
    alert("voce escolheu segunda");
}
else if(dia==3){
    alert("voce escolheu terça");
}
else if(dia==4){
    alert("voce escolheu quarta");
}
else if(dia==5){
    alert("voce escolheu quinta");
}
else if(dia==6){
    alert("voce escolheu sexta");
}else{
    alert("voce escolheu sabado");
}