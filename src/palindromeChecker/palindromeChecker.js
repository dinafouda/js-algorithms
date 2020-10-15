function palindromeChecker(text) {
	let reversedText = text.toLowerCase().split('').reverse().join('');
	return reversedText === text

	let charArray = text.toLowerCase().split('');
	let result = charArray.every((letter, index) => {
		return letter === charArray[charArray.length - index - 1]
	})
	return result;

	let textLength = text.length / 2
	for (let i = 0; i < textLength / 2; i++) {
		if (text[i] !== text[textLength - index - 1])
		{ return false; }
	}
	return true;

}

module.exports = palindromeChecker;
