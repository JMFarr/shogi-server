const socketConnectionHandler = require('./socketConnectionHandler').socketConnectionHandler;

test('has a connection event', () => {
	const eventsHandled = [];
	const testIo = {		
		on: (eventName, callback) => {
			eventsHandled.push(eventName);			
		} 
	}

	socketConnectionHandler(testIo);

	expect(eventsHandled.indexOf("connection")).toBeGreaterThan(-1);
});

test('has a disconnect event', () => {
	const socketEventsHandled = [];
	const testSocket = {
		on: (eventName, callback) => {
			socketEventsHandled.push(eventName);
		}
	}
	const testIo = {		
		on: (eventName, callback) => {			
			callback(testSocket);
		} 
	}

	socketConnectionHandler(testIo);

	expect(socketEventsHandled.indexOf("disconnect")).toBeGreaterThan(-1);
})