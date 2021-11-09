/* 
        Funções
São blocos de comandos e instruções para a execução de
determinadas tarefas:

Ex:
    function nomeDaFuncao(){
        ${instrucao};
    }

    nomeDaFuncao();


        Como declarar?
Gerlamente se utiliza a palavra "function" seguida de
parênteses "()" e chaves "{}":

EX:
    function funcao(){
        console.log("mensagem!")
    }

    funcao();

() - indica que é um objeto do tipo function:
{} - indica que é um bloco de instrução;


        Funções com parâmetros
As funções podem receber em sua declaração, parâmetros, que
servem como variáveis, onde sua atribuição pode ser feita
durante a chamada da função:

EX:
    function nomeDaFuncao(parametro){
        ${instrucao};
    }

    nomeDaFuncao(valorDoParametro):
*/

// function funcao(){
//     console.log("Tudo certo.")
// }

// funcao();

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}
mensagem("Tudo certo", "Jovem")