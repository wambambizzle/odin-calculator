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
    // TODO: remove to its own function?
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

function setCalculatorOperatorsListener() {
  calculatorOperators.childNodes.forEach((button) => {
    button.addEventListener("click", () => {
      // TODO: add a check to make sure firstNumber has a value first before assigning
      // TOOD: handle selecting the same operand before hitting another number
      // both dupes and new ones?
      // handle the = logic

      operator = button.textContent;

      console.log(
        `#### operator assigned: ${operator}, text conetext: ${button.textContent}`
      );
    });
  });
}

function setEqualsPressedListener() {
  equalsButton.addEventListener("click", () => {
    console.log(`#### equals pressed`);
    // TODO: add checks to make sure theres values firste
  });
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
}
