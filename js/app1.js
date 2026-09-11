let foto =1;
const imagem = document.getElementById("Foto");

function proximo(e){
    e.preventDefault();
    if (foto < 6){
        foto = foto + 1;

    }
    imagem.setAttribute("src", `./img/foto${i}.jpg`);

}
const prox= document.getElementById("prox");
prox.addEventListener("click", proximo);