const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// Variables
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));



app.get('/getFileNames', (req, res) => {
	let items = fs.readdirSync(path.join(__dirname, "public"));
	
	let fileArray = [];
	items.forEach(item => {
		let itemPath = path.join(__dirname, 'public', item);

		if (fs.existsSync(itemPath) && fs.lstatSync(itemPath).isDirectory()) fileArray.push(item);
	});
	console.log(fileArray);

	res.set('Content-type', "application/json");
	res.status(200).send(fileArray);
});

app.listen(port, (req, res) => console.log(`You are on PORT ${port}`));