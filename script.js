// This is just to test the js file is connected to the html file. 
console.log("Rock Paper Scissors!")
// Write a function to return "Rock," "Paper," or "Scissors"


function getComputerChoice() {
    // Create a variable to hold the function equation
    let randomNumber = Math.floor(Math.random() * 3);
    // Create conditional statement to produce string options
    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
console.log(getComputerChoice());