let playerScore = 0;
let computerScore = 0;
let playerSelection ='';
let computerSelection = '';
let result = '';


function getPlayerChoice(){
  let selection = prompt("Please enter Rock, Paper or Scissors");
  return selection.toLowerCase();
}

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0){
    return 'rock';
  }else if(choice == 1){
    return 'scissors';
  }else return 'paper';
}

function playRound(computerSelection, playerSelection){
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log('Player\'s choice is', playerSelection);
  console.log('Computer\'s choice is', computerSelection);

  if(computerSelection === playerSelection){
    return 'tie';
  }else if(playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    return 'win';
  }else if(computerSelection === 'rock' && playerSelection === 'scissors'
  || computerSelection === 'paper' && playerSelection === 'rock'
  || computerSelection === 'scissors' && playerSelection === 'paper'){
    computerScore++;
    return 'lose';
  }
}

function game(){
  for(let i =0; i < 5; i++){
    result = playRound(computerSelection,playerSelection);
    if(result == 'tie'){
      console.log('It\'s a tie game');
    }else if(result == 'win'){
      console.log('You win this round');
    }else{
      console.log('You lose this round');
    }
  }
  if(playerScore > computerScore){
    console.log('Congrats, you win the game!');
  }else{
    console.log('Better luck next time, computer wins!');
  }
}

game();