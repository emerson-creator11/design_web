var nasc = 2009
let nome = "Emerson"
const vivo = true

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
    }
    else{
        menor= false;
    }
    alert(`${nome} é menor de idade? ${menor}\nidade: ${idade}.`)
    return idade;
   

}

calcIdade();
//alert(`Fora da Função : Idade ${idade}`) erro pois a variavel let nao existe fora do escopo dela
alert(`Fora da Função : Chamando calcIdade ${calcIdade(2027)}`);
