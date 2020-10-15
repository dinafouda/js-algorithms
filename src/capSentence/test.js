// if it is a function
// working correctly
// have capital characters
// all capital

import capSentence from './capSentence';

test('capSentence is a function', () => {
	expect(typeof capSentence).toEqual('function');
})
test('capitalizes the first letter of each word in a lowercase sentence', () => {
	expect(capSentence('this is so much fun!')).toEqual('This Is So Much Fun!')
})
test('capitalizes the first letter of each word in an uppercase sentence', () => {
	expect(capSentence('THIS IS SO MUCH FUN!')).toEqual('This Is So Much Fun!')
})
test('capitalizes the first letter of each word in mixed sentence', () => {
	expect(capSentence('ThiS iS sO muCH fuN!')).toEqual('This Is So Much Fun!')
})
