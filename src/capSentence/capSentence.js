function capSentence(text) {
	let words = text.toLowerCase().split(' ');
	let capArray = [];

	// Using .forEach() Method (the fastest)
	words.forEach(word => {
		capArray.push(word[0].toUpperCase() + word.slice(1));
	});
	return capArray.join(' ')

	// using map and slice (fast)
	capArray = words.map(word => {
		return word[0].toUpperCase() + word.slice(1)
	})
	return capArray.join(' ')

	// using map and replace (slow)
	capArray = words.map(word => {
		return word.replace(word[0], word[0].toUpperCase());
	})
	return capArray.join(' ');

}

module.exports = capSentence;
