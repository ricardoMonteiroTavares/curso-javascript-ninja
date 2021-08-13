(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
  name: "Ricardo",
  lastname: "Tavares",
  age: 24,  
};
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
 console.log(Object.keys(person));
// Propriedades de "person":
// (3) ["name", "lastname", "age"]

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({
  name: "A arte de ligar o foda-se",
  pages: 245
});
books.push({
  name: "Como as democracias morrem",
  pages: 531
});
books.push({
  name: "Amanhã vai ser pior",
  pages: 217
});
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
  console.log(books);
/*
[
{name: "A arte de ligar o foda-se", pages: 245},
{name: "Como as democracias morrem", pages: 531},
{name: "Amanhã vai ser pior", pages: 217}
]
*/

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
  console.log(books.pop());
// {name: "Amanhã vai ser pior", pages: 217}

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(JSON.stringify(books));
/*
[{"name":"A arte de ligar o foda-se","pages":245},{"name":"Como as democracias morrem","pages":531}]
*/

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i < books.length; i++) {
    for (var prop in books[i]) {
      console.log(prop + ': ' + books[i][prop]);
    }
  }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['R','i','c','a','r','d','o'];  
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log(myName.join(""));
// Ricardo

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log(myName.reverse().join(""));
// odraciR

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  console.log(myName.sort().join(""));
// Racdior
})();;
