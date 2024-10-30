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