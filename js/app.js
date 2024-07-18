let listaAmigos = [];
let listaAmigosSortidos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos");

    //Adiciono o nome na lista
    listaAmigos.push(nomeAmigo);

    //Adiciona a lista no HTML
    amigosIncluidos.innerHTML = listaAmigos;
}

function sortear(){
    // Verifica se a lista está com a quantidade necessária
    if (listaAmigos.length <= 2) {
        alert("Insira mais nomes na lista.");
        return NaN;
    }

    let amigosSorteados = document.getElementById("lista-sorteio");

    //Embaralha a lista de amigos
    listaAmigos.sort(() => Math.random() - 0.5);
    //console.log(listaAmigos)

    // A Partir da sequencia do embaralhamento define os amigos secretos
    for (let i=0; i < listaAmigos.length; i++){

        //Exemplo:
        // 0 -> 1
        // 1 -> 2
        // 2 -> 3
        // 3 -> 0

        // Valida se chegou no último número
        if (i === listaAmigos.length - 1){
            //listaAmigosSortidos.push(`${listaAmigos[i]} --> ${listaAmigos[0]}`)
            amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${listaAmigos[i]} --> ${listaAmigos[0]} <br>`
        } else {
            //listaAmigosSortidos.push(`${listaAmigos[i]} --> ${listaAmigos[i+1]}`)
            amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${listaAmigos[i]} --> ${listaAmigos[i+1]} <br>`
        }
    }
}


function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    listaAmigos = [];
    listaAmigosSortidos = [];
    document.getElementById("nome-amigo").value = "";
}