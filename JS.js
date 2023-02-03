function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0){
    return 'rock';
  }else if(choice == 1){
    return 'scissors';
  }else return 'paper';
}

function getPlayerChoice(){
  let selection = prompt("Please enter Rock, Paper or Scissors");
  return selection.toLowerCase();
}

function playRound(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    console.log('It\'s a tie');
  }else if(playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'){
    console.log("You win");
  }else if(computerSelection === 'rock' && playerSelection === 'scissors'
  || computerSelection === 'paper' && playerSelection === 'rock'
  || computerSelection === 'scissors' && playerSelection === 'paper'){
  console.log("You lose");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));