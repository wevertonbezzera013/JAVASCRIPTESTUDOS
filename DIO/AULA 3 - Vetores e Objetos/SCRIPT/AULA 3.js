//O QUE SÃO VETORES OU ARRAYS

//COMO DECLARAR UM ARRAYS
// let array = ['string', 1, true]
// console.log(array)

//UM ARRAY PODE GUARDAR VÁRIOS TIPOS DE DADOS

// let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
// console.log(array[5]);

/*
        MANIPULANDO ARRAYS
    forEach() - itera um array;
    push() - add item no final do array;
    pop() - remove item no final do array;
    shift() - remove item no início do array;
    unshift() - add item no início do array
    indexOf() - retorna o índice de um valor;
    splice() - remove ou substitui um item pelo idice;
    slice() - retorna uma parte de um array existente;
*/

// let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
//console.log(array[5]);

// forEach

// array.forEach(function(item, index) {console.log(item, index)});

//push

// array.push("Novo Item")
// console.log(array);

//pop

// array.pop();
// console.log(array);

//shift

// array.shift();
// console.log(array);

//unshift

// array.unshift("Novo Item no inícios");
// console.log(array);

//indexOf

// console.log(array.indexOf(true))

//splice

// array.splice(0, 3);
// console.log(array)

//slice
// let novoArray = array.slice(0, 3)
// console.log(novoArray);

/*
        [OBJETOS]
Dados que possum propriedades e valores que definem suas características. Deve ser declarado
entre chaves {}.

EX: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarado
assim:

    var xícara = {
        cor:'azul',
        tamanho: 'p'
        funcao: tomarCafe()
    };


*/

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}

// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var array = object.array;
// console.log(array);

var { string, number, boolean} = object;
console.log(string, number, boolean);