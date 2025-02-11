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
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
console.log(getComputerChoice());