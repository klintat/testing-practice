const capitalize = require('./functions.js')

describe('capitalize', () => {
    test('return string with first character capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
        expect(capitalize('poro')).toBe('Poro');
        }
    )}
)