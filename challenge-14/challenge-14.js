(function(){
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/
var numberObjects = [];
for(var i = 1; i <= 10; i++){
  numberObjects.push({ number: i });
}
console.log( 'Number Objects Array:' );
console.log(numberObjects);
/*
[
 {number: 1}
 {number: 2}
 {number: 3}
 {number: 4}
 {number: 5}
 {number: 6}
 {number: 7}
 {number: 8}
 {number: 9}
 {number: 10}
]
*/

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
var justNumbers = numberObjects.map(function(elem){
    return elem.number;
});
console.log( '\nJust Numbers:' );
console.log(justNumbers);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
var justMod2Or3 = justNumbers.filter(function(num){
    if((num%2) == 0 || (num%3) === 0){ return num; }
});
console.log( '\nJust module of division by 2 or 3:' );
console.log(justMod2Or3);
// [2, 3, 4, 6, 8, 9, 10]

/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
console.log( '\nOperation:' );
// ?

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
console.log( '\nOperation 2:' );
// ?

/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
var name = ["ri","car","do"]; 
console.log( '\nSeu nome na língua do "P":' );
console.log("p".concat(name.join("p")));
// pripcarpdo

/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
var inversedName = name.join("").split("").reverse().join('');  
console.log( '\nInversed Name:' );
console.log(inversedName);  
// odracir

/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
// ?

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
São dois objetos criados em endereços de 2 endereços de memória diferentes
*/
console.log( '\nExiste um { number: 2 } em numberObjects?' );
if(numberObjects.indexOf({number: 2}) !== -1){
    console.log("Existe um objeto { number: 2 } em numberObjects!");
}else{
    console.log("Não existe um objeto { number: 2 } em numberObjects :(");
}
// Não existe um objeto { number: 2 } em numberObjects :(

/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
if(numberObjects.lastIndexOf({number: 2},2) !== -1){
    console.log("Existe um objeto { number: 2 } em numberObjects!");
}else{
    console.log("Não existe um objeto { number: 2 } em numberObjects :(");
}  
// Não existe um objeto { number: 2 } em numberObjects :(

/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
if(Array.isArray(justMod2Or3)){
    console.log(justMod2Or3.toString());
}  
// 2,3,4,6,8,9,10
})();
