function createFooter() {

	document.body.innerHTML += `<footer class=footer>Copyright&copy; 2020 by Nemesis&trade;</footer>`;
}

createFooter();


var step0 = [{
	requirements: "none",
	ques: "You wake up on a Beach and see a bottle in front of you!",
	options: ["Take the bottle", "leave the bottle"]
}];

var step1 = [
	{
		requirements: "none",
		ques: "You explore the island and find a merchant near you.",
		options: ["Ignore him"]
	}, {
		requirements: "bottle",
		ques: "You explore the island and find a merchant near you.",
		options: ["Give him the bottle", "Ignore him"]
	}
];

var storyLine = [step0, step1];

const quesDiv = document.querySelector(".quesBox");
const optionDiv = document.querySelector(".optionBox");
var buttons = document.querySelectorAll(".button");

var step = 0;
var selectedOption;

function addEventListeners() {
	buttons = document.querySelectorAll(".button");

	buttons.forEach((el, index) => {
		el.addEventListener('click', (e) => {
			selectedOption = e.target.id[3];
			nextStep();
		});
	});
}

function nextStep() {
	quesDiv.innerText = storyLine[step][0].ques;

	let buttonDivHtml = '';
	var options = storyLine[step][0].options;
	options.forEach((el, index) => {
		buttonDivHtml += `<button class="button" id="opt${index+1}">${el}</button>`;
	});

	optionDiv.innerHTML = buttonDivHtml;

	addEventListeners();

	step += 1;
}

function checkRequirements() {
	
}

nextStep();