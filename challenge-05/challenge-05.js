/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0,1,2,3,4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
func(arr)[1]; // 1

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function func2(arr, n){
    if(n >= 0 && n < arr.length){
        return arr[n];
    }
    return null;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ["P", null, [], -5, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
func2(arr2, 0); // "P"
func2(arr2, 1); // null
func2(arr2, 2); // []
func2(arr2, 3); // -5
func2(arr2, 4); // true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var books = {
        livro1 : {
            quantidadePaginas: 255,
            autor: "Eu",
            editora: "Livro"
        },
        livro2 : {
            quantidadePaginas: 321,
            autor: "Mãe",
            editora: "Livro"
        },
        livro3 : {
            quantidadePaginas: 100,
            autor: "Pai",
            editora: "Livro"
        },
    };
    return (nome)? books[nome] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); // {livro1: {…}, livro2: {…}, livro3: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro livro1 tem " + book("livro1").quantidadePaginas + " páginas!"); // O livro livro1 tem 255 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro livro1 é " + book("livro1").autor + "."); // O autor do livro livro1 é Eu.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livro1 foi publicado pela editora " + book("livro1").editora + "."); // O livro livro1 foi publicado pela editora Livro.
