//Crie uma função que valide se um número é positivo, negativo ou zero.
function validaNumero(numero){
    if (numero > 0){
        return "Positivo";
    } else if (numero == 0){
        return "Número zero"
    } else {
        return "Negativo";
    }
}

console.log(validaNumero(-1)) //Negativo
console.log(validaNumero(0))  //Número zero
console.log(validaNumero(1))  //Positivo


//Implemente uma função que verifique se uma pessoa é maior de idade.
function validaMaiorDeIdade(pessoa){
    if (pessoa.idade >= 18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

let pessoa = {"nome": "Kauê", "idade": 26, "salario": 1000.50, "casado": false};
console.log(validaMaiorDeIdade(pessoa)); // Maior de idade


//Desenvolva uma função que valide se uma string é vazia ou não.
function validaVazio(texto){
    if (texto == "" || texto == null){
        return "Sem texto";
    } else {
        return "Contem texto";
    }
}

let textoString = "";
console.log(validaVazio(textoString));


//Crie uma função que determine se um ano é bissexto
function validaBissexto(ano){
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return `${ano} é bissexto`
    } else {
        return `${ano} não é bissexto`
    }
}

console.log(validaBissexto(2024));


//Implemente uma função que calcule a média de dois números,
//interrompendo a execução se algum dos números não for válido.
function validaMedia(numero1, numero2){
    if (typeof numero1 !== "number" || typeof numero2 !== 'number'){
        return "Números incorretos"
    }

    return numero1 + numero2 / 2;
}

console.log(validaMedia(3, 7));


//Desenvolva uma função que receba um array como parâmetro e retorne o seu 
//tamanho.
function quantidadeDeElementosArray(lista){
    return lista.length
}

let listaNumeros = [1,2,3,4,5,6,7]
console.log(quantidadeDeElementosArray(listaNumeros));


//Crie um array e utilize a função includes para verificar se um elemento 
//específico está presente
let listaDeNomes = ['José', 'María', 'Álvaro', 'Ana'];
let nome = "jOsE";

//Tratativa da lista e do nome pesquisado
let nomeSemAcento = removerAcentos(nome);
let listaDeNomesSemAcento = listaDeNomes.map(removerAcentos);

//Usa o includes para validar se existe
if (listaDeNomesSemAcento.includes(nomeSemAcento)){
    console.log(true)
} else {
    console.log(false)
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}


//Implemente uma função que receba um array e um elemento, e retorne se o 
//elemento está presente no array.
function validaExistenciaDeElemento(array, elemento){
    //Tratativa da lista e do nome pesquisado
    let elementoSemAcento = removerAcentos(elemento);
    let arraySemAcento = array.map(removerAcentos);

    if (arraySemAcento.includes(elementoSemAcento)){
        return true
    } else {
        return false
    }
}

console.log(validaExistenciaDeElemento(listaDeNomes, nome))


//MESMO DESAFIO?
//Crie um array de strings e utilize includes para verificar se uma 
//determinada string está presente.


//Desenvolva uma função que receba um array de objetos representando 
//estudantes de um curso e um objeto que representa um estudante procurado. 
//Depois retorne se o objeto está presente no array.
let estudantes = [{"id": 1, "nome": "Kauê", "idade": 26},{"id": 2, "nome": "José", "idade": 30},{"id": 3, "nome": "Lucas", "idade": 40}];
let estudanteProcurado = {"id": 1, "nome": "Kauê", "idade": 26};

function verificaEstudantes(estudantes, estudanteProcurado){
    for(let i = 0; i < estudantes.length; i++){
        if (estudanteProcurado.id == estudantes[i].id){
            return true;
        }
    }
    return false
}

console.log(verificaEstudantes(estudantes, estudanteProcurado));


//Crie uma função que receba um array de números e retorne a soma dos 
//elementos pares e o produto dos elementos ímpares.
let listaNumeros2 = [1,2,3,4,5,6,7,8,9,10];

function somaParesEImpares(array){
    let somaPar = 0;
    let somaImpar = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            somaPar = somaPar + array[i]
        } else {
            somaImpar = somaImpar + array[i]
        }
    }

    return `Pares: ${somaPar} - Ímpares: ${somaImpar}`
}

console.log(somaParesEImpares(listaNumeros2));