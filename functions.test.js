import { 
    capitalize, 
    reversString, 
    calculator, 
    caesarCipher,
    analyzeArray 
} from './functions'

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

describe('caesarCipher', () => {
    test('return text in cipher', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    }),
    test('return cipher with original lettercase', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    }),
    test('return cipher with punctuations, spaces, and other non-alphabetical characters unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
})

describe('analyzeArray', () => {
    test('return an object with the following properties from an array of number', () => {
        expect(analyzeArray([1, 2, 3])).toBeInstanceOf(Object);
    }),
    test('return an object with the following properties from an array of number', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toBeInstanceOf(Object);
    })
})