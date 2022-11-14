"use strict"

var operations = JSON.parse(sessionStorage.getItem("operations")) == null ? [] : JSON.parse(sessionStorage.getItem("operations"));
var operation = document.getElementById('operation');
var firstOperand = document.getElementById('first-operand');
var secondOperand = document.getElementById('second-operand');

function changeOperation(radio) {
	operation.innerText = radio.value;
}

function calculatorSubmit(event) {
	let regex = /^[a-zA-Z]+$/;
	let regexp = /^-?\d+(?:[\.\,]\d{1,2})?$/;
    if (firstOperand.value.match(regex) || secondOperand.value.match(regex) || !firstOperand.value.match(regexp) || !secondOperand.value.match(regexp)) {
		alert("Операнды должны иметь числовое значение!");
		return;
	}
	let result;
	switch(operation.innerText) {
		case '+':
			result = parseFloat(firstOperand.value) + parseFloat(secondOperand.value);
			break;
		case '-':
			result = parseFloat(firstOperand.value) - parseFloat(secondOperand.value);
			break;
		case '*':
			result = parseFloat(firstOperand.value) * parseFloat(secondOperand.value);
			break;
		case '/':
			if (secondOperand.value == 0) {
				alert("Деление на ноль!");
				return;
			} else {
				result = parseFloat(firstOperand.value) / parseFloat(secondOperand.value);
				break;
			}
	}
	operations.push({ 	firstOperand: parseFloat(firstOperand.value),
						operation: operation.innerText,
						secondOperand: parseFloat(secondOperand.value),
						result: parseFloat(result.toFixed(3)) });
	sessionStorage.setItem("operations", JSON.stringify(operations));
	window.location.href = "result.html";
	event.preventDefault();
}
  
const form = document.getElementById('calculator__form');
form.addEventListener('submit', calculatorSubmit);
