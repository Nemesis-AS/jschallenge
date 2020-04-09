import createFooter from "../CommonFiles/common-script.js";

createFooter();

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

var meta = {
	width: canvas.width,
	height: canvas.height
}

function drawHands() {
	ctx.beginPath();
	ctx.moveTo(meta.width/2, meta.height/2);
	ctx.lineTo(150, 100);
	ctx.stroke();
}
