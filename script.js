// This is just to test the js file is connected to the html file. 
console.log("Rock Paper Scissors!")
// Write a function to return "Rock," "Paper," or "Scissors"


function getComputerChoice() {
    // Create a variable to hold the function equation
    // The equation below generates a random number between 0 and 3 (excluding 3) using math.random
    // then is rounded to the lowest integer (still excluding 3). 
            
            // If you wanted to include 3 it would look like this = Math.floor(Math.random() * 3) + 1
            // Some other examples for future reference:
            // 5 -> 20 (Generate a random number between 5 and 20)
            // Math.floor(Math.random() * 16) + 5;
            // -10 -> (-2) (Generate a random integer between -10 and -2)
            // Math.floor(Math.random() * 9) - 10;

    let randomNumber = Math.floor(Math.random() * 3);
    // Create conditional statement to produce string options
    if (randomNumber === 0) {
        choice = "Rock";
    } else if (randomNumber === 1) {
        choice = "Paper";
    } else if (randomNumber === 2) {
        choice = "Scissors";
    }
    return choice;
}
// This is only used to check the function is working:
// console.log(getComputerChoice());

// Write a function that takes the human's choice. Return must be included otherwise 
// console.log doesn't show anything. Only the prompt is shown. 
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    
    return humanChoice;   
}
// This is only used to check the function is working:
// console.log(getHumanChoice());

function playGame() {
    // Create two variables in the global scope. I moved these into the playGame function 
    // based on research from the internet.
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You both picked ${computerChoice}! It's a tie!`);
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats paper!");
        humanScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper!");
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
}
for (let i=0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
}
if (computerScore > humanScore) {
    console.log(`You lose ${computerScore} to ${humanScore}!`)
} else if (humanScore > computerScore) {
    console.log(`You win ${humanScore} to ${computerScore}!`)
} else if (humanScore == computerScore) {
    console.log(`You tied ${humanScore} to ${computerScore}!`)
}

}

playGame();