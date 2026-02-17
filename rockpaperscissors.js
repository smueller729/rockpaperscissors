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
    const valid = ['rock', 'paper', 'scissors'];
    while (true) {
        const input = prompt('Enter "rock", "paper", or "scissors" (Cancel to quit)')
        if (input === null) return null;
        const choice = input.trim().toLowerCase();
        if (valid.includes(choice)) return choice;
        alert('Invalid input. Please type rock, paper, or scissors.');
    }
}

function playRound () {
    const human = getHumanChoice();
    if (human === null) {
    console.log('No input from user.');
    return;
}

//Validate inputs
human = human.trim().toLowerCase();

const computer = getComputerChoice();
console.log(`You chose: ${human}`)
console.log(`The Computer chose: ${computer}`);

const youWin =
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper');

const result = 
    human === computer ? 'Tie!' : youWin ? 'You win!' : 'Computer wins!';

//Update Scores
if (result == 'You win!') humanScore++;
else if(result ==='Computer wins!') computerScore++;

console.log(result);
console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
}

playRound();
