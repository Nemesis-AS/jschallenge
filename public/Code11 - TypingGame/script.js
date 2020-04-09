import createFooter from "../CommonFiles/common-script.js";

createFooter();

var words = "lorem ipsum dolor sit amet consectetur adipisicing elit alias ad accusantium nesciunt nam obcaecati neque est consequuntur magnam qui id nisi facere explicabo optio expedita dicta voluptatem officia adipisci minima";
const wordList = (words.split(' '));

const wordBox = document.querySelector(".word-box");
const inputBox = document.querySelector(".input-box");
const textBox = document.querySelector(".textBox");

var reqWords = [];
var otherData = {};


function showWords() {
	let wordBoxCode = '';
	reqWords = [];
	otherData.correctWords = 0;

	for (var i = 1; i <= 5; i++) {
		let index = Math.floor(Math.random() * (wordList.length-2));
		reqWords.push(wordList[index]);
		wordBoxCode += `<span id="w${i}">${wordList[index]}</span><br>`
	}
	wordBox.innerHTML = wordBoxCode;
}

textBox.addEventListener('input', e => {
	for(var item in reqWords) {
		if (reqWords[item] == e.target.value && document.querySelector(`#w${Number(item)+1}`).classList[0] != "correct") {
			document.querySelector(`#w${Number(item)+1}`).classList.add("correct");
			e.target.value = '';
			otherData.correctWords += 1;
			if (otherData.correctWords >= 5) {
				showWords();
			}
		}
	}
});



showWords();