import maxRecurringChar from './maxRecurringChar';

test('maxRecurringChar is a function', () => {
	expect(typeof maxRecurringChar).toEqual('function');
})
test('maxRecurringChar Finds the most frequently used character', () => {
	expect(maxRecurringChar('aabacada')).toEqual('a')
})
test('maxRecurringChar Finds the most frequently used character with mixed capitalization', () => {
	expect(maxRecurringChar('AabAcaAadA')).toEqual('A')
})
test('maxRecurringChar Finds the most frequently used number', () => {
	expect(maxRecurringChar('123412234')).toEqual('2')
})
