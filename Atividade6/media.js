let nome = prompt('Digite seu nome: ');
let nota1 = parseFloat(prompt('Digite nota 1: '));
let nota2 = parseFloat(prompt('Digite nota 2: '));
let nota3 = parseFloat(prompt('Digite nota 3: '));
let nota4 = parseFloat(prompt('Digite nota 4: '));



let media = (nota1 + nota2 + nota3 + nota4)/ 4;

alert("Nome: " + nome);
alert("Media: " + media.toFixed(2));