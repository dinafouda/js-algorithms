const reverseString = require('./reverseString')

test('reverseString is a function', () => {
	expect(typeof reverseString).toEqual('function')
})

test('reverses string of text', () => {
	expect(reverseString('hello')).toEqual('olleh')
})

test('reverses string of a number', () => {
	expect(reverseString('he123llo')).toEqual('oll321eh')
})

test('reverses string of numbers and special character', () => {
	expect(reverseString('he123ll@#$*o')).toEqual('o*$#@ll321eh')
})
