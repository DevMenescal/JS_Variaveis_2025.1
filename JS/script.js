/* == Criando Variáveis == 

 ● Até então estávamos colocando os valores nas 
expressões de console;
 ● Porém isso não é tão comum no dia a dia, nós 
precisamos utilizar variáveis;
 ● Que são como containers, que salvam informações 
para quando precisamos utilizar;
 ● Temos como declarar variáveis com let e const;
 

 ● Vamos ver na prática!*/

 // 1 - Variáveis

 // Variáveis do Tipo let: Recebe um valor mutável, ou seja, pode ser mudado no código posteriormente.

 let primeiroNome = "Gustavo"

 // Ao invés de solicitar ao console desta forma: console.log("Gustavo")
 // Eu posso utilizar a variável criada desta forma.

 console.log(primeiroNome);

 // Variáveis do tipo const: Recebe um valor que não pode ser alterado posteriormente no código.

 const idade = 42

 console.log(idade);
 
 // Exemplo de troca de valor de variável do tipo let:

 primeiroNome = "Patrick"

 console.log(primeiroNome);
 
// idade = 43 Exemplo de erro, ao tentar modificar uma variável do tipo const.

console.log(typeof primeiroNome);

console.log(typeof idade);

// MUITO IMPORTANTE: Não é permitido iniciar o nome de uma variável com NÚMEROS OU CARACTERES ESPECIAIS.

// EXEMPLOS:

// let 2teste = "inválido"

// let @teste = "inválido"

// Para nomear variáveis, é aconselhado utilizar o modelo " Camel Case" ex.:

let nomeFulano = "Fulano"

const anoNascimento = 1982

const nomeCompleto = "Gustavo Menescal"

console.log(nomeFulano, anoNascimento, nomeCompleto);

// EXCEÇÃO À REGRA: Os únicos caracteres especiais que podemos utilizar no início de nome de variáveis são:
// underline " _ "
// cifrão " $ "

let _teste = "válido"

let $teste = "válido"

console.log(_teste, $teste);

 // EMPTY VALUES
 /* ● Temos duas palavras reservadas que pertencem a 
    este grupo de dados: undefined e null;
● Undefined geralmente é visto quando utilizamos um 
  código que ainda não foi definido;
● Já null, costuma ser imposto pelos programadores, 
  para determinar que não há ainda um valor;*/

// Declarações de variáveis com Null e Undefined

let variavelNull = null // atribuindo um valor para a variável

let variavelQualquer 

console.log(variavelNull); // null
console.log(variavelQualquer); // undefined

// EXEMPLOS DE USO DE VARIÁVEIS

// 1 - CONCATENAÇÃO COM STRINGS

let nomezito = "Severino Aurélio"

let idadecita = 78

let gostaDeProgramacao = true

let filmeFavorito = "Emanuelle"

let gameFavorito = "Dominó com os parças"

console.log("O Sr.: " + nomezito + " com a idade de: " + idadecita + " , gosta de programação? " + gostaDeProgramacao + " , diz que seu filmne favorito é: " + filmeFavorito + " e seu jogo favorito é: " + gameFavorito + ".");


// 2 - OPERAÇÕES ARITMÉTICAS COM AS VARIÁVEIS

let x = 20

let y = 30

let soma = x + y

console.log("O resultado da soma entre as variáveis x e y é: " + soma);

let subtracao = y - x

console.log(subtracao);

let mutiplicacao = x * y

console.log(mutiplicacao);

let divisao = y / x

console.log(divisao);

// 3 - COMPARANDO VARIÁVEIS

x = 5
y = 10

console.log(x<y); // true
console.log(x===y); // false
console.log(x!==y); // true

// ==================================================================

/*Interpolação (Template Strings)
 ● A interpolação é um recurso semelhante a 
concatenação;
 ● Mas nos possibilita a escrever tudo na mesma 
string;
 ● E para funfar, deve ser escrita `entre crases`;
 ● Podemos executar código JavaScript com ${ algum 
código }; */

// USANDO A INTERPOLAÇÃO

// EXEMPLO 1

let produto = "Maçãs"
let quantidade = 10
let precoUnitario = 2.5
let total = quantidade * precoUnitario

// Ao invés de disso:

console.log("Você comprou: " + quantidade + " " + produto + " por " + total + " reais.");

// Use isso:

console.log(`Você comprou: ${quantidade} ${produto} por ${total} reais.`);

// Exemplo 2

const animal1 = "gatos"

const animal2 = "cachorros"

let qtdGatos = 4

let qtdCachorros = 5

let totalAnimais = qtdGatos + qtdCachorros

let frase = `Minha vozinha caquetica prefere ${animal1}, do que ${animal2}, porém ela é uma acumuladora. possuí ${qtdGatos} gatos e ${qtdCachorros} cachorros. No total, são: ${totalAnimais} bichos.`

console.log(frase);

// Exemplo 3

// let estudarJS = window.prompt("E aí feio, como é estudar Java Script?")

// window.alert(`O resultado da sua resposta é: ${estudarJS}`)


// CONVERTENDO VALORES DE UMA VARIÁVEL

// DE STRING PARA NÚMEROS

// Usando o parseInt() para números inteiros.
// (*DICA) Quando aparece na cor azul é número, já a cor branca é strings. (NO CONSOLE)

let stringNumero = "42"
let numero = parseInt(stringNumero)
console.log(stringNumero);
console.log(numero);

// Usando o parseFloat(), para números flutuantes (Números quebrados).

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)
console.log(numeroQuebrado);

// Usando o Number() * Mais indicado para o dia a dia.

let stringNumero22 = "22"
let numero22 = Number(stringNumero22)
console.log(numero22);

// Usando o operador "+" antes do nome da variável

let stringNumero1 = "1991"
let numeroConvertido1  = +stringNumero1

let stringNumero2 = "1992"
let numeroConvertido2 = +stringNumero2

console.log(numeroConvertido1, numeroConvertido2);


