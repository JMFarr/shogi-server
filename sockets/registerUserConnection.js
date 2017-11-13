const registerUserConnection = (socket) => {

}

function generateUniqueId() {
	return 'uid' + Date.now() + Math.random();
}

module.exports = {
	registerUserConnection,
	generateUniqueId
}