let vezes = Number(prompt("Digite o numero de vezes: "));
for(let i = 1;i<=vezes; i++ ){
    alert(`contei ${i} vezes`);
    if(i%2!=0){
        continue;
    }
    alert(`${i} é par`);

}
