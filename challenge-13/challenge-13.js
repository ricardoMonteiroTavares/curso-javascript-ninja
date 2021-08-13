(function(){
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
  var arr = [1,2,3,4];
console.log( 'O array em formato de string é:' );
  console.log(arr.toString());
// 1,2,3,4

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul = ['PR', 'RS', 'SC'];
var sudeste = ['ES', 'MG', 'RJ', 'SP'];
/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
  var brasil = sul.concat(sudeste);
console.log( '\nAlguns Estados do Brasil:' );
  console.log(brasil);
// ["PR", "RS", "SC", "ES", "MG", "RJ", "SP"]

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
 brasil.unshift('AC', 'AM', 'AP');
console.log( '\nMais estados adicionados:' );
// ["AC", "AM", "AP", "PR", "RS", "SC", "ES", "MG", "RJ", "SP"]

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/  
console.log( '\nEstado removido:' );
  console.log(brasil.shift());
// AC

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.filter(function(elem){
    if(elem === 'SC' || elem === 'RS' || elem === 'PR'){
        return elem;
    }
});

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
  console.log(newSul);
// ["PR", "RS", "SC"]

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
  var nordeste = ['BA','PE','PB', 'SE', 'AL', 'CE', 'PI', 'RN', 'MA'];
// ?

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
  console.log(nordeste);
// ["BA", "PE", "PB", "SE", "AL", "CE", "PI", "RN", "MA"]

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
  var newSudeste = brasil.splice(5,);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
  brasil = brasil.concat(nordeste);
// ?

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);
  //  ["ES", "MG", "RJ", "SP"]

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
  console.log(brasil);
// ["AM", "AP", "PR", "RS", "SC", "BA", "PE", "PB", "SE", "AL", "CE", "PI", "RN", "MA"]

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
  var newBrasil = [];
brasil.forEach(function(val, index){
    newBrasil.push({id: index, estado: val});
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
  console.log(newBrasil);
/*
[
 {id: 0, estado: "AM"},
 {id: 1, estado: "AP"},
 {id: 2, estado: "PR"},
 {id: 3, estado: "RS"},
 {id: 4, estado: "SC"},
 {id: 5, estado: "BA"},
 {id: 6, estado: "PE"},
 {id: 7, estado: "PB"},
 {id: 8, estado: "SE"},
 {id: 9, estado: "AL"},
 {id: 10, estado: "CE"},
 {id: 11, estado: "PI"},
 {id: 12, estado: "RN"},
 {id: 13, estado: "MA"}
]
*/

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var filter = newBrasil.filter(function(elem){
    if(elem["id"] % 2 == 0){
        return elem;
    }
});
/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
  console.log(filter);
/*
[
 {id: 0, estado: "AM"},
 {id: 2, estado: "PR"},
 {id: 4, estado: "SC"},
 {id: 6, estado: "PE"},
 {id: 8, estado: "SE"},
 {id: 10, estado: "CE"},
 {id: 12, estado: "RN"}
 ]
*/
})();
