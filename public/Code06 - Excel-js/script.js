import createFooter from "../CommonFiles/common-script.js";

createFooter();

const mainTable = document.querySelector("#mainTable");
const tableHeadings = document.querySelector("#headings");

const  exportBtn = document.querySelector("#exportFile");

let tableData = {
	meta: {},
	cellData: {}
};


function gridGenerator(height, width) {
	let headerHTML = '<td id="ghost"></td>';
	let mainBodyHTML = '';

	// forHeaders
	for (var i = 1; i <= width; i++) {
		headerHTML += `<td id="col${i}">${i}</td>`;
	}

	// for Main Body
	for (var h = 1; h <= height; h++) {

		mainBodyHTML += `<tr id=row${h}><td class="headers">${h}</td>`;

		for (var w = 1; w <= width; w++) {
			mainBodyHTML += `<td><input type="text" size="10" class="tableInput" id="r${h}c${w}"></td>`
		}
		mainBodyHTML += `</tr>`;
	}

	tableHeadings.innerHTML = headerHTML;
	mainTable.innerHTML = mainBodyHTML;
}


function exportFile() {
	for(let i = 1; i <= tableData.meta.height; i++) {
		let listName = `row${i}`;
		let dataList = [];
		//console.log(rowName);
		for (var w = 1; w <= tableData.meta.width; w++) {
			dataList.push(document.querySelector(`#r${i}c${w}`).value);
		}
		tableData.cellData[listName] = dataList;
	}
	console.log(tableData);
}


// Event Listeners
exportBtn.addEventListener('click', e => {
	exportFile();
});


// When created 
let tableDim =[4, 4]; //prompt("Enter Table Dimensions(height, width):").split(",");

if (Number(tableDim[0]) != "number") {
	tableData.meta.height = 4;
	tableData.meta.width = 4;
} else {
	tableData.meta.height = Number(tableDim[0]);
	tableData.meta.width = Number(tableDim[1]);
}

gridGenerator(tableData.meta.height, tableData.meta.width);

