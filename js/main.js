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

function generateChoice() {
  var randomIndex = Math.floor(Math.random() * Math.floor(choices.length));
  return choices[randomIndex];
}

function findWinner(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    return false;
  }
  else if(winningPairs.includes(playerChoice + "/" + computerChoice)) {
    return "player";
  }
  else {
    return "computer";
  }
}

function replay() {
  do {
    var answer = prompt("Voulez-vous rejouer (oui ou non)")
  } while (!["oui", "non"].includes(answer));
  if(answer === "oui") {
    scores["player"] = 0;
    scores["computer"] = 0;
  }
}

// Code logic
alert("Bonjour et bienvenue. Vous allez jouer au jeu du chifoumi sur votre navigateur grâce à JavaScript");
var playerName = askPlayerName();
alert("Parfait " + playerName + " prêt à jouer ?");

while (scores["player"] < 3 && scores["computer"] < 3) {
  var playerChoice = askPlayerChoice();
  alert("Vous avez choisi " + playerChoice);

  alert("L'ordinateur joue");
  var computerChoice = generateChoice();
  alert("L'ordinateur a choisi " + computerChoice);

  var winner = findWinner(playerChoice, computerChoice);
  if(winner) {
    scores[winner] += 1;
    alert("Le gagnant est " + (winner === "player" ? playerName : "l'ordinateur"));
    alert(playerName + " : " + scores["player"] + "\nordinateur : " + scores["computer"]);
  }
  else {
    alert("Match nul !");
  }

  if(scores["player"] === 3 || scores["computer"] === 3) {
    alert(scores["player"] === 3 ? "Vous avez gagné" : "Vous avez perdu");
    replay();
  }
}
