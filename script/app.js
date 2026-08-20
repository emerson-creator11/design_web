alert("olá mundo !")

var nasc = 2009;
let nome = "Emerson";
const vivo = true
let altura = 1.85;

if (vivo) {
    let saudacao = "ola, " + nome + "!";
    let mensagem = `altura: ${altura}m | idade: ${2025-nasc}` ;
    alert (saudacao+ '\n'+mensagem);
}
else {
    alert("Voce não está vivo");
}