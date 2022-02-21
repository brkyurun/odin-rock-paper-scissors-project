let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both played ${playerSelection}!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `Congrats! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return `Oh no! ${computerSelection} beats ${playerSelection}!`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();

    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("Player has won!");
  } else {
    console.log("Computer has won!");
  }
}

game();
