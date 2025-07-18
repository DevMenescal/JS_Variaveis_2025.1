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

console.log("O Sr.: " + nomezito + " com a idade de: " + idadecita + " , gosta de programação? " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo favorito é: " + gameFavorito + ".");


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

console.log(x < y); // true
console.log(x === y); // false
console.log(x !== y); // true

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
let numeroConvertido1 = +stringNumero1

let stringNumero2 = "1992"
let numeroConvertido2 = +stringNumero2

console.log(numeroConvertido1, numeroConvertido2);


// CONVERTENDO DE NÚMEROS PARA STRING

// USANDO o toString()

let numero666 = 666
let stringNumero666 = numero666.toString()
console.log(stringNumero666);


// USANDO String()

let numero33 = 33
let stringnumero33 = String(numero33)
console.log(stringnumero33);

/* CONHECENDO ESTRUTURAS CONDICIONAIS

- Os programas são executados de cima para baixo;
- Com estas estruturas podemos alterar o fluxo de execução;
- O caminho dependerá das condições e comparações.*/

// USANDO O IF

// if: Executar um bloco de código, se uma condição for verdadeira.

// SITAXE: if (condição) {}

// Exemplo 01 

let idadeMaria = 71

let idadeJoao = 63

if (idadeMaria > idadeJoao) {
  console.log("Exemplo 01 de if: Ih rapaz, a Maria é mais velha que o João.");
}

//  EXEMPLO 02

let usuario = "Gustavo"

if (usuario === "Gustavo") {
  console.log(`Fala meu camarada ${usuario}, seu casca de bala!`);

}

// USANDO O else if

// else if: Adiciona uma nova condição, se a condição anterior for falsa.

/* SINTAXE:

if (condicao){
}
else if (outraCondicao){
}

*/

// EXEMPLO 01 

let logadoTikTok = false

if (logadoTikTok === true) {
  console.log("Bem-vindo meu caro desocupado!");
}

else if (logadoTikTok === false) {
  console.log("Até que enfim, foi lavar a louça!");
}

// EXEMPLO 02

let nomeUsuaria = "Vanessa"

if (nomeUsuaria === "Rebecca") {
  console.log("Seja bem-vinda Rebecca. Vamos estudar?");
}

else if (nomeUsuaria === "Letícia") {
  console.log("Seja bem-vinda Letícia. Vamos estudar?")
}

else if (nomeUsuaria === "Vanessa") {
  console.log("Seja bem-vinda Vanessa. Vamos estudar?");
}

// USANDO O else

/* else: Executa um bloco de código se todas as condições anteriores forem falsas.
 
SINTAXE:

if (condição){
}
 
else if (outra condição){
}

else {}  */

// if e else, só temos 1, no início e outro no final.
// else if, eu posso ter vários ao longo da comparação;

// EXEMPLO 01

let corEscolhida = "Preta"

if (corEscolhida === "Branca") {
  console.log("Ótima escolha! Seu possante será branco!");
}
else if (corEscolhida === "Vermelha") {
  console.log("Caraca feio, teu carro vai ser vermelho.");
}
else {
  console.log("Poxa, só temos duas cores disponíveis no momento. Escolha Branco ou Vermelho.");
}

// EXEMPLO 2

let idadeusuario = 37

if (idadeusuario <= 17) {
  console.log("Este site não é permitido o acesso por menores de idade.");
}
else if (idadeusuario === 18) {
  console.log("Juízo aí, meu nobre!");
}
else if (idadeusuario >= 90) {
  console.log("Eita nois, então tá... Olha o coração!");
}
else {
  console.log("Boa diversão!!!");

}

// OPERADORES LÓGICOS
/* ● Os operadores lógicos servem para unir duas ou  mais comparações;
   ● O resultado final também é um boolean;
   ● && - AND - true apenas se os dois lados forem verdadeiros;
   ● || - OR - para ser true, um lado como true é  suficiente;
   ● !  - NOT - este operador inverte a comparação; */

// EXEMPLO 01 - && "AND"

let nomeUsuario1 = "Marcos"
let senhaUsuario1 = 1234

if (nomeUsuario1 === "Marcos" && senhaUsuario1 === 1234) {
  console.log("Login realizado com sucesso.");
}
else {
  console.log("Insira os dados corretamente.");
}

//  EXEMPLO 02 - || "OR"

let temDinheiro = true
let temCartao = false

if (temDinheiro === true || temCartao === true) {
  console.log("Pode efetuar a compra.");
}
else {
  console.log("Tá liso feio");
}

// EXEMPLO 3 ! "NOT"

let estaChovendo = true

if (!estaChovendo) {
  console.log("Parece que não está chovendo, que tal uma voltinha de bike?");
}
else {
  console.log("Ih, tá chovendo! Melhor deixar para depois...");
}

// EXEMPLO PRÁTICO DE COM && E OR

let idadeParticipante = 20
let temDocumento = true

if (idadeParticipante <= 17 && temDocumento) {
  console.log("Menor, mas pode participar do evento.");
}
else if (idadeParticipante <= 17 || !temDocumento) {
  console.log("Não pode participar");
}
else {
  console.log("Pode partipar.");

}

// ESTRUTURA CONDICIONAL : SWITCH
/* ● O switch pode ser utilizado para organização de um 
excesso de if/else;
   ● Cada if seria um case;
   ● Para cada case, temos que adicionar um break;
   ● E temos o default, que é como o else; */

/*
SINTAXE: switch (expressao){
case valor1:

break
case valor2:

break
 
default:
 // código a ser executado se nenhum dos casos anteriores for respondido.
}
*/

// Exemplo 01 - Verificar o valor da Variável job

const job = "Engenheiro"

switch (job) {
  case "Programador":
    console.log("Você é um Programador");
    break;
  case "Advogado":
    console.log("Você é um Advogado!");
    break;
  case "Engenheiro":
    console.log("Você é um Engenheiro!");
    break
  default:
    console.log("Profissão não encontrada!");
    break;
}

// Exemplo 02 - Dias da Semana

let dia = 8

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-Feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}


// INCREMENTO E DECREMENTO: São usados para aumentar ou diminuir o valor de uma variável numéria em +1 ou -1

// ANTES DA VARIÁVEL: Quando você usa o operador de incremento ou decremento antes da variável (++variavel ou --variavel),
// a mudança é feita de forma imediata.

// INCREMENTO

let contagemMais = 5

let resutadoMais = ++contagemMais * 2

console.log(`O resultadoMais ficou: ${resutadoMais}`);
console.log(`A contagemMais fico: ${contagemMais}`);


// DECREMENTO 

let contagemMenos = 5

let resultadoMenos = --contagemMenos * 2

console.log(`O resultadoMenos ficou: ${resultadoMenos}`);
console.log(`O contagemMenos ficou: ${contagemMenos}`);


// DEPOIS DA VARIÁVEL: Quando você usa o operador de incremento ou decremento depois da variável (variel++ ou variavel--), o valor inicial da variável é usado em qualquer expressã, aí só depois é efetuado a mudança.

// Incremento 

let contagemMais2 = 6

let resultadoMais2 = contagemMais2++ * 2

console.log(`O resultadoMais2 ficou: ${resultadoMais2}`);
console.log(`O contagemMais2 ficou: ${contagemMais2}`);

// Decremento

let contagemMenos2 = 5

let resultadoMenos2 = contagemMenos2-- * 2

console.log(`O resultadoMenos2 foi: ${resultadoMenos2}`);
console.log(`O contagemMenos2 foi: ${contagemMenos2}`);


//ESTRUTURAS DE REPETIÇÃO
/* O que são estruturas de repetição?
● Um bloco de código que se repete até uma 
condição ser satisfeita;
● Isso evita a repetição desnecessária do nosso 
código;
● A suas sintaxes são diferentes, mas as duas chegam 
no mesmo resultado;
● Temos que nos atentar ao loop infinito */

// WHILE: é usada para repetir um bloco de código enquanto uma condição especificada for verdadeira.

// SINTAXE: while (condição) {}

// Exemplo 01

let contagemRegressiva = 10

while (contagemRegressiva > 0) {
  console.log(contagemRegressiva)
  contagemRegressiva--
}

console.log("Feliz ano novo!");

// EXEMPLO 02 

let estoque = 5

while (estoque > 0) {
  console.log("Produto em estoque. Quantidade restante: " + estoque)
  estoque--
}

console.log("Produto esgotado!");

// FOR: é usada quando você sabe exatamente quantas vezes, deseja repetir uma ação. Ele consiste em 3 partes: inicialização, condição e expressão final.

// SINTAXE: for (incialização; condição; expressão final) {}

// EXEMPLO 01

for (let i = 1; i < 10; i++) {
  console.log("Repetindo algo...");
}

// EXEMPLO 02

let estoque1 = 10

for (estoque1; estoque1 > 0; estoque1 = estoque1 - 1) {
  console.log(`O estoque está diminuindo: ${estoque1}`);
}
console.log(`O estoque é igual a: ${estoque1}`);


// Forçando a saída de um loop
// Com a instrução do break podemos parar um loop, fazendo com que as repetições cessem.
// Isso pode poupar memória, pois o código será executado menos vezes.
// Observação: seu uso não é muito comum, mas é um recurso válido.

// EXEMPLO

let estoque2 = 20
for (estoque2; estoque2 > 10; estoque2--) {
  console.log(`O estoque é: ${estoque2}`);

  if (estoque2 === 15) {
    console.log("Atenção! O estoque cegou em 15 unidades.");

  }
}

// Pulando uma execução de loop
// A palavra reservada continue, pode pular uma ou mais execuções do loop.
// É um recurso utilizado de forma semelhante ao break.

// Exemplo

for (let f = 1; f <= 5; f++) {
  if (f === 3) {
    continue
  }
  console.log("Contagem: " + f);

}

/* O que são funções?
 ● Estruturas de código menores, podemos dividir 
nosso código em várias funções;
 ● O ideal é que cada uma tenha apenas um único 
objetivo;
 ● Isso nos faz poupar código, pois podemos 
reaproveitá-las;
 ● A linguagem tem várias funções já criadas, e nós 
podemos criar as nossas;

    Definindo uma função
  ● A estrutura da função é um pouco mais complexa;
  ● Primeiramente utilizamos a palavra function, isso 
  inicia uma função;
  ● Precisamos depois nomeá-la;
  ● Os parâmetros, que são uma espécie de 
  configuração, ficam entre ( ) depois do nome;
  ● O corpo da função fica entre  { };
  ● Geralmente uma função retorna um valor; */

// SINTAXE: function nomeDaFuncao (){}

// EXEMPLO 1 - USO BÁSICO

function minhaFuncao() {
  console.log("Testando, 1, 2, 3...");
}

minhaFuncao()

// EXEMPLO 2 - USANDO UMA FUNÇÃO EM UMA VARIÁVEL

const minhaFuncaoEmVariavel = function () {
  console.log("Usando uma função em variável");
}

minhaFuncaoEmVariavel()

// EXEMPLO 3 - USANDO UMA FUNÇÃO COM PARÂMETRO

function funcaoComParametro(txt) {
  console.log(`${txt}`);
}

funcaoComParametro("Hoje é quinta-feira negada!!!")

// A palavra reservado return, é fundamental em funções, porque permite que elas produzam algum resultado, que pode ser usado em outras partes do código. Sem o mesmo, não consiguimos usar o resultado dela em outra parte do código.

// EXEMPLO COM RETURN

const a = 10
const b = 20
const c = 30
const d = 40

function somandoNumeros(n1, n2) {
  return n1 + n2
}

const resultado = somandoNumeros(a, b)

console.log(resultado);

console.log(somandoNumeros(c, d));

/* Escopo das funções
● As funções tem um escopo separado do escopo do 
programa, que é o global;
● Este escopo faz com que variáveis de fora não 
funcionem dentro;
● Podemos então declarar novas variáveis, sem 
interferir nas já declaradas;*/

let varTeste = 10

function testandoEscopo() {
  let varTeste = 20
  console.log(`Exemplo de Escopo: Variável dentro da função: ${varTeste}`);
}

console.log(`Exemplo de Escopo: Variável fora da função: ${varTeste}`);

testandoEscopo()


/* Escopo aninhado
As formas de criar variáveis, let e const, nos dão a 
possibilidade do escopo aninhado;
 ● Que consiste em ter em qualquer bloco a 
declaração de variáveis separadas dos outros 
escopos;
 ● Um bloco é caracterizado por um código entre { }; */

 let varTeste2 = 10

 function escopoAninhado(){
  let varTeste2 = 20;

  if (varTeste2 === 20){
    let varTeste2 = 30;
    console.log(`Escopo Aninhado: Valor da variável dentro do IF: ${varTeste2}`);
  }
  console.log(`Escopo Aninhado: Valor da variável dentro da Função: ${varTeste2}`);
 }

 escopoAninhado()

 console.log(`Escopo Aninhado: Valor da variável fora da Função: ${varTeste2}`);
 