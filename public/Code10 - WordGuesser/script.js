import createFooter from "../CommonFiles/common-script.js";

createFooter();


// Missing Asuma Image -> "Asuma"
const wordsList = ["Tobirama", "Kakashi", "Naruto", "Sakura", "Sasuke", "Shikamaru", "Choji", "Ino", "Kurenai", "Hinata", "Kiba", "Shino", "Guy", "Neji", "Lee", "Tenten", "Itachi",  "Gaara", "Tsunade", "Minato", "Kushina", "Temari", "Jiraiya", "Shizune", "Karin", "Orochimaru", "Suigetsu", "Sai", "Konohamaru", "Yamato", "Iruka", "Obito", "Kabuto", "Rin", "Deidara", "Sasori", "Kisame", "Pain", "Hidan", "Kakuzu", "Zetsu", "Tobi", "Yahiko", "Konan", "Jugo", "Guren", "Yuukimaru", "Madara", "Hashirama"];
const alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const imageThumb = document.querySelector(".charThumb");
const blankDiv = document.querySelector(".blank-box");
const letterDiv = document.querySelector(".letter-box");
const restartBtn = document.querySelector(".restartBtn");
const deleteBtn = document.querySelector(".deleteBtn");
var buttonList;
var answerList = [""];

function getRandomWord() {
	let index = Math.floor(Math.random() * (wordsList.length - 1));
	answerList = [""];
	let wordUpper = wordsList[index];
	createBlanks(wordUpper.toLowerCase(), wordUpper);

	deleteBtn.classList.add("disabled");
}

function createBlanks(word, wordUpper) {
	let imageURL = `./images/${wordUpper}.jpg`;
	//console.log(imageURL);
	imageThumb.src = imageURL;
	let reqHTML = '';
	for (var i = 0; i <= word.length - 1; i++) {
		reqHTML += `<div id="b${i}" class="blank">_</div>`
	}
	blankDiv.innerHTML = reqHTML;
	createButtons(word);
}

function createButtons(word) {
	let buttonTextList = word.split("");

	while(buttonTextList.length <= 19) {
		let charIndex = Math.floor(Math.random()*25);
		buttonTextList.push(alphabetList[charIndex]);
	}
	buttonTextList.sort()
	console.log(word);
	// console.log(buttonTextList);

	let btnCode = '';
	for(var item in buttonTextList) {
		btnCode += `<button id='btn${item}' data-char=${buttonTextList[item]} class='char-btn'>${buttonTextList[item]}</button>`;
	}
	letterDiv.innerHTML = btnCode;

	buttonList = document.querySelectorAll(".char-btn");
	buttonList.forEach((el, index) => {
		el.addEventListener('click', (e) => {
			
			placeCharacter(e.target.dataset.char, word);
			e.target.classList.toggle("disabled");

		});
	});
}

function placeCharacter(char, word) {
	if (answerList.length <= word.length) {
		document.querySelector(`#b${answerList.length-1}`).innerText = char;
		answerList.push(char);

		deleteBtn.classList.remove("disabled");
		//console.log(answerList);

		checkAnswer(word);
	}
}

function checkAnswer(word) {
	if (answerList.join("") == word) {
		letterDiv.innerHTML = `<div class="win-dialog"><p>You Win!</p></div>`;
		deleteBtn.classList.add("disabled");
	}
}

function deleteChar() {
	let deletedChar = answerList.pop();
	let buttons = document.querySelectorAll("button");
	let done = false;

	document.querySelector(`#b${answerList.length-1}`).innerText = "_";

	console.log(answerList);
	
	buttons.forEach((el, index) => {
		if (el.dataset.char == deletedChar && el.classList[1] == "disabled" && !done) {
			el.classList.toggle("disabled");
			done = true;
		}
	});
}


restartBtn.addEventListener('click', (e) => {
	getRandomWord();
});

deleteBtn.addEventListener('click', (e) => {
	deleteChar();
});

getRandomWord();

/* TODO - 

1- Add images for characters to guess from!
2- Add delete button. - DONE
3- Add powerups.(Optional)

*/