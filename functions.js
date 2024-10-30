function capitalize(string) {
    if(typeof string !== 'string')
        throw new TypeError('Input must be a string!');
    return string[0].toUpperCase + string.slice(1);
};

module.exports = capitalize;