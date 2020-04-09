import createFooter from "../CommonFiles/common-script.js";

createFooter();


const gameTable = document.querySelector("#board");
const restartBtn = document.querySelector("#restartBtn");
const textDiv = document.querySelector(".text");

var cells = [];
var cellValue = [null, null, null, null, null, null, null, null, null];
var turn = 'X';
var win = false;

// Add cells to the list
for (var i = 1; i <= 9; i++) {
	cells.push(document.querySelector(`#c${i}`));
}

cells.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		if (!win) {
			//console.log(e.target);
			e.target.innerText = turn;
			cellValue[Number(e.target.id[1]) - 1] = turn;
			//console.log(cellValue);
			nextTurn();
			checkWin();
			checkDraw();
		}
	});
});

function nextTurn() {
	if (turn === 'X') {
		turn = 'O';
	} else if (turn === 'O') {
		turn = 'X';
	}
}

function checkWin() {
	// There are 8 possible combos

	checkCells(cellValue[0], cellValue[1], cellValue[2]); // Cells 1, 2, 3
	checkCells(cellValue[3], cellValue[4], cellValue[5]); // Cells 4, 5, 6
	checkCells(cellValue[6], cellValue[7], cellValue[8]); // Cells 7, 8, 9
	checkCells(cellValue[0], cellValue[3], cellValue[6]); // Cells 1, 4, 7
	checkCells(cellValue[1], cellValue[4], cellValue[7]); // Cells 2, 5, 8
	checkCells(cellValue[2], cellValue[5], cellValue[8]); // Cells 3, 6, 9
	checkCells(cellValue[0], cellValue[4], cellValue[8]); // Cells 1, 5, 9
	checkCells(cellValue[2], cellValue[4], cellValue[6]); // Cells 3, 5, 7
}

function checkCells(cell1, cell2, cell3) {
	if (cell1 === cell2 && cell2 === cell3 && cell2 != null) {
		//console.log('Won!');
		win = true;
		showText(cell2);
	}
}

function checkDraw() {
	let draw = true;

	cellValue.forEach((el, index) => {
		if (el == null) {
			draw = false;
		}
	});

	if (draw && !win) {
		//console.log("Draw!");
		showText();
	}
}

restartBtn.addEventListener('click', (e) => {
	cells.forEach((el, index) => {
		el.innerText = '';
	});
	cellValue = [null, null, null, null, null, null, null, null, null];
	win = false;
	turn = "X";
	textDiv.innerText = '';
});

function showText(winner) {
	if (winner != undefined) {
		textDiv.innerText = `${winner} Won!`;
	} else {
		textDiv.innerText = "Match Draw!";
	}
}