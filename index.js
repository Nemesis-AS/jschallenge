const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// Variables
const port = process.env.PORT || 3000;
var fileArray = [];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

fs.readdir('public', (err, file) => {
	fileArray = file;
});

app.get('/getFileNames', (req, res) => {
	res.set('Content-type', "application/json");
	res.send(fileArray);
});

app.listen(port, (req, res) => console.log(`You are on PORT ${port}`));