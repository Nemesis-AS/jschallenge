import createFooter from "../CommonFiles/common-script.js";

createFooter();


const timerDiv = document.querySelector(".timerDiv");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

var startTime;
var elapsedTime = 0;
var started = false;
var needReset = false;


function formatTime(time) {
	let sec = 0, min = 0, hr = 0;

	hr = Math.floor(time/3600);
	let remTime = time - (hr*3600);
	min = Math.floor(remTime/60);
	sec = remTime - (min * 60);
	let timeString = `${String(hr).padStart(2, "0")}: ${String(min).padStart(2, "0")}: ${String(sec).padStart(2, "0")}`;

	return timeString;
}

function runTimer() {
	let currentTime = new Date();
	elapsedTime = Math.floor((currentTime.getTime() - startTime.getTime())/1000);
	let formattedTime = formatTime(elapsedTime);

	timerDiv.innerText = formattedTime;

	if (started) {
		setTimeout(runTimer, 1000);
	}	
}

startBtn.addEventListener('click', (e) => {
	startTime = new Date();
	started = true;
	needReset = false;
	runTimer();
});

stopBtn.addEventListener('click', (e) => {
	started = false;
	needReset = true;
});

resetBtn.addEventListener('click', (e) => {
	if (!started && needReset) {
		timerDiv.innerText = '00: 00: 00';
	}
});