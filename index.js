const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const SERVER_PORT = 3030;

const handleRequest = (req,res) => {
	res.send("<h1>Hello, world!</h1>");
}

io.on('connection', (socket) => console.log('a user connected'));

app.get('/', handleRequest);

http.listen(SERVER_PORT, () => console.log("listening on port ", SERVER_PORT));