
/*
null/underfined - valid>
zero
one
many
boundries
interfaces
exceptions/errors
simple
*/

const problems = require('./problem.js')

describe("testing for highAndLow", () => {
    test("throws exception when given undefined", () => {
        // declare variables 
        const input = undefined;
        const expectedOutput = "Undefined";

        // 
        const result = problems.highAndLow(input);

        // double check 
        expect(result).toEqual(expectedOutput); 
    })

    test("lowest should be 1, when given an string of '1'", () => {
        // declare variables 
        const input = "1";
        const expectedOutput = "1 1";

        // 
        const result = problems.highAndLow(input);

        // double check 
        expect(result).toEqual(expectedOutput); 
    })

    test("lowest should be 7, when given an string of '7'", () => {
        // declare variables 
        const input = "7";
        const expectedOutput = "7 7";

        // 
        const result = problems.highAndLow(input);

        // double check 
        expect(result).toEqual(expectedOutput); 
    })

    test("should return '7 1' given the input of '1,2,3,4,5,6,7'", () => {
        // declare variables 
        const input = "1234567";

        const expectedOutput = "7 1";

        // 
        const result = problems.highAndLow(input);

        // double check 
        expect(result).toEqual(expectedOutput); 
    })
})

describe("testing for vouls count", () => {

    test("given a string of 'donta' expect count to be 2", () => {

        const input = "donta";

        const expectedOuput = 2;

        const result = problems.vowelCount(input);

        expect(result).toEqual(expectedOuput); 
    })

    test("given a string of 'vitamin' expect count to be 3", () => {

        const input = "vitamin";

        const expectedOuput = 3;

        const result = problems.vowelCount(input);

        expect(result).toEqual(expectedOuput); 
    })

    test("given a string of 'pineApple' expect count to be 4", () => {

        const input = "pineApple";

        const expectedOuput = 4;

        const result = problems.vowelCount(input);

        expect(result).toEqual(expectedOuput); 
    })

    
})

