import createFooter from "../CommonFiles/common-script.js";

createFooter();


const body = document.querySelector('body');
const colorInput = document.querySelector("#color");
const colorTypeInput = document.querySelector("#colorTypeSelect");
const suBtn = document.querySelector("#suBtn");
const previewDiv = document.querySelector(".preview-color");

subBtn.addEventListener('click', (e) => {

	let colorFinal = '';

	if (colorTypeInput.value == 'hex') {

		colorFinal = `#${colorInput.value}`;

	} else if (colorTypeInput.value == 'name') {

		colorFinal = colorInput.value;

	}

	body.style.backgroundColor = colorFinal;
});

colorInput.addEventListener('input', (e) => {

	let colorFinal = '';

	if (colorTypeInput.value == 'hex') {

		colorFinal = `#${colorInput.value}`;

	} else if (colorTypeInput.value == 'name') {

		colorFinal = colorInput.value;

	}

	previewDiv.style.backgroundColor = colorFinal;
});