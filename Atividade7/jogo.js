
function resultado(escolha){
  let comp = Math.floor(Math.random() * 3 );

  if(comp == 0)
  {
    var compResul = "Pedra";
  }
  else
  {
    if(comp == 1)
    {
      var compResul  = "Papel";
    }
    else
    {
      var compResul = "Tesoura";
    }
  }

  if((comp == 0 && escolha == 2) || (comp == 1 && escolha == 0) || (comp == 2 && escolha == 1))
  {
    document.getElementById("RESULTADO").innerHTML = "Você perdeu! Computador escolheu: " + compResul;
  }
  else
  {
    if((comp == 0 && escolha == 0) || (comp == 1 && escolha == 1) || (comp == 2 && escolha == 2))
    {
      document.getElementById("RESULTADO").innerHTML = "Empate! Computador escolheu: " + compResul;
    }
    else
    {
      document.getElementById("RESULTADO").innerHTML = "Você ganhou! Computador escolheu: " + compResul;
    } 
  }
}
