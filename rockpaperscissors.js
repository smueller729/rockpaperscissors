// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//Get human choice
function getHumanChoice() {
  const valid = ["rock", "paper", "scissors"];

  while (true) {
    const input = prompt('Enter "rock", "paper", or "scissors" (Cancel to quit)');
    if (input === null) return null;

    const choice = input.trim().toLowerCase();
    if (valid.includes(choice)) return choice;

    alert("Invalid input. Please type rock, paper, or scissors.");
  }
}

// Play a single round and return who won
function playRound() {
  const human = getHumanChoice();
  if (human === null) {
    console.log("No input from user.");
    return; // returns undefined -> signals cancel
  }

  const computer = getComputerChoice();
  console.log(`You chose: ${human}`);
  console.log(`The Computer chose: ${computer}`);

  const youWin =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  if (human === computer) return "tie";
  if (youWin) return "human";
  return "computer";
}

// Play 5 rounds, track score
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);

    const winner = playRound();

    if (winner === undefined) {
      console.log("Game cancelled.");
      break;
    }

    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;

    console.log(`Round result: ${winner}`);
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) console.log("Final: You win the game!");
  else if (computerScore > humanScore) console.log("Final: Computer wins the game!");
  else console.log("Final: It's a tie game!");
}

// Start the game
playGame();