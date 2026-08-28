let nasc = prompt("Digite seu ano de nascimento: ");
nasc = parseInt(nasc);

let vivo = confirm("se voce está vivo, clique ok: ");

if(vivo){
    alert(`voce tem ${2026-nasc} anos.`);

}else{
    ("voce foi de Vasco.");
}