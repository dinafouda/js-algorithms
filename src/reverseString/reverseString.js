/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format.
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
	return [...text].reverse().join(''); //slower

	// using recursive way (slow)
	if (text === "") {
		return ""
	} else {
		return reverseString(text.substr(1)) + text[0]
	}

	// using for loop (good)
	let result = ""
	for (char in text) {
		result = result + char
	}
	return result

	// using reduce (fast)
	return [...text].reduce((acc, char) => acc + char, '')
}

// export default reverseString
module.exports = reverseString
