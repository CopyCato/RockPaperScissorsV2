let playerScore = 0;
let computerScore = 0;
let playerSelection ='';
let computerSelection = '';
let result = '';
const buttons = document.querySelectorAll('button');

// function getPlayerChoice(){
//   let selection = prompt("Please enter Rock, Paper or Scissors");
//   return selection.toLowerCase();
// }

buttons.forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.id)
  })
})

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0){
    return 'rock';
  }else if(choice == 1){
    return 'scissors';
  }else return 'paper';
}

function playRound(playerSelection){
  computerSelection = getComputerChoice();
  console.log('Player\'s choice is', playerSelection);
  console.log('Computer\'s choice is', computerSelection);

  if(computerSelection === playerSelection){
    result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    return 'tie';
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    result = ('You win! ' + playerSelection + ' beats ' + computerSelection
      + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    if(playerScore === 5){
      result += '<br><br>You won the game! Reload the page to play again';
      disableButtons();
    } 
  }
  else {
    computerScore++;
    result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
    + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    if(computerScore === 5){
      result += '<br><br>I won the game! Reload the page to play again';
      disableButtons();
    }
  }

  document.getElementById('result').innerHTML = result;
  return
}