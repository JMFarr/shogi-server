const server = require('./server');

test('a test', () => {
	const mockDepenecyInjection = jest.fn();
	server(mockDepenecyInjection);
	expect(mockDepenecyInjection.mock.calls.length).toBe(2);
});
