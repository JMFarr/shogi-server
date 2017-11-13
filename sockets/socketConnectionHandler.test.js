const socketConnectionHandler = require('./socketConnectionHandler').socketConnectionHandler;

const makeSocketObject = () => {
	const eventsHandled = [];
	let childSocketObject = null;

	return {
		getEventsHandled: () => eventsHandled,
		getChildSocketObject: () => childSocketObject,
		on: (eventName, callback) => {
			eventsHandled.push(eventName);
			if(arguments.length > 1) {
				childSocketObject = makeSocketObject();
				callback(childSocketObject);
			}
		}
	}
}


test('has a connection event', () => {
	
	const topSocketObject = makeSocketObject();	
	
	socketConnectionHandler(topSocketObject);

	expect(topSocketObject.getEventsHandled().indexOf("connection")).toBeGreaterThan(-1);
});


test('has a disconnect event', () => {
	const topSocketObject = makeSocketObject();

	socketConnectionHandler(topSocketObject);

	expect(
		topSocketObject
		.getChildSocketObject()
		.getEventsHandled()
		.indexOf("disconnect")
	)
	.toBeGreaterThan(-1);
});
