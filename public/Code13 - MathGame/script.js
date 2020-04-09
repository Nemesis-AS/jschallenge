import createFooter from "../CommonFiles/common-script.js";

createFooter();

const quesBox = document.querySelector(".ques-box");
const textBox = document.querySelector(".textBox");
const scoreBox = document.querySelector(".score-box");

const operations = ['+', '-', 'x', '/'];
var difficulty; // 0 - Easy, 1 - Medium, 3 - Hard
var score = 0;
var numbers = {};

function getOperation() {
	let index = Math.floor(Math.random() * 3);
	numbers.operation = operations[index];
	numbers.num1 = Math.floor(Math.random() * 10);
	numbers.num2 = Math.floor(Math.random() * 10);

	let expression = `${numbers.num1} ${numbers.operation} ${numbers.num2} = `;

	if (numbers.operation == '+') {

		numbers.answer = numbers.num1 + numbers.num2;

	} else if(numbers.operation == "-") {

		numbers.answer = numbers.num1 - numbers.num2;

	} else if(numbers.operation == "x") {

		numbers.answer = numbers.num1 * numbers.num2;

	} else if(numbers.operation == "-/") {

		numbers.answer = numbers.num1 / numbers.num2;

	}

	quesBox.innerText = expression;
}

function updateScore() {
	scoreBox.innerText = score;
}

textBox.addEventListener('input', e => {
	if (e.target.value == numbers.answer) {
		score += 1;
		e.target.value = '';
		updateScore();
		getOperation();
	}
});

getOperation();