import { capitalize, reversString, calculator } from './functions'

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
        expect(() => reversString(null)).toThrow();
        expect(() => reversString(0)).toThrow();
        expect(() => reversString()).toThrow();
    })
})

describe('calculator', () => {
    test('return sum of two numbers', () => {
        expect(calculator.add(2, 2)).toBe(4);
    }),
    test('return subtraction of two numbers', () => {
        expect(calculator.subtract(10, 2)).toBe(8);
    }),
    test('return multiplication of two numbers', () => {
        expect(calculator.multiply(10, 2)).toBe(20);
    })
    test('return dividion of two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    }),
    test('throw an error if invalid input', () => {
        expect(() => calculator.add('cat', 'dog')).toThrow();
        expect(() => calculator.subtract('null', 12)).toThrow();
        expect(() => calculator.multiply('123', '!@#$')).toThrow();
        expect(() => calculator.divide('animal', undefined)).toThrow();
    })
})