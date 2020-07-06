// ~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~

function askPlayerName() {
  var name = prompt("Veuillez indiquer votre nom avant de jouer");
  // We check that the name respects the rules, while not we show a prompt
  while (name.length < 2 || name.length > 20) {
    var name = prompt("Votre nom doit être compris entre 2 et 20 caractères");
  }
  return name;
}

function askPlayerChoice(choices) {
  // We make a string of the array of answers to get a cleaner syntax
  // The toLowerCase function makes the player's choice case insensitive
  do {
    var choice = prompt("Faites votre choix entre " + choices.join()).toLowerCase();
  }
  // While the choice made by the player is not in the array of possible answers we show a prompt
  while (!choices.includes(choice));
  return choice;
}

function generateChoice(choices) {
  // Generate a random number bewteen 0 and 2 matching an index in the choices array
  var randomIndex = Math.floor(Math.random() * Math.floor(choices.length));
  return choices[randomIndex];
}

// this function compare the answers to know who won, return an index of the scores object
function findWinner(playerChoice, computerChoice, winningPairs) {
  // Start with the easiest case
  if(playerChoice === computerChoice) {
    return false;
  }
  // We create a string as those in winningPairs, if the string is in then the player wins
  else if(winningPairs.includes(playerChoice + "/" + computerChoice)) {
    return "player";
  }
  else {
    return "computer";
  }
}

function replay(playerName) {
  // Ask if the player wants to replay, if yes reset the scores so that the game loop goes on
  do {
    var answer = prompt("Voulez-vous rejouer (oui ou non)")
  } while (!["oui", "non"].includes(answer));
  if(answer === "oui") {
    main(playerName)
  }
}

function main(playerName) {
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

  // While neither the player or the computer has won
  while (scores["player"] < 3 && scores["computer"] < 3) {
    var playerChoice = askPlayerChoice(choices);
    alert("Vous avez choisi " + playerChoice);

    alert("L'ordinateur joue");
    var computerChoice = generateChoice(choices);
    alert("L'ordinateur a choisi " + computerChoice);

    var winner = findWinner(playerChoice, computerChoice, winningPairs);
    // If there is a winner
    if(winner) {
      // We increment the index we get front the findWinner function
      scores[winner] += 1;
      // Display the rigth winner using ternary condition for shorter syntax
      alert("Le gagnant est " + (winner === "player" ? playerName : "l'ordinateur"));
      alert(playerName + " : " + scores["player"] + "\nordinateur : " + scores["computer"]);
    }
    // If winner is false
    else {
      alert("Match nul !");
    }
  }
  // When someone has 3 points the games end and the player choose if he wants to replay
  replay(playerName);
}

// ~~~~~~~~~~~~~ Code logic ~~~~~~~~~~~~~~~~
alert("Bonjour et bienvenue. Vous allez jouer au jeu du chifoumi sur votre navigateur grâce à JavaScript");
var playerName = askPlayerName();
alert("Parfait " + playerName + " prêt à jouer ?");
main(playerName);
