import createFooter from "../CommonFiles/common-script.js";

createFooter();


const textDiv = document.querySelector('.form-result');
const optionList = [
	{
		label: "JavaScript",
		value: 'JS'
	},
	{
	    label: "C++",
	    value: "CPP",
	},
	{
	    label: "C#",
	    value: "CS",
	},
	{
	    label: "Python",
	    value: "PY",
	},
	{
	    label: "Java",
	    value: "JV",
	},
	{
	    label: "Haxe",
	    value: "HX",
	},
	{
	    label: "Golang",
	    value: "GO",
	},
	{
	    label: "Julia",
	    value: "JL",
	},
]

var customIcon = document.createElement('img');
customIcon.src = './icon.svg';

var customIconMulti = new SelectPure(".multi-select-custom", {
options: optionList,
value: [],
multiple: true,
inlineIcon: customIcon,
onChange: value => { printValue(value) },
classNames: {
  select: "select-pure__select",
  dropdownShown: "select-pure__select--opened",
  multiselect: "select-pure__select--multiple",
  label: "select-pure__label",
  placeholder: "select-pure__placeholder",
  dropdown: "select-pure__options",
  option: "select-pure__option",
  autocompleteInput: "select-pure__autocomplete",
  selectedLabel: "select-pure__selected-label",
  selectedOption: "select-pure__option--selected",
  placeholderHidden: "select-pure__placeholder--hidden",
  optionHidden: "select-pure__option--hidden",
}
});

function printValue(value) {
	let valueList = [];
	for(var object in value) {
		for(var item in optionList) {
			if (optionList[item].value == value[object]) {
				valueList.push(optionList[item].label);
			}
		}
	}
	textDiv.innerText = `I know `+ valueList.join(', ') +'.';
}