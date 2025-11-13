// Holder Vars

let firstNumber = "";
let secondNumber = "";
let operator = "";

// DOM Vars

const display = document.querySelector(".calculator-display");
const calculatorNumbers = document.querySelector(".calculator-numbers");
const clearButton = document.querySelector(".clear-button");

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
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

// Event Listeners

function setCalculatorNumbersListeners() {
  calculatorNumbers.childNodes.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }

      firstNumber = display.textContent;
    });
  });
}

function setClearButtonListener() {
  clearButton.addEventListener("click", clearAll);
}

setCalculatorNumbersListeners();
setClearButtonListener();

// Calculator Functions

function clearAll() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
