export function capitalize (str) {
	if (typeof str !== 'string')
		throw new TypeError('Input must be a string!');
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export function reversString(str) {
    if (typeof str !== 'string')
		throw new TypeError('Input must be a string!');
    return str.split('').reverse().join('');
}

export const calculator = {
    add: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
			throw new TypeError('Inputs must be numbers!');
        return a + b;
    },
    subtract: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
			throw new TypeError('Inputs must be numbers!');
        return a - b;
    },
    multiply: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
			throw new TypeError('Inputs must be numbers!');
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        } else if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Inputs must be numbers!');
        }
        return a / b;
    }
};