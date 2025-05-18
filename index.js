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

// GLOBAL VARIABLES ARE IN CAPS
const ROWS = 3; // number of rows
const COLS = 3;

// how many of each symbol are in the machine
const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

// how much each symbol is worth
const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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

const spin = () => {
  const symbols = [];
  // loop through the SYMBOLS_COUNT object and push/append the symbols into the symbols array
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    // symbol is the key, count is the value
    console.log(symbol, count)
    // push the symbol into the symbols array count times
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []]; // each array represents a column inside the machine
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols]; // Copy the full symbol set for each column
    for (let i = 0; i <ROWS; i++) { // loop through the rows
        const randomIndex = Math.floor(Math.random() * reelSymbols.length); // get a random index
        const selectedSymbol = reelSymbols[randomIndex]; // get the symbol at the random index        
        reels[i].push(selectedSymbol); // push the symbol into the reels array
        reelSymbols.splice(randomIndex, 1); // remove the symbol from the reelSymbols array
    
    } 
  }
  return reels; // return the reels array
};


// functions calling
const reels = spin();
const depositAmount = deposit();
const numberLines = getNumberOfLines();
const numberBet = getBet();



// console exhibition:
console.log('You have deposited: $' + depositAmount)
console.log('You have chosen ' + numberLines + ' lines to bet on.')
console.log('You have chosen to bet $' + numberBet + ' on each line.')




let balance = deposit();

// win: when you match 3 symbols in a row
// You can win on all 3 rows

    