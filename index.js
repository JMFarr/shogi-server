const express = require('express');
const app = express();

const SERVER_PORT = 3000;

const handleRequest = (req,res) => {
	res.send("Hello, world!");
}

app.get('/', handleRequest);

app.listen(SERVER_PORT, () => console.log("listening on port ", SERVER_PORT));