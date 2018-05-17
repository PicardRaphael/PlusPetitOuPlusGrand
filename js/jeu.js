var min;
var max;
var nbrUser;
var nbrRandom;
var nbrTry = 0;
var nbrChance;

initGame();

//Fonction  pour paramétrer la game !
function initGame(){
  alert('Choisis ton interval !');
  //L'utilisateur définit l'interval minimal
  min = prompt('Nombre minimal de l\'interval');
  //L'utilisateur définit l'interval max
  max = prompt('Nombre maximal de l\'interval');
  //L'utilisateur définit le nombre de vie
  nbrChance = prompt('Nombre de vie')
  //On génère le nbr aléatoire
  nbrRandom = randomNumber(min, max);
  var msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max + '.';
  //On affiche l'interval dans la consol !
  console.log(msg);
  //On affiche le nbrRandom dans la consol !
  console.log(nbrRandom);

  //On lance la manche !
  Manche(nbrRandom, min, max, msg, nbrChance);
}

//Fonction pour lancer la partie
function Manche(nbrRandom, min, max, msg, nbrChance) {
  // debugger;
  do{

    nbrUser = prompt(msg);
    //On affiche le nbruser dans la consol !
    console.log(nbrUser);

    nbrTry++;
    console.log(nbrTry);
    if(min > nbrUser || nbrUser > max){
      msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max +' il te reste ' + (nbrChance - nbrTry) + ' vie';
    }
    else if (nbrUser < nbrRandom){
      msg = 'Le nombre à deviner est plus grand ! il te reste ' + (nbrChance - nbrTry) + ' vie';
    }else{
      msg = 'Le nombre à deviner est plus petit ! il te reste ' + (nbrChance - nbrTry) + ' vie';
    }
  }while(nbrTry <= nbrChance && nbrUser !== nbrRandom);

  // Suivant le nombre de coup utilisé pour trouver le nombre !
  if(nbrTry >= nbrChance){
    alert('You loose !');
  }else{
    alert('Félicitation !! Tu as trouvé le nombre en ' + nbrTry + ' coup');
  }

  newGame = prompt('Veux-tu rejouer ? yes ou no');
  console.log(newGame);
  if(newGame === 'yes'){
    location.reload();
  }
}


// Function Chiffre aléatoire !!
function randomNumber(min, max) {
  //Math.ceil() *Retourne plus petit entier sup ou = au nbr donné
  min = Math.ceil(min);
  //Math.floor() *Retourne plus grand entier inf ou = au nbr donné
  max = Math.floor(max);
  //Math.random() *Génère un nombre aléatoire entre [0 et 1[
  return Math.floor(Math.random() * (max - min +1)) + min;
}
