const allInputs = document.querySelectorAll("input");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const rounds = document.querySelector(".rounds");

let currentRound = 1, maxWins = 3;
let playerWinCount = 0, computerWinCount = 0;
let gameOver = false;

function handleBtnClick() {
  if (gameOver) {
    currentRound = 1;
    playerWinCount = computerWinCount = 0;
    gameOver = false;
  }

  console.log(`${this.name}`);
  const playerSelection = this.name;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  score.innerHTML = `You: ${playerWinCount}, Computer: ${computerWinCount}`;

  currentRound++;

  if (playerWinCount === maxWins || computerWinCount === maxWins) {
    gameOver = true;
    let finalWinner = "";
    if (playerWinCount === maxWins) {
      finalWinner = `You won ${maxWins} rounds! You are the Champion!!`;
    } else {
      finalWinner = `Computer won ${maxWins} rounds! Computer is the Champion!!`;
    }
    message.innerHTML = finalWinner;
  } else {
    message.innerHTML = result;
  }

  rounds.innerHTML = `Round ${currentRound}`;
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

function game() {
  for (let round = 0; round < 5; round++) {
    let playerSelection = prompt("Enter your choice! Rock, Paper or Scissors?").toLowerCase();

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

//game();
