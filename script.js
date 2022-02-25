const resultsDiv = document.querySelector(".results-container");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerOption = this.textContent;
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerOption = computerOptions[Math.floor(Math.random() * 3)];

    playRound(playerOption, computerOption);
    updateScores();
  });
});

function playRound(playerSelection, computerSelection) {
  const currentStatus = `${playerSelection} vs ${computerSelection}`;

  if (playerSelection === computerSelection) {
    return `It's a tie! You both played${playerSelection}!`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `Oh no! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}

function updateScores() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
}

// function computerPlay() {
//   const computerChoice = Math.floor(Math.random() * 3);

//   if (computerChoice === 0) {
//     return "rock";
//   } else if (computerChoice === 1) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// btnRock.addEventListener("click", () => {
//   playRound("rock", computerPlay());
// });
// btnPaper.addEventListener("click", () => {
//   playRound("paper", computerPlay());
// });
// btnScissors.addEventListener("click", () => {
//   playRound("scissors", computerPlay());
// });

// function game() {
//   // if (playerScore > computerScore) {
//   //   console.log("Player has won!");
//   // } else {
//   //   console.log("Computer has won!");
//   // }
// }
