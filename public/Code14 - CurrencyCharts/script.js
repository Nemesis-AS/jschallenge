import createFooter from "../CommonFiles/common-script.js";

createFooter();

function getRates(url) {
	fetch(url).then(response => {
		return response.json();
	}).then(obj => {
		console.log(obj);
	}).catch(err => {
		console.error(err);
	});
}

// Get Dates
let dateObj = {};
dateObj.now = new Date;

dateObj.date = dateObj.now.getDate();
dateObj.month = dateObj.now.getMonth();
dateObj.year = dateObj.now.getFullYear();
if (dateObj.month > 0) {
	dateObj.prevMonth = dateObj.month-1;
	dateObj.prevYear = dateObj.year;
} else {
	dateObj.prevMonth = 11;
	dateObj.prevYear = dateObj.year-1;
}
console.log(dateObj);

getRates(`https://api.exchangeratesapi.io/history?start_at=${dateObj.prevYear}-${dateObj.prevMonth}-${dateObj.date}&end_at=${dateObj.year}-${dateObj.month}-${dateObj.date}`);


function createChart() {
	var margin = {top: 10, right: 30, bottom: 30, left: 60},
    	width = 460 - margin.left - margin.right,
    	height = 400 - margin.top - margin.bottom;

    var svg = d3.select(".chart-box")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");
}