function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  let playerWins = false;

  if (playerSelection === computerSelection) {
    return "It's a Tie! Try again!";
  }

  if (playerSelection === 'rock' && computerSelection === 'scissor') {
    playerWins = true;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerWins = true;
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    playerWins = true;
  }

  if (playerWins) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    let playerSelection = prompt("Enter your choice! Rock, Paper or Scissor?").toLowerCase();

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
