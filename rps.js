const allInputs = document.querySelectorAll("input");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const rounds = document.querySelector(".rounds");

let currentRound = 1, maxWins = 3;
let playerWinCount = 0, computerWinCount = 0;
let gameOver = false;

function resetGame() {
  currentRound = 1;
  playerWinCount = computerWinCount = 0;
  gameOver = false;
}

function getFinalWinner() {
  if (playerWinCount === maxWins) {
    return `You won ${maxWins} rounds! You are the Champion!!`;
  } else {
    return `Computer won ${maxWins} rounds! Computer is the Champion!!`;
  }
}

function displayResult(result) {
  score.innerHTML = `You: ${playerWinCount}, Computer: ${computerWinCount}`;

  if (playerWinCount === maxWins || computerWinCount === maxWins) {
    gameOver = true;
    message.innerHTML = getFinalWinner();
  } else {
    message.innerHTML = result;
  }

  currentRound++;
  rounds.innerHTML = `Round ${currentRound}`;
}

function handleBtnClick() {
  if (gameOver) {
    resetGame();
  }
  //Get choices
  const playerSelection = this.name;
  const computerSelection = getComputerChoice();
  //Play round
  const result = playRound(playerSelection, computerSelection);
  //Display result
  displayResult(result);
};

allInputs.forEach(input => {
  input.addEventListener('click', handleBtnClick);
});


function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  let playerWins = false;

  if (playerSelection === computerSelection) {

    return "It's a Tie! Try again!";
  }

  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWins = true;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWins = true;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWins = true;
  }

  if (playerWins) {
    playerWinCount++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerWinCount++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
