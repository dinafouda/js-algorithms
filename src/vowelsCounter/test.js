// function is working correctly
// type of function
// return 0 if there is no vowels
// when input has capaitalize letters

import vowelsCounter from './vowelsCounter';

test('vowelsCounter is a function', () => {
	expect(typeof vowelsCounter).toEqual('function');
})

test('vowelsCounter returns the correct number of vowels', () => {
	expect(vowelsCounter('asdfqweri')).toEqual(3);
})

test('vowelsCounter returns the correct number with redundant vowels', () => {
	expect(vowelsCounter('dinafouda')).toEqual(5);
})

test('vowelsCounter returns 0 when there is no vowels', () => {
	expect(vowelsCounter('nhzxcv')).toEqual(0);
})

test('vowelsCounter returns the number of vowels when there is capaitalize letters', () => {
	expect(vowelsCounter('AsdfqwerI')).toEqual(3);
})
