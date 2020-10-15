/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter (text) {
	// iterative approach
	let counter = 0
	for (let ch of text.toLowerCase()) {
		if (['a', 'e', 'i', 'o', 'u'].includes(ch)) {
			counter++;
		}
	}
	return counter;

	// using regular expression
	return text.match(/[aeiou]/gi) || 0;
}

module.exports = vowelsCounter;
