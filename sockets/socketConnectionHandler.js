const registerUserConnection = require('./registerUserConnection');

const socketConnectionHandler = (io) => {
	io.on('connection', (socket) => {

		socket.on('disconnect', () => {});
	});
}

module.exports = socketConnectionHandler;