"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Part1 = 2 + 3 * (2 - 4) * 6; 
printOut(" 2 + 3 * (2 - 4) * 6 = " + Part1);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let millimeters = (25*1000) + (34 * 10);
let millPrInch = 25.4;
let sumPart2 = millimeters / millPrInch;
printOut ("25 meters and 34 centimetrs = " + (Math.round(sumPart2 * 100) / 100));
printOut(newLine);

printOut("--- Part 3 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut("3 days, 12 hours, 14 minutes, and 45 seconds = " + part3Answer);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 6322.52 / (24 * 60);
const wholeDays = Math.floor(totaldays);

let remainder = totaldays - wholeDays;

const totalHours = remainder * 24;
const wholeHours = Math.floor(totalHours);

remainder = totalHours - wholeHours;

const totalMinutes = remainder * 60;
const wholeMinutes = Math.floor(totalMinutes);

remainder = totalMinutes - wholeMinutes;

const totalSeconds = remainder * 60;
const wholeSeconds = Math.floor(totalSeconds);

printOut("6322.52 minutes is:" + wholeDays + " days, " + wholeHours + " hours, " + wholeMinutes + " minutes, and " + wholeSeconds + " seconds.");   

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const amount = 54;
const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const nokAnswer = Math.round(amount * nokRate);
const usdAnswer = Math.round(nokAnswer * usdRate);

printOut(amount + " USD = " + nokAnswer + " NOK");
printOut(nokAnswer + " NOK = " + usdAnswer + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Det er mye mellom himmel og jord som vi ikke forstå.";
printOut("The text has " + text.length + " characters.");
printOut("The character at position 19 is: " + text.charAt(19));
printOut("The substring from 35 and 8 plase is: " + text.substring(35, 35 + 8));
printOut("The word \"jord\" starts at position: " + text.indexOf("jord"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5>3: " + (5>3));
printOut("7>=7: " + (7>=7));
printOut('"a" > "b": ' + ("a" > "b"));
printOut('"1" < "a": ' + ("1" < "a"));
printOut('"2500" < "abcd": ' + ("2500" < "abcd"));
printOut('"arne" !== "thomas": ' + ("arne" !== "thomas"));
printOut('2 === 5: ' + (2 === 5));
printOut ('("abcd"> "bcd") === false is ' + (("abcd"> "bcd") === false));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut('"254"= ' + Number("254"));
printOut('"57.23"= ' + parseFloat("57.23"));
printOut('"25 kroner"= ' + parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360);
printOut("Math.floor(Math.random() * 360) = " + r);
printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays10 = 131;
const weeks = Math.floor(totalDays10 / 7);
const days = totalDays10 % 7;

printOut(totalDays10 + " days is " + weeks + " weeks and " + days + " days.");

printOut(newLine);
