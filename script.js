let firstInput = ""
let secondInput = ""

console.log(firstInput);
const resultDisplay = document.querySelector("#result-display");
const workingDisplay = document.querySelector("#working-display");
const clearButton = document.querySelector("#clear-btn");
const backSpaceButton = document.querySelector("#backspace-btn");

// EVENT DELEGATION
const keys = document.querySelector(".buttons-bottom");

// CHANGING CALCULATOR DISPLAY  
let numbersRegex = /[0-9\.]/
let periodRegex = /\./
let operatorsRegex = /[\+÷\-x]/

keys.addEventListener("click", (event) => {
  let input = event.target;
  if (periodRegex.test(workingDisplay.textContent) === true && input.innerHTML === "." ) { // if display already has a decimal
    return; 

  } else if (input.nodeName.toLowerCase() === 'button' && numbersRegex.test(input.innerHTML) === true) { // if key is a number
    workingDisplay.textContent += input.innerHTML;

  } else if (input.nodeName.toLowerCase() === 'button' && operatorsRegex.test(input.innerHTML) === true) { // if key is an operator 
    let firstInput = workingDisplay.textContent;
    let currentMode = input.innerHTML;
    console.log(firstInput);
    console.log(currentMode);
    clearScreen()
    resultDisplay.textContent = `${firstInput} ` + `${currentMode}`
  }
});

// DISPLAY FUNCTIONS
function clearScreen() {
  workingDisplay.textContent = ""
  // resultDisplay.textContent = ""
}

// OPERATOR FUNCTIONS
function operate (input) {
  let firstInput = workingDisplay.textContent;
  let currentMode = input.innerHTML;
}

function calculate (firstInput,secondInput,currentMode) {
  switch(currentMode) {
    case "+":
      return add(firstInput,secondInput);
    case "-":
      return subtract(firstInput,secondInput);
    case "x":
      return multiply(firstInput,secondInput);
    case "÷":
      return divide(firstInput,secondInput);
  }
}

function add (firstInput,secondInput) {
  let total = parseFloat(firstInput) + parseFloat(secondInput);
  return total;
}

function subtract (firstInput,secondInput) {
  let total = parseFloat(firstInput) - parseFloat(secondInput);
  return total;
}

function multiply (firstInput,secondInput) {
  let total = parseFloat(firstInput) * parseFloat(secondInput);
  return total;
}

function divide (firstInput,secondInput) {
  let total = parseFloat(firstInput) / parseFloat(secondInput);
  return total;
}
