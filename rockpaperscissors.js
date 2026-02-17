// const computerChoice = getComputerChoice();
// let playerScore = 0;
// let computerScore = 0;

//Set the computer choices
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}