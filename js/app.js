let listaAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos");
    
    //Adiciono o nome na lista
    listaAmigos.push(nomeAmigo);

    //Adiciona a lista no HTML
    amigosIncluidos.innerHTML = listaAmigos;


}


function sortear(){

}


function reiniciar(){

}