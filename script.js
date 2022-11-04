// assigning events one by one
const resultDisplay = document.querySelector("#result-display");
const workingDisplay = document.querySelector("#working-display");
const clearButton = document.querySelector("#clear-btn");
const backSpaceButton = document.querySelector("#backspace-btn");

// EVENT DELEGATION PATTERN
const keys = document.querySelector(".buttons-bottom");

// assigning event handle to parent element
let numbersRegex = /[0-9\.]/g // matches numbers 0-9 and .
let operatorsRegex = //g
let string = " +++ --x ==x -+- 12312 444 This is a test string...123456 9870"
let replaceString = string.replace(operatorsRegex, "[");

keys.addEventListener("click", (event) => {
  if(event.target.tagName.toLowerCase() === 'button') {
    console.log(event.target.innerHTML);
  }
});



// DEFINING OPERATION FUNCTIONS

function operate (a,b,mode) {
  if (mode === "add") {
    return add(a,b);

  } else if (mode === "subtract") {
    return subtract(a,b);

  } else if (mode === "multiply") {
    return multiply(a,b);

  } else if (mode === "divide") {
    return divide(a,b);
  }

}

function add (...arguments) {
  console.log(arguments);
  let total = arguments.reduce((a,b) => a + b);
  return total;
}

function subtract (...arguments) {
  console.log(arguments);
  let total = arguments.reduce((a,b) => a - b);
  return total;
}

function multiply (...arguments) {
  console.log(arguments);
  let total = arguments.reduce((a,b) => a * b);
  return total;
}

function divide (...arguments) {
  console.log(arguments);
  let total = arguments.reduce((a,b) => a / b);
  return total;
}

