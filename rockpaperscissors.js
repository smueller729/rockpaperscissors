let humanScore = 0
let computerScore = 0

//Get the computer choices
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Get the human choices
function getHumanChoice() {
    const message = 'Enter "rock", "paper", or "scissors"';
    const input = prompt(message);
    return input;
}

function playRound () {
    const human = getHumanChoice();
    if (human === null) {
    console.log('No input from user.');
    return;
}

human = human.trim().toLowerCase();

const computer = getComputerChoice();
console.log(`You chose: ${human}`)
console.log(`The Computer chose: ${computer}`);

const result = 
    human === computer 
    ? 'Tie!'
    : (human === 'rock' && computer === 'scissors') ||
      (human === 'scissors' && computer === 'paper') ||
      (human === 'paper' && computer === 'rock')
    ? 'You win!'
    : 'Computer wins!';
console.log(result);
}

//Update Scores
if (['rock', 'paper', 'scissors'].includes(human)) { 
    if (result === 'You win!') humanScore++;
    else if (result === 'Computer wins!') computerScore++;
} else {
    console.log('Invalid input (must be rock, paper, or scissors).');
}

playRound();
