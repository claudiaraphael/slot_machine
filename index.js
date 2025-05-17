// Slot Machine project to learn JavaScript
// I do not support gambling

// Notes:
// npm i prompt--sync to collect user input

// Slot Machine Game
// how much money does the user have?
// On how many lines does the user want to bet?
// how much money does the user want to bet?
// spin the slot machine
// check if the user won or lost
// if the user won, add the winnings to their balance
// if the user lost, subtract the bet from their balance
// play again?

const prompt = require('prompt-sync')(); // import prompt sync to the program
 

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDeposit = parseFloat(depositAmount); // converts str to float

        if (isNaN(numberDeposit) || numberDeposit <= 0) {
             console.log("Invalid deposit amount, try again");
        } else {
            return numberDeposit;
        }   
    }
}
   
const depositAmount = deposit(); 
console.log('You have deposited: $' + depositAmount)



// win: when you match 3 symbols in a row
// You can win on all 3 rows

    