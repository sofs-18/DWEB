function funcao(escolha){
  
  if(escolha == 1){
    var NUM1 = prompt("Digite o primeiro número:");
    var NUM2 = prompt("Digite o segundo número:");
    var NUM3 = prompt("Digite o terceiro número:");
    funcao1(NUM1, NUM2, NUM3);
  }
  if(escolha == 2){
    var NUM1 = prompt("Digite o primeiro número:");
    var NUM2 = prompt("Digite o segundo número:");
    var NUM3 = prompt("Digite o terceiro número:");
    funcao2(NUM1, NUM2, NUM3);
  }
  if(escolha == 3){
    var STRING1 = prompt("Digite uma palavra ou frase:")
    funcao3(STRING1);
  }
  if(escolha == 4){
    var STRING1 = prompt("Digite a primeira palavra:")
    var STRING2 = prompt("Digite a segunda palavra:")
    funcao4(STRING1, STRING2);
  }
  if(escolha == 5){
    var DATA = prompt("Digite uma data (AAAA-MM-DD):");
    funcao5(DATA);
  }

}

function funcao1(num1, num2, num3){

  if(num1 == num2 && num1 == num3 && num2 == num3){
    document.getElementById("RESULTADO").innerHTML = "ERRO. Todos os número são iguais.";
  }
  else{
    if(num1 >= num2 && num1 >= num3){
      document.getElementById("RESULTADO").innerHTML = "O maior número é: " + num1;
    }
    else{
      if(num2 >= num1 && num2 >= num3){
      document.getElementById("RESULTADO").innerHTML = "O maior número é: " + num2;
    }
      else{
        document.getElementById("RESULTADO").innerHTML = "O maior número é: " + num3;
      }
    }
  }
    

}

function funcao2(num1, num2, num3){
  var vetor = [num1, num2, num3]
  var aux

  if(num1 == num2 && num1 == num3 && num2 == num3){
    document.getElementById("RESULTADO").innerHTML = "ERRO. Todos os número são iguais.";
  }
  else{
    for(cont=0; cont < 2; cont++){
      for(i=0; i<3; i++){
        if(vetor[i] > vetor[i+1]){
          aux = vetor[i]
          vetor[i] = vetor[i+1]
          vetor[i+1] = aux
        }
    }
    
    document.getElementById("RESULTADO").innerHTML = "A ordem crescente dos números: " + vetor;
  }
  }

}

function funcao3(string1){

  string1 = string1.toLowerCase()
  
  var string1 = string1.split(" ").join("")
  var invertida = string1.split("").reverse().join("")

  if(string1 == invertida){
    document.getElementById("RESULTADO").innerHTML = "Sua palavra/frase é um palídromo!";
  }
  else{
    document.getElementById("RESULTADO").innerHTML = "Sua palavra/frase NÃO é um palídromo!";
  }

}

function funcao4(string1, string2){

  if(string1 == "" || string2 == ""){
    document.getElementById("RESULTADO").innerHTML = "ERRO. Um undefined/null foi encontrado.";
  }
  else{
    string1 = string1.toLowerCase()  
    string2 = string2.toLowerCase()

    if(string1.includes(string2)){
      document.getElementById("RESULTADO").innerHTML = "É um subconjunto!";
    }
    else{
      document.getElementById("RESULTADO").innerHTML = "NÃO é um subconjunto!";
    }
  }
  
  

}

function funcao5(data){

  if (data) {
    const dataNova = new Date(data + "T00:00:00");

    if (!isNaN(dataNova.getTime())) {
      var semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

      var numDoDia = dataNova.getDay()
      var diaDaSemana = semana[numDoDia]
      
      document.getElementById("RESULTADO").innerHTML = "Esse dia da semana foi " + diaDaSemana;
    } else {
      document.getElementById("RESULTADO").innerHTML = "Data inválida!";
    }
  }

  
}