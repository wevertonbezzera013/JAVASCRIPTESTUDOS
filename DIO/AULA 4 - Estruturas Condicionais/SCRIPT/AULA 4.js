/*
        if

Podemos usar a palavra reservada "if" para estabelecer
uma condição. Ex:

    var jogador1 = 0;
    var jogador2 = 0;

    if(jogador1 > 0){
        console.log('jogador1 marcou ponto');
    }

como ler: se o jogador1 tiver valor maior que 0, ele marcou ponto.


        else
No caso de a condição não ser atendida podemos usar o "else":
EX:
    var jogador1 = 0;
    var jogador2 = 0;

    if(jogador1 > 0){
        console.log('jogador1 marcou ponto');
    }else{
        console.log('ninguém marcou ponto);
    }


        else if
Caso haja mais de uma condição, usamos o "else if".
EX:
    var jogador1 = 0;
    var jogador2 = 0;

    if(jogador1 > 0){
        console.log('jogador1 marcou ponto');

    }else if(jogador2 > 0){
        console.log('jogador2 marcou ponto');

    }else{
        console.log('ninguém marcou ponto);
    }


        ninho de if
Podemos também usar o "if" dentro de outro "if",
chamamos isso de aninhamento de if's ou ninho de if's.
EX:
    if(jogador1 = -1){
        if(jogador1 > 0){
            console.log('jogador1 marcou ponto');

        }else if(jogador2 > 0){
            console.log('jogador2 marcou ponto');

        } else{
            console.log('Ninguém marcou ponto.')
        }
    }


            switch/case
O "switch/case" funciona como uma estrutura condicional também.
EX:
        switch(${expressao}){
            case1:
                ${instrucao};
            break;

            case2:
                ${instrucao};
            break;
        }



var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos')

if(jogador1 > 0 && jogador2 == 0){
    console.log('jogador1 marcou ponto');
    placar = jogador1 > jogador2;

}else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador2 marcou ponto');
    placar = jogador2 > jogador1;

} else{
    console.log('Ninguém marcou ponto.')
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('O jogador1 venceu!')
        break;
        case placar = jogador1 < jogador2:
            console.log('O jogador2 venceu!')
            break;
        default:
            console.log('Ninguém ganhou!')
}




        for
Funciona como uma repetição de instrução até que 
a condição seja falsa:

for([expressaoinicial]; [condicao]; [incremento]){declaracao}

Ex:
    var array = ["valor1", "valor2", "valor3", "valor4"]
        for(let i = 0; i < array.length; i++){
            console.log(i);
        }


        for/in
Funciona como uma repetição a partir de uma propriedade:

for([indice] in [objeto ou array]){declaracao}

EX:
    var array = ["valor1", "valor2", "valor3", "valor4"]

    for (i in array) {
        console.log(i);
    }


        for/of
Funciona como uma repetição a partir de um valor:

for([indice] of [array]){declaracao}

EX:
    var array = ["valor1", "valor2", "valor3", "valor4"]

    for (i of array) {
        console.log(i);
    }


        while
Executa uma instrução "enquanto" determinada condição for
verdadeira, a verificação é feita antes da execução;

EX:
    var a = 0;
    while(a < 10) {
        a++;
        console.log(a);
    }


        do/while
Executa uma instrução "até que" determinada condição seja
falsa, a verificação é feita depois da execução;

EX:
    var a = 0;
    
    do{
        a++;
        console.log(a);
    }while (a < 10);
*/

//let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

//let object = { propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

//o for executa uma instrução até que ela seja falsa

// for (let indice = 0; indice < array.length; indice++) {
// //enquanto o índice não for do tamanho do array, 
// //ele vai receber mais um a cada repetição
//     console.log(indice);

// }

//for/in executa repetição a partir de uma propriedade

//com array
// for (let i in array) {
//     console.log(i);   //vira string
// }

// //com object
// for (i in object) {
//     console.log(i)  //vai percorrer cada propriedade do objeto e imprimí-las
// }

//for/of executa uma repetição a partir de um valor

//com array
// for (i of array){
//     console.log(i) //imprime o valor de cada índice
// }

// //com object
// for (i of object.propriedade1){
//     console.log(i);
// }

var a = 0;

while (a < 10) {
    a ++;
    console.log(a);
}

do {
    a++;
    console.log(a);
}while (a < 10);