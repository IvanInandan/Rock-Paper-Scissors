// PSEUDOCODE STEPS
// Declare two variables to track human score and computer score
// Set initial score to zero
// Play five rounds
//    Get computer choice
//    Get human choice
//    Calculate winner
//    Incrememnt winner's scorei

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

function getUserChoice() {
  let choice = prompt("Please enter your fighter: ").toUpperCase();

  while (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
    choice = prompt(
      "*Invalid Choice* Please enter your figher: ",
    ).toUpperCase();
  }

  console.log(`You picked: ${choice}`);
  return choice;
}

function playRound(human = getUserChoice(), computer = getComputerChoice()) {
  if (human == "ROCK") {
    if (computer == "ROCK") {
      console.log("It's a tie!");
    } else if (computer == "PAPER") {
      console.log("You lose! Paper covers rock.");
      computerScore++;
    } else if (computer == "SCISSORS") {
      console.log("You win! Rock crushes scissors.");
      humanScore++;
    }
  } else if (human == "PAPER") {
    if (computer == "ROCK") {
      console.log("You win! Paper covers rock.");
      humanScore++;
    } else if (computer == "PAPER") {
      console.log("It's a tie!");
    } else if (computer == "SCISSORS") {
      console.log("You lose! Scissors cuts paper.");
      computerScore++;
    }
  } else if (human == "SCISSORS") {
    if (computer == "ROCK") {
      console.log("You lose! Rock crushes scissors.");
      computerScore();
    } else if (computer == "PAPER") {
      console.log("You win! Scissors cuts paper.");
      humanScore();
    } else if (computer == "SCISSORS") {
      console.log("It's a tie!");
    }
  }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
  console.log(`\nRound ${i} | Score: ${humanScore} - ${computerScore}`);
  playRound();
}

if (humanScore > computerScore) {
  console.log("\nYou win the game!");
} else if (humanScore < computerScore) {
  console.log("\nYou lost the game!");
} else {
  console.log("\nThe game ended in a draw!");
}

console.log(`Final Score: You - ${humanScore} | Computer - ${computerScore}`);
