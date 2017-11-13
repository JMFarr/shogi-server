const generateUniqueId = require('./registerUserConnection').generateUniqueId;

test('generateUniqueId generates different ids', () => {
	const id1 = generateUniqueId();
	const id2 = generateUniqueId();
	
	expect(id1).not.toBe(id2);
})

