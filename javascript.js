// Holder Vars

let firstNumber = "";
let secondNumber = "";
let operator = "";

// DOM Vars

const display = document.querySelector(".calculator-display");
const calculatorNumbers = document.querySelector(".calculator-numbers");
const calculatorOperators = document.querySelector(".calculator-operators");
const equalsButton = document.querySelector(".operate-calculator");
const clearButton = document.querySelector(".clear-button");
const decimalButton = document.querySelector(".decimal-button");

// Math Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return roundToTwo(add(num1, num2));
    case "-":
      return roundToTwo(subtract(num1, num2));
    case ("*", "x"):
      return roundToTwo(multiply(num1, num2));
    case "/":
      return roundToTwo(divide(num1, num2));
    default:
      break;
  }
}

// Stack Overflow - mdn - https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// Event Listeners

function setCalculatorNumbersListeners() {
  calculatorNumbers.childNodes.forEach((button) => {
    // TODO: remove to its own function?
    button.addEventListener("click", () => {
      if (display.textContent === "0" && operator === "") {
        display.textContent = button.textContent;
        firstNumber = display.textContent;
      } else if (display.textContent.length > 0 && operator === "") {
        display.textContent += button.textContent;
        firstNumber = display.textContent;
        disableDecimal();
      } else if (operator.length > 0) {
        if (secondNumber.length === 0) {
          display.textContent = button.textContent;
          secondNumber = display.textContent;
        } else {
          display.textContent += button.textContent;
          secondNumber = display.textContent;
        }
        disableDecimal();
      }
    });
  });
}

function setClearButtonListener() {
  clearButton.addEventListener("click", clearAll);
}

function setCalculatorOperatorsListener() {
  calculatorOperators.childNodes.forEach((button) => {
    button.addEventListener("click", () => {
      // TODO: add a check to make sure firstNumber has a value first before assigning
      // TODO: handle selecting the same operand before hitting another number
      // both dupes and new ones?

      if (operator === "") {
        operator = button.textContent;
      } else if (firstNumber.length > 0 && secondNumber.length > 0) {
        equalsPressed();
        operator = button.textContent;
      } else {
        operator = button.textContent;
        equalsPressed();
      }

      enableDecimal();
    });
  });
}

function setEqualsPressedListener() {
  equalsButton.addEventListener("click", equalsPressed);
}

setCalculatorNumbersListeners();
setClearButtonListener();
setCalculatorOperatorsListener();
setEqualsPressedListener();

// Calculator Functions

function clearAll() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  enableDecimal();
}

function equalsPressed() {
  if (firstNumber.length === 0) {
    return;
  }

  if (secondNumber.length === 0) {
    return;
  }

  if (operator.length === 0) {
    return;
  }

  let value = operate(operator, Number(firstNumber), Number(secondNumber));
  display.textContent = value;
  firstNumber = value;
  secondNumber = "";
}

// Helper Methods

function disableDecimal() {
  if (display.textContent.includes(".")) {
    decimalButton.disabled = true;
  }
}

function enableDecimal() {
  decimalButton.disabled = false;
}
