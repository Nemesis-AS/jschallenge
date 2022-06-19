import createFooter from "../CommonFiles/common-script.js";

createFooter();

/*
@todo Add another page to view card and pass card ID using URL
*/

const pokeInfoTable = document.querySelector(".pokeInfoTable");
const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");

var pokeData;
var pagination = {};

function getPokeInfo(url) {
	fetch(url).then(response => {
		return response.json();
	}).then(obj => {
		pokeData = obj.results;
		pagination.next = obj.next;
		pagination.prev = obj.previous;
		pagination.count = obj.count;
		//console.log(pokeData);
		checkButtons();

		let table = '';

		pokeData.forEach((el, index) => {
			let pokeURL = ''
			for (var i = 34; i <= el.url.length-2; i++) {
				pokeURL += `${el.url[i]}`;
			}
			pokeURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeURL}.png`;
			
			table += `<tr><td class="transform"> ${el.name} </td><td><img src="${pokeURL}" alt="${el.name}"></td><td> <a href=${el.url}><button class="url-btn">View Info</button></a> </td></tr>`;
			// src=${pokeURL}
		});
		
		pokeInfoTable.innerHTML = table;
	});
}

function checkButtons() {
	if (!pagination.next) {
		nextBtn.classList.add('disabled');
	} else {
		nextBtn.classList.remove('disabled');
	}

	if (!pagination.prev) {
		prevBtn.classList.add('disabled');
	} else {
		prevBtn.classList.remove('disabled');
	}
}


prevBtn.addEventListener('click', e => {
	e.preventDefault();
	if (pagination.prev) {
		getPokeInfo(pagination.prev);
	}
});

nextBtn.addEventListener('click', e => {
	e.preventDefault();
	if (pagination.next) {
		getPokeInfo(pagination.next);
	}
});

getPokeInfo("data page1.json");