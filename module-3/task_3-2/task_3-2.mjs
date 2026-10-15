"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let ascendingNumbers = "";
let descendingNumbers = "";

for (let up = 1, down = 10; up <= 10; up++, down--) {
    ascendingNumbers += up;
    descendingNumbers += down;

    if (up < 10) {
        ascendingNumbers += ",";
        descendingNumbers += ",";
    }
}

printOut(ascendingNumbers);
printOut(descendingNumbers);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let secretNumber = 33;
let guessedNumber = 0;

while (guessedNumber !== secretNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

printOut("Tallet er " + guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let target = 465435;
let guess = 0;
let tries = 0;
let start = Date.now();

while (guess !== target) {
    guess = Math.floor(Math.random() * 1000000)+1;
    tries++;
}

printOut("Tallet er " + guess);
printOut("Datamaskinen brukte " + tries + " runder");
printOut("Og det tok " + (Date.now() - start) + " millisek.");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let primeNumbers = "";

for (let number = 2; number < 200; number++) {
    let divisor = 2;

    while (number % divisor !== 0) {
        divisor++;
    }

    if (divisor === number) {
        primeNumbers += number + " ";
    }
}

printOut(primeNumbers);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let column = 1; column <= 9; column++) {
        line += "K" + column + "R" + row + " ";
    }
    
    printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
for ( let student = 1; student <= 5; student++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percent = (points / 236) * 100;
    let grade = "";


    if (percent >= 89) {
        grade = "A";
    } else if (percent >= 77) {
        grade = "B";
    } else if (percent >= 65) {
        grade = "C";
    } else if (percent >= 53) {
        grade = "D";
    } else if (percent >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Kandidat " + student + " fikk " + points + " poeng, som er " + percent.toFixed(2) + "% og gir karakteren " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function countFace(text, face) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === face) {
      count++;
    }
  }
  return count;
}

let foundStraight = false;
let foundPairs = false;
let foundTower = false;
let foundYahtzee = false;
let throwsCount = 0;

do {
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const d4 = Math.floor(Math.random() * 6) + 1;
  const d5 = Math.floor(Math.random() * 6) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;
  const dice = "" + d1 + d2 + d3 + d4 + d5 + d6;
  throwsCount++;

  const c1 = countFace(dice, "1");
  const c2 = countFace(dice, "2");
  const c3 = countFace(dice, "3");
  const c4 = countFace(dice, "4");
  const c5 = countFace(dice, "5");
  const c6 = countFace(dice, "6");
  const counts = "" + c1 + c2 + c3 + c4 + c5 + c6;

  if (!foundStraight && counts === "111111") {
    foundStraight = true;
    printOut(dice + " Full straight på " + throwsCount + " kast!");
  }

  if (!foundPairs && countFace(counts, "2") === 3) {
    foundPairs = true;
    printOut(dice + " 3 par på " + throwsCount + " kast!");
  }

  if (!foundTower && countFace(counts, "4") === 1 && countFace(counts, "2") === 1) {
    foundTower = true;
    printOut(dice + " Tårn på " + throwsCount + " kast!");
  }

  if (!foundYahtzee && countFace(counts, "6") === 1) {
    foundYahtzee = true;
    printOut(dice + " Yahtzee på " + throwsCount + " kast!");
  }

} while (!foundStraight || !foundPairs || !foundTower || !foundYahtzee);

printOut(newLine);

