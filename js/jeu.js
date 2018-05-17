var min;
var max;
var nbrUser;
var nbrRandom;
var nbrTry = 0;

initGame();

//Paramètre de game
function initGame(){
  alert('Choisis ton interval !');
  //On définit l'interval minimal
  min = prompt('Nombre minimal de l\'interval');
  //On définit l'interval max
  max = prompt('Nombre maximal de l\'interval');
  //On génère le nbr aléatoire
  nbrRandom = randomNumber(min, max);
  var msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max + '.';
  //On affiche l'interval dans la consol !
  console.log(msg);
  //On affiche le nbrRandom dans la consol !
  console.log(nbrRandom);

  //On lance la manche !
  Manche(nbrRandom, min, max, msg);
}


function Manche(nbrRandom, min, max, msg) {
  // debugger;
  do{

    nbrUser = prompt(msg);
    //On affiche le nbruser dans la consol !
    console.log(nbrUser);

    nbrTry++
    if(min > nbrUser || nbrUser > max){
      msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max;
    }
    else if (nbrUser < nbrRandom){
      msg = 'Le nombre à deviner est plus grand !';
    }else{
      msg = 'Le nombre à deviner est plus petit !';
    }
  }while(nbrUser != nbrRandom);

  // Suivant le nombre de coup utilisé pour trouver le nombre !
  if (nbrTry === 1){
    alert('Félicitation !! Tu as trouvé le nombre en ' + nbrTry + ' coup');
  }else{
    alert('Félicitation !! Tu as trouvé le nombre en ' + nbrTry + ' coups');
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
