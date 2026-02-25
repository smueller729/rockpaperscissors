let humanScore = 0
let computerScore = 0

const playButton = document.querySelector ("#playButton")   
const log = document.querySelector("log")

playButton.addEventListener ("click", () => {
    let choice = prompt("What is your choice? Rock, paper, or scissors?");
}
)

//Get the computer choices
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Get the human choices
function getHumanChoice() {
    const input = prompt("Rock, paper, or scissors?");
    return input;
}

function playRound (humanChoice, computerChoice) {
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
