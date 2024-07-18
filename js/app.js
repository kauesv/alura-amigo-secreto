let listaAmigos = [];
let sorteioFeito = false;

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    let amigosIncluidos = document.getElementById("lista-amigos");

    //Valida se o nome ja existe, se não adiciona o nome na lista
    if ((!listaAmigos.includes(nomeAmigo.value)) && (nomeAmigo.value != "")){
        listaAmigos.push(nomeAmigo.value);
    } else {
        alert("O nome já esta na lista ou é inválido.")
    }
    
    //Adiciona a lista no HTML
    amigosIncluidos.innerHTML = listaAmigos;

    //Limpa o campo para um novo nome
    nomeAmigo.value = "";
}

function sortear(){
    // Verifica se a lista está com a quantidade necessária
    if (listaAmigos.length <= 2) {
        alert("Insira mais nomes na lista.");
        return NaN;
    }

    let amigosSorteados = document.getElementById("lista-sorteio");

    // Valida se o sorteio já foi feito
    if (sorteioFeito == true){
        amigosSorteados.innerHTML = "";
    }

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
            amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${listaAmigos[i]} --> ${listaAmigos[0]} <br>`
        } else {
            amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${listaAmigos[i]} --> ${listaAmigos[i+1]} <br>`
        }
    }

    // Sinaliza sorteio feito
    sorteioFeito = true;
}

function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    listaAmigos = [];
    sorteioFeito = false;
}