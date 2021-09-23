// ~~~~~~~~~~ Global variables ~~~~~~~~~~~~~

var choices = ["pierre", "feuille", "ciseaux"];

var winningPairs = [
  "feuille/pierre",
  "pierre/ciseaux",
  "ciseaux/feuille"
];

// ~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~

function generateChoice() {
  // Generate a random number bewteen 0 and 2 matching an index in the choices array
  var randomIndex = Math.floor(Math.random() * Math.floor(choices.length));
  return choices[randomIndex];
}

// this function compare the answers and return the winner
function findWinner(playerChoice, computerChoice) {
  // Start with the easiest case
  if(playerChoice === computerChoice) {
    return false;
  }
  // We create a string as those in winningPairs, if the string is in then the player wins
  else if(winningPairs.includes(playerChoice + "/" + computerChoice)) {
    return playerName;
  }
  else {
    return "ordinateur";
  }
}

// ~~~~~~~~~~~~~ Code logic ~~~~~~~~~~~~~~~~

alert("Bonjour et bienvenue. Vous allez jouer au jeu du chifoumi sur votre navigateur grâce à JavaScript");
var playerName = prompt("Veuillez indiquer votre nom avant de jouer");
alert("Parfait " + playerName + " prêt à jouer ?");

var playerChoice = prompt("Faites votre choix entre " + choices.join());
alert("Vous avez choisi " + playerChoice);

alert("L'ordinateur joue");
var computerChoice = generateChoice();
alert("L'ordinateur a choisi " + computerChoice);

var winner = findWinner(playerChoice, computerChoice);
// If there is a winner
if(winner) {
  // Display the rigth winner
  alert("Le gagnant est : " + winner);
}
// If winner is false
else {
  alert("Match nul !");
}
