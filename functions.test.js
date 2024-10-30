import { capitalize, reversString } from './functions'

describe('capitalize', () => {
    test('return string with first character capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
        expect(capitalize('poro')).toBe('Poro');
        }
    )},
    test('return sentence with first letter capitalized', () => {
        expect(capitalize('i need to write tests')).toBe('I need to write tests');
    }),
    test('throw an error if invalid input', () => {
        expect(() => capitalize(null)).toThrow();
        expect(() => capitalize(0)).toThrow();
        expect(() => capitalize()).toThrow();
    })
)

describe('reverseString', () => {
    test('reverse given string', () => {
        expect(reversString('dog')).toBe('god');
        expect(reversString('cat')).toBe('tac');
        expect(reversString('string')).toBe('gnirts');
    }),
    test('reverse given sentence', () => {
        expect(reversString('dog bark')).toBe('krab god');
        expect(reversString('cat sat')).toBe('tas tac');
        expect(reversString('string reverse')).toBe('esrever gnirts');
    }),
    test('throw an error if invalid input', () => {
        expect(() => capitalize(null)).toThrow();
        expect(() => capitalize(0)).toThrow();
        expect(() => capitalize()).toThrow();
    })
})