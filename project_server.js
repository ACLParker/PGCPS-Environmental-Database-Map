// import express JS module into app and creates its variable. 
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./"));

// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
 
// API to update the local database with Google data
app.get('/updateDatabase', (req, res) => {
	console.log("updateDatabaseAndGetData called") 
	
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script and arguments for the script
	var spawn = require("child_process").spawnSync;
    var process = spawn('python' ,["./update_database.py"]);
    res.send(JSON.parse(process.stdout.toString()));
});

//API to get data from database and return it in JSON format.
app.get('/getAllData', (req, res) => {
	console.log("getData called") 
	
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script and arguments for the script
	var spawn = require("child_process").spawnSync;
    var process = spawn('python' ,["./read_all_database.py"]);
    res.send(JSON.parse(process.stdout.toString()));
});

// This is in case someone tries to use a PUT command 
app.put("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// This is in case someone tries to use a POST command
app.post("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});
