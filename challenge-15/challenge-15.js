(function(){
/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function getFullName(){
        return this.name + " " + this.lastName;
    }
    this.getAge = function getAge(){ return this.age; }
    this.addAge = function addAge(num){ this.age += num; }
}

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
var p1 = new Person('Ricardo', 'Monteiro', 24);
var p2 = new Person('Maria', 'Conceição', 57);
var p3 = new Person('Roney', 'Tavares', 67);  
console.log( 'Novas pessoas criadas à partir de Person:' );
console.log(p1);
console.log(p2);
console.log(p3);
/*
Person {name: "Ricardo", lastName: "Monteiro", age: 24, getFullName: ƒ, getAge: ƒ, …}
Person {name: "Maria", lastName: "Conceição", age: 57, getFullName: ƒ, getAge: ƒ, …}
Person {name: "Roney", lastName: "Tavares", age: 67, getFullName: ƒ, getAge: ƒ, …}
*/

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(p1.getFullName());
console.log(p2.getFullName());
console.log(p3.getFullName());  
/*
Ricardo Monteiro
Maria Conceição
Roney Tavares
*/

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(p1.getFullName() + " tem " + p1.getAge() + " anos.");
console.log(p2.getFullName() + " tem " + p2.getAge() + " anos.");
console.log(p3.getFullName() + " tem " + p3.getAge() + " anos.");  
/*
Ricardo Monteiro tem 24 anos.
Maria Conceição tem 57 anos.
Roney Tavares tem 67 anos.
*/

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
p1.addAge(2);  
console.log( '\nNova idade das pessoas:' );
console.log(p1.getFullName() + " agora tem " + p1.getAge() + " anos.");  
// Ricardo Monteiro agora tem 26 anos.
})();
