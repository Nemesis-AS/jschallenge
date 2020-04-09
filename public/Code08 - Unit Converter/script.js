import createFooter from "../CommonFiles/common-script.js";

createFooter();

const unitInputs = document.querySelectorAll(".unitInput");
const textInputs = document.querySelectorAll(".textInput");

const lengthList = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km' ];
const lengthValues = {
	mmTocm: 10
}

var className;

unitInputs.forEach((el, index) => {
	let optionList = '';
	lengthList.forEach((element, index2) => {
		optionList += `<option value="${element}">${element}</option>`;
	});
	el.innerHTML = optionList;

	el.addEventListener('change', e => {
		calculate();
	});
});

textInputs.forEach((el, index)=> {
	el.addEventListener('input', e => {
		calculate();
	});
});


function calculate() {
	let operation;
	let conValue = "1";
	if (lengthList.indexOf(unit1.value) > lengthList.indexOf(unit2.value)) {
		operation = "*";

	} else if (lengthList.indexOf(unit1.value) < lengthList.indexOf(unit2.value)) {
		operation = "/";
	} else if (lengthList.indexOf(unit1.value) == lengthList.indexOf(unit2.value)) {
		operation = "=";
	}

	let diff = Math.abs(lengthList.indexOf(unit1.value) - lengthList.indexOf(unit2.value));

	for (var i = 1; i <= diff; i++) {
		conValue += '0';
	}
	conValue = Number(conValue);
	// console.log(operation);
	// console.log(conValue);
	convert(operation, conValue, quan1.value);
}

function convert(operation, conValue, value) {

	let finalValue;

	if (value == 0) {
		value = 1;
	}

	if (operation == "/") {

		finalValue = value/conValue;

	} else if (operation == "*") {

		finalValue = value*conValue;

	} else if (operation == "=") {

		finalValue = value;

	}

	quan2.value = finalValue;
}