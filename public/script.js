const folderList = document.querySelector('#folderList');

var folderArray = [];


fetch('/getFileNames').then((response) => {
	return response.json();
}).then((obj) => {
	correctArray(obj);
});

function correctArray(array) {
	for(var i = 0; i <= (array.length - 6); i++) {
		folderArray.push(array[i]);
	}
	addList();
}

function addList() {
	let toBeAdded = '';

	for(item in folderArray) {
		toBeAdded += `<li><a href="${folderArray[item]}/index.html">${folderArray[item]}</li>`;
	}

	folderList.innerHTML = toBeAdded;
}