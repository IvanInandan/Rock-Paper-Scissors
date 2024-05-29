function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.33) {
    console.log("The computer picked: ROCK");
    return "ROCK";
  } else if (choice >= 0.66) {
    console.log("The computer picked: PAPER");
    return "PAPER";
  } else {
    console.log("The computer picked: SCISSORS");
    return "SCISSORS";
  }
}

function playRound(human, computer = getComputerChoice()) {
  if (humanScore < 5 && computerScore < 5) {
    computerChoice.textContent = `The computer picked: ${computer}`

    if (human == "ROCK") {
      if (computer == "ROCK") {
        result.textContent = "It's a tie!";
      } else if (computer == "PAPER") {
        result.textContent = "You lose!";
        computerScore++;
      } else if (computer == "SCISSORS") {
        result.textContent = "You win!";
        humanScore++;
      }
    } else if (human == "PAPER") {
      if (computer == "ROCK") {
        result.textContent = "You win!";
        humanScore++;
      } else if (computer == "PAPER") {
        result.textContent = "It's a tie!";
      } else if (computer == "SCISSORS") {
        result.textContent = "You lose!";
        computerScore++;
      }
    } else if (human == "SCISSORS") {
      if (computer == "ROCK") {
        result.textContent = "You lose!";
        computerScore++;
      } else if (computer == "PAPER") {
        result.textContent = "You win!";
        humanScore++;
      } else if (computer == "SCISSORS") {
        result.textContent = "It's a tie!";
      }
    }
  } 
  
  else {
    let winner = (humanScore == 5) ? "Human" : "Computer"
    let gameOver = document.createElement("h1");
    gameOver.textContent = `Game over! The '${winner}' won.`
    footer.append(gameOver);
  }
}

let humanScore = 0;
let computerScore = 0;

let playerChoice = "";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const footer = document.querySelector("#footer");
const computerChoice = document.querySelector("#computerChoice");
const result = document.querySelector("#roundResult");
const score = document.querySelector("#score");

rock.addEventListener("click", () => {
  playerChoice = "rock";
  console.log(playerChoice);
  playRound(playerChoice.toUpperCase());
  score.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
});

paper.addEventListener("click", () => {
  playerChoice = "paper";
  console.log(playerChoice);
  playRound(playerChoice.toUpperCase());
  score.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
});

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  console.log(playerChoice);
  playRound(playerChoice.toUpperCase());
  score.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
});