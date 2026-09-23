"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
const wakeupTime = 9;

printOut("Wake up time = " + wakeupTime );

if (wakeupTime === 7) {
    printOut("I can take the bus to school!");
} else if (wakeupTime === 8) {
    printOut("I can take the train to school!");
} else {
    printOut("I have to take the car to school!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
const numberValue = 2;
 printOut ("Number value = " + numberValue);
if (numberValue > 0) {
    printOut("The number is positive.");
} else if (numberValue < 0) {
    printOut("The number is negative.");
} else {
    printOut("The number is zero.");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Photo size = " + imageSize);
if(imageSize>=4){
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const imageSizePart7 = Math.floor(Math.random() * 8) + 1;

printOut("Photo size = " + imageSizePart7);
if(imageSizePart7 >= 6){
    printOut("The image is too large.");
} else if (imageSizePart7 >= 4){
    printOut("Thank you.");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month is " + monthName);

if (monthName.includes ("r")) {
    printOut("You must take Vitamin D.");
} else {
    printOut("You don't need to take Vitamin D.");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let daysInMonth;

if (monthName === "February") {
    daysInMonth = 28;
} else if (monthName === "April" || monthName === "June" || monthName === "September" || monthName === "November") {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

printOut("The month of " + monthName + " has " + daysInMonth + " days."

    )

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
if (monthName === "Mai" || monthName === "Mars") {
    printOut ( " The Art gallery is glosed for the month of " + monthName + ".")
} else if (monthName === "April") {
    printOut ( "The Art gallery is open temporary premises in the building next door in April. ") 
} else {
    printOut ( "The Art gallery is open for the month of " + monthName + ".")
}   


printOut(newLine);
