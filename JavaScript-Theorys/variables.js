/* VARIABLES

----- var -----

Means anything that can vary. In JavaScript, a variable stores the data 
value that can be changed later on.

*/

var meuNome = "Weverton";

console.log(meuNome);

/*

----- let -----

The let keyword is used to declare variables in JavaScript. The var 
keyword can also be used to declare variables, but the key difference 
between them lies in their scopes. var is function scoped while let is 
block scoped.

*/

let NovamenteMeuNome = "Weverton";

/*

----- const -----

Constantes possuem escopo de bloco, semelhantes às variáveis declaradas 
usando o palavra-chave let. O valor de uma constante não pode ser alterado 
por uma atribuição, e ela não pod ser redeclarada.
A  declaração const cria uma variável cujo o valor é fixo, ou seja, 
uma constante somente leitura. Isso não significa que o valor é imutável, 
apenas que a variável constante não pode ser alterada ou retribuída.

*/

const pi = 3.14;

/* 

A DIFERENÇA ENTRE var, let e const:

var = poderá ser usado durante todo o seu programa. 

let = apenas poderá ser utilizado no escopo em que 
foi declarado.

const = não pode nunca mundar.

ex(
    var meuNome = "Weverton"; // a variável nome foi definida como Weverton
    var meuNome = 8;// a variável nome mudou para 8

    Se fosse uma const, essa alteração não seria possível. Você receberia um erro.
)

*/

/*
--------------------------------------------------------------------------------------
|                       Storing Values With Assignment Operator                      |
--------------------------------------------------------------------------------------

Existe uma diferença entre declarar uma variável e atribuir uma variável. ex(

    [DECLARAÇÃO]: var a;

    //////////////////////////
    
    [ATRIBUIÇÃO]: var b = 2;

)

*/

var b = 2;

console.log(b);