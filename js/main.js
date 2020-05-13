// Global variables
var choices = ["pierre", "feuille", "ciseaux"];

var winningPairs = [
  "feuille/pierre",
  "pierre/ciseaux",
  "ciseaux/feuille"
];

var scores = {
  "player" : 0,
  "computer" : 0
};

// Functions
function askPlayerName() {
  var name = prompt("Veuillez indiquer votre nom avant de jouer");
  while (name.length < 2 || name.length > 20) {
    var name = prompt("Votre nom doit être compris entre 2 et 20 caractères");
  }
  return name;
}

function askPlayerChoice() {
  do {
    var choice = prompt("Faites votre choix entre " + choices.join()).toLowerCase();
  }
  while (!choices.includes(choice));
  return choice;
}

// Code logic
alert("Bonjour et bienvenue. Vous allez jouer au jeu du chifoumi sur votre navigateur grâce à JavaScript");
var playerName = askPlayerName();
alert("Parfait " + playerName + " prêt à jouer ?");

while (scores["player"] < 3 && scores["computer"] < 3) {
  var playerChoice = askPlayerChoice();
  alert("Vous avez choisi " + playerChoice);
}
