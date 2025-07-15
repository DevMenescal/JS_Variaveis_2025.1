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

if (idadeMaria > idadeJoao){
  console.log("Exemplo 01 de if: Ih rapaz, a Maria é mais velha que o João.");
}

//  EXEMPLO 02

let usuario = "Gustavo"

if (usuario === "Gustavo"){
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

if (logadoTikTok === true){
  console.log("Bem-vindo meu caro desocupado!");
}

else if (logadoTikTok === false){
  console.log("Até que enfim, foi lavar a louça!");
}

// EXEMPLO 02

let nomeUsuaria = "Vanessa"

if (nomeUsuaria === "Rebecca"){
  console.log("Seja bem-vinda Rebecca. Vamos estudar?"); 
}

else if (nomeUsuaria === "Letícia"){
  console.log("Seja bem-vinda Letícia. Vamos estudar?")
}

else if (nomeUsuaria === "Vanessa"){
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

  if (corEscolhida === "Branca"){
    console.log("Ótima escolha! Seu possante será branco!");
  }
  else if (corEscolhida === "Vermelha"){
    console.log("Caraca feio, teu carro vai ser vermelho.");
  }
  else {
    console.log("Poxa, só temos duas cores disponíveis no momento. Escolha Branco ou Vermelho.");
  }

  // EXEMPLO 2

  let idadeusuario = 37

  if (idadeusuario <= 17){
    console.log("Este site não é permitido o acesso por menores de idade.");
  }
  else if (idadeusuario === 18){
    console.log("Juízo aí, meu nobre!");
  }
  else if (idadeusuario >= 90){
    console.log("Eita nois, então tá... Olha o coração!");
  }
  else{
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

    if (nomeUsuario1 === "Marcos" && senhaUsuario1 === 1234){
      console.log("Login realizado com sucesso.");
    }
    else{
      console.log("Insira os dados corretamente."); 
    }

  //  EXEMPLO 02 - || "OR"

  let temDinheiro = true
  let temCartao = false

  if (temDinheiro === true || temCartao === true){
    console.log("Pode efetuar a compra.");
  }
  else {
    console.log("Tá liso feio");
  }

  // EXEMPLO 3 ! "NOT"

  let estaChovendo = true

  if (!estaChovendo){
    console.log("Parece que não está chovendo, que tal uma voltinha de bike?");
  }
  else {
    console.log("Ih, tá chovendo! Melhor deixar para depois...");
  }

  // EXEMPLO PRÁTICO DE COM && E OR

  let idadeParticipante = 20
  let temDocumento = true

  if (idadeParticipante <=17 && temDocumento){
    console.log("Menor, mas pode participar do evento.");
  }
  else if (idadeParticipante <= 17 || !temDocumento){
    console.log("Não pode participar");
  }
  else {
    console.log("Pode partipar.");
    
  }