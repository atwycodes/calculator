let firstInput = "";
let secondInput = "";
let currentOperationMode = "";
let toClearDisplay = false;

const resultDisplay = document.querySelector("#result-display");
const workingDisplay = document.querySelector("#working-display");
const clearButton = document.querySelector("#clear-btn");
const backSpaceButton = document.querySelector("#backspace-btn");
const decimalButton = document.querySelector("#decimal-btn");
const equalsButton = document.querySelector("#equals-btn");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

// ADDING EVENT LISTENERS
clearButton.addEventListener("click", () => clear());
backSpaceButton.addEventListener("click", () => backspace (workingDisplay.textContent));
decimalButton.addEventListener("click", () => appendDecimal (decimalButton.textContent));
equalsButton.addEventListener("click", () => console.log(evaluate()));

numberButtons.forEach((button) =>
button.addEventListener("click", () => appendNumber (button.textContent))
);

operatorButtons.forEach((button) => 
  button.addEventListener("click", () => setOperatorMode (button))
)

// DISPLAY FUNCTIONS
function backspace (string) {
  workingDisplay.textContent =  string.substring(0,string.length-1);
}

function appendNumber (number) {
  if (toClearDisplay === true) {
    resetScreen();
  }
  workingDisplay.textContent += number
}

function appendDecimal (number) {
  if (workingDisplay.textContent.includes(".")) {
    return
  } else if (toClearDisplay === true) {
    resetScreen();
  }
  workingDisplay.textContent += number
}

function clear() {
  workingDisplay.textContent = "";
  resultDisplay.textContent = "";
  firstInput = "";
  secondInput = "";
  currentOperationMode = "";
  toClearDisplay = false;
}

function resetScreen () {
  workingDisplay.textContent = "";
  toClearDisplay = false;
}

// OPERATOR FUNCTIONS
function setOperatorMode (button) {
  if (workingDisplay.textContent) {
    evaluate();
    toClearDisplay = true;
    currentOperationMode = button.textContent;
    firstInput = workingDisplay.textContent;
    resultDisplay.textContent = `${firstInput} ` + `${currentOperationMode}`;
    // need to input new text for secondinput
  }
}

function evaluate () { 
  if (currentOperationMode === "" || toClearDisplay === true) {
    return
  } else if (currentOperationMode === "÷" && workingDisplay.textContent === "0") {
    alert ("You cannot divide a number by 0!");
    return
  } else {
    secondInput = workingDisplay.textContent;
    resultDisplay.textContent = `${firstInput} ` + `${currentOperationMode} ` + `${secondInput}` ;
    workingDisplay.textContent = operate(firstInput,secondInput,currentOperationMode);
    currentOperationMode = ""
    toClearDisplay = true;
  }
}

function operate (firstInput,secondInput,currentOperationMode) {
firstInput = Number(firstInput);
secondInput = Number(secondInput);  

  switch(currentOperationMode) {
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
  return firstInput + secondInput;
}

function subtract (firstInput,secondInput) {
  return firstInput - secondInput;
}

function multiply (firstInput,secondInput) {
  return firstInput * secondInput;
}

function divide (firstInput,secondInput) {
  return firstInput / secondInput;
}