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
};

// numberBet > balance / lines means that the user cannot bet more than they have
// balance / lines means that for each line, the user can bet that much
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Place your bet: ");
        const numberBet = parseFloat(bet); // converts str to float
        if (isNaN(numberBet) || numberBet > balance / lines || numberBet <= 0) {
            console.log("Invalid bet amount, try again");
        } else {
            return numberBet;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines you want to bet on (1-3): ");
        const numberLines = parseInt(lines); // converts str to integer

        if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
            console.log("invalid number of lines, try again");
        } else {
            return numberLines;
        }
    }
}
// console exhibition:





console.log('You have deposited: $' + depositAmount)
console.log('You have chosen ' + numberLines + ' lines to bet on.')
console.log('You have chosen to bet $' + numberBet + ' on each line.')


// functions calling
const depositAmount = deposit();
const numberLines = getNumberOfLines();
const numberBet = getBet();
let balance = deposit();

// win: when you match 3 symbols in a row
// You can win on all 3 rows

    