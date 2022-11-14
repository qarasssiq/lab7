"use strict"

var resultText = document.getElementById('result-text');
var operations = JSON.parse(sessionStorage.getItem("operations"));
var firstOperand = operations[operations.length - 1]['firstOperand'];
var secondOperand = operations[operations.length - 1]['secondOperand'];
var operation = operations[operations.length - 1]['operation'];
var result = operations[operations.length - 1]['result'];

resultText.innerText = `${firstOperand} ${operation} ${secondOperand} = ${result}`

var table = document.getElementById("table");

for (let i = 0; i < operations.length; i++) {
	let row = table.insertRow(i + 1);
	let firstOperandCell = row.insertCell(0);
	let secondOperandCell = row.insertCell(1);
	let operationCell = row.insertCell(2);
	let resultCell = row.insertCell(3);
	firstOperandCell.innerText = operations[i]['firstOperand'];
	secondOperandCell.innerText = operations[i]['operation'];
	operationCell.innerText = operations[i]['secondOperand'];
	resultCell.innerText = operations[i]['result'];
}

sessionStorage.setItem("operations", JSON.stringify(operations));
