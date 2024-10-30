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

export function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, char => {
        const baseCode = char === char.toUpperCase() ? 65 : 97; // 'A' is 65, 'a' is 97 in ASCII
        return String.fromCharCode(((char.charCodeAt(0) - baseCode + shift) % 26) + baseCode);
    });
}

export function analyzeArray(arr) {
    if (arr.length === 0) return null;

    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    };
}