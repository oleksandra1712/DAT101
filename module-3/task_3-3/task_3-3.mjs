"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printTodaysDate() {
  const today = new Date();

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const norwegianDate = today.toLocaleDateString("no-NB", dateOptions);
  printOut(norwegianDate);
  return norwegianDate;
}

printTodaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function getTodaysDate() {

  const today = new Date();
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"

  };
  printOut(today.toLocaleDateString("no-NB", dateOptions));
  return today;
}

function daysUntilRelease(fromDate) {
  const releaseDate = new Date(2025, 4, 14);
  const msPerDay = 1000 * 60 * 60 * 24;
  const difference = releaseDate - fromDate;
  return Math.ceil(difference / msPerDay);
}

const todaysDate = getTodaysDate();
const daysLeft = daysUntilRelease(todaysDate);

if (daysLeft > 0) {
  printOut("It is " + daysLeft + " days left until 2XKO launches!");
} else {
  printOut(" 2XKO launched " + Math.abs(daysLeft) + " days ago. Time to play!");
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

function printCircleInfo(radius) {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  printOut("Diameter is " + diameter);
  printOut("Circumference is " + circumference.toFixed(2));
  printOut("Areal is " + area.toFixed(2));
}

printCircleInfo(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

function printRectangleInfo(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;

  const perimeter = 2 * (width + height);
  const area = width * height;

  printOut("Rectangle width: " + width + ", height: " + height);
  printOut("Perimeter is " + perimeter.toFixed(2));
  printOut("Area is " + area.toFixed(2));
}

printRectangleInfo({ width: 4, height: 3 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function convertTemperature(temperature, type) {
  let celsius;

  if (type === "Celsius") {
    celsius = temperature;
  } else if (type === "Fahrenheit") {
    celsius = (temperature - 32) * 5 / 9;
  } else if (type === "Kelvin") {
    celsius = temperature - 273.15;
  }

  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  printOut("Convert " + temperature + " " + type);
  printOut("Celsius = " + Math.round(celsius));
  printOut("Fahrenheit = " + Math.round(fahrenheit));
  printOut("Kelvin = " + Math.round(kelvin));
  printOut(newLine);
}

convertTemperature(47, "Celsius");
convertTemperature(100, "Fahrenheit");
convertTemperature(300, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function getPriceWithoutVat(gross, vatGroup) {
  const group = vatGroup.toLowerCase();
  let vat;

  if (group === "normal") {
    vat = 25;
  } else if (group === "food") {
    vat = 15;
  } else if (group === "hotel") {
    vat = 10;
  } else if (group === "transport") {
    vat = 10;
  } else if (group === "cinema") {
    vat = 10;
  } else {
    printOut("Unknown VAT group!");
    return NaN;
  }

  return (100 * gross) / (vat + 100);
}

printOut("100 is " + getPriceWithoutVat(100, "Normal").toFixed(2) + " without tax");
printOut("150 is " + getPriceWithoutVat(150, "Food").toFixed(2) + " without tax");
printOut("50 is " + getPriceWithoutVat(50, "Cinema").toFixed(2) + " without tax");
getPriceWithoutVat(200, "goblins");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function calculateTravel(speed, distance, time) {
  let missing = 0;
  if (speed === undefined) missing++;
  if (distance === undefined) missing++;
  if (time === undefined) missing++;

  if (missing > 1) {
    return NaN;
  }

  if (speed === undefined) {
    return distance / time;
  }
  if (distance === undefined) {
    return speed * time;
  }
  if (time === undefined) {
    return distance / speed;
  }
}

printOut("Speed = 75 km/h");
printOut("Distance = 50 km");
printOut("Time = " + calculateTravel(75, 50).toFixed(2) + " h");
printOut(newLine);

printOut("Speed = 60 km/h");
printOut("Distance = 120 km");
printOut("Time = " + calculateTravel(60, 120).toFixed(2) + " h");
printOut(newLine);

printOut("Speed = 70 km/h");
printOut("Distance = " + calculateTravel(70, undefined, 1.5) + " km");
printOut("Time = 1.50 h");
printOut(newLine);

printOut("Speed = undefined km/h");
printOut("Distance = 50 km");
printOut("Time = " + calculateTravel(undefined, 50) + " h");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function padText(text, maxSize, character, insertBefore) {
  if (insertBefore) {
    return text.padStart(maxSize, character);
  } else {
    return text.padEnd(maxSize, character);
  }
}

printOut('"' + padText("This is a text", 40, " ", false) + '"');
printOut('"' + padText("This is a text", 40, " ", true) + '"');

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testExpression() {
  let number = 1;

  for (let line = 1; line <= 200; line++) {
    let leftSum = 0;
    let leftText = "";
    for (let i = 0; i < line + 1; i++) {
      leftSum = leftSum + number;
      leftText = leftText + number + " ";
      number++;
    }

    let rightSum = 0;
    let rightText = "";
    for (let i = 0; i < line; i++) {
      rightSum = rightSum + number;
      rightText = rightText + number + " ";
      number++;
    }

    if (leftSum !== rightSum) {
      printOut("Error on line " + line + ": " + leftSum + " is not equal to " + rightSum);
      return;
    }

    if (line <= 7) {
      printOut(leftText.padEnd(30, " ") + "=" + rightText.padStart(30, " "));
    }
  }

  printOut("Mathematics is fun!");
}

testExpression();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

printOut("factorial(9) is " + factorial(9));

printOut(newLine);
