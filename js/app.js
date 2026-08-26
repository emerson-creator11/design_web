var nasc = 2009
let nome = "Emerson"
const vivo = true

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false;
    }
    else{
        menor= false;
        var podebeber = true
    }
    alert(`${nome} é menor de idade? ${menor}\nidade: ${idade}\n pode beber: ${podebeber}.`)
    return idade;
   

}

calcIdade();
/* var 'vaza ' a variavel dentro do escopo da mesma funcao 
alert(`pode beber: ${podebeber}`);
*/
