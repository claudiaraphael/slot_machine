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
        const linesValue = prompt("Enter the number of lines you want to bet on (1-3): ");
        const lines = parseInt(linesValue); // converts str to integer

        if (isNaN(lines) || lines <= 0 || lines > 3) {
            console.log("invalid number of lines, try again");
        } else {
            return lines;
        }
    }
}

// bet > balance / lines means that the user cannot bet more than they have
// balance / lines means that for each line, the user can bet that much
const getBet = (balance, lines) => {
    while (true) {
        const valuebet = prompt("Place your bet: ");
        const bet = parseFloat(valuebet); // converts str to float

        if (isNaN(bet) || bet > balance / lines || bet <= 0) {
            console.log("Invalid bet amount, try again");
        } else {
            return bet;
        }
    }
}

const spin = () => {
  const symbols = [];
  // loop through the SYMBOLS_COUNT object and push/append the symbols into the symbols array
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    // push the symbol into the symbols array count times
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    } 
  };

  const reels = []; // each array represents a column inside the machine
  for (let i = 0; i < COLS; i++) {
    reels.push([]); // push an empty array into the reels array
    const reelSymbols = [...symbols]; // copy the symbols array 
    for (let j = 0; j < ROWS; j++) {
        const randomIndex = Math.floor(Math.random() * reelSymbols.length); // get a random index
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1); // remove the selected symbol from the array copia
    }
  }
  return reels; // return the reels array
};

const transpose = (reels) => {
    const rows = [];

    for (let i= 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]); // push the symbol into the rows array
        }
    }
    return rows;
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";     //
        for (const [i, symbol] of row.entries()) { // loop through the rows array
            rowString += symbol; // add the symbol to the rowString
            if (i != rows.length - 1) {
                rowString += " | "; // add a pipe to the rowString
            }
        } console.log(rowString);
    } 
}


// win: when you match 3 symbols in a row
// You can win on all 3 rows

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row]; // get the symbols in the row
        let allSame = true; // check if all symbols are the same


        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false; // if the symbol is not the same as the first symbol, set allSame to false
                break; // exit the loop
            }

            if (allSame) {
                winnings += bet * SYMBOLS_VALUES[symbols[0]];
            }
        }
    } return winnings;
};



// functions calling
let balance = deposit();                   // Step 1: User deposits money
const lines = getNumberOfLines();         // Step 2: User chooses how many lines to bet on
const bet = getBet(balance, lines);       // Step 3: User chooses how much to bet per line
const reels = spin();                     // Step 4: Spin the slot machine
const rows = transpose(reels);            // Step 5: Convert columns to rows (for display)
printRows(rows);                          // Step 6: Show the result
const winnings = getWinnings(rows, bet, lines); // Step 7: Check for winnings
balance += winnings - (bet * lines);      // Step 8: Update the user's balance

// Step 9: Check if the user wants to play again





// console exhibition:
console.log('You have deposited: $' + balance)
console.log('You have chosen ' + lines + ' lines to bet on.')
console.log('You have chosen to bet $' + bet + ' on each line.')
console.log('You have won: $' + winnings)





    