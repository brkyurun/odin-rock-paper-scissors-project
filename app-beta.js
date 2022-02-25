let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result-display");
const buttons = document.querySelectorAll(".options");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    result.innerText = playRound(button.textContent, computerPlay());
    checkWinner();
    displayResults();
  })
);

function checkWinner() {
  if (playerScore === 5) {
    result.innerText = `Congrats! Player has won!`;
  } else if (computerScore === 5) {
    result.innerText = `What a shame! Computer has won!`;
  }
}

function displayResults() {
  const playerStatus = document.querySelector(".player-score");
  const computerStatus = document.querySelector(".computer-score");

  playerStatus.innerText = playerScore;
  computerStatus.innerText = computerScore;
}

function computerPlay() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * computerOptions.length);

  return computerOptions[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both played ${playerSelection}`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}
