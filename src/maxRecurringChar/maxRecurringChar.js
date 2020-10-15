function maxRecurringChar(text) {
	const charMap = getCharMap(text);
	let maxCharValue = '';
	let maxChar = '';

	// For…in Iteration
	for (let char in charMap) {
		if (charMap[char] > maxCharValue) {
			maxCharValue = charMap[char]
			maxChar = char
		}
	}

	return maxChar

	// formating array with es6
	const keys = Object.keys(charMap)
	const values = Object.values(charMap)
	maxCharValue = Math.max(...values)
	return keys[values.indexOf(maxCharValue)]
}

function getCharMap(text) {
	let charMap = {}
	for (let char of text) {
		if (charMap.hasOwnProperty(char)) {
			charMap[char]++
		} else {
			charMap[char] = 1
		}
	}
	return charMap;
}

module.exports = maxRecurringChar;
