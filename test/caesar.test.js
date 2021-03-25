// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
    it("Check if shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
        const input = "This is the string input to be tested!";
        const shift = 26;
        let actual = caesar(input, shift, encode = true);
        let expected = false;
        expect(actual).to.eql(expected);
    });

    it("Spaces should be maintained, as should other non-alphabetic symbols.", () => {
        const input = "This is the string input to be tested!";
        const shift = 4;
        let actual = caesar(input, shift, encode = true);
        expect(actual).to.include(" ");
    });

    it("The message is sucessfully encoded.", () => {
        const input = "This is the string input to be tested!";
        const shift = 4;
        let actual = caesar(input, shift, encode = true);
        let expected = "xlmw mw xli wxvmrk mrtyx xs fi xiwxih!";
        expect(actual).to.eql(expected);
    });

    it("If a letter goes 'off' the alphabet, it should wrap around to the front of the alphabet.", () => {
        const input = "Zebras went to the zoo!";
        const shift = 4;
        let actual = caesar(input, shift, encode = true);
        let expected = "difvew airx xs xli dss!";
        expect(actual).to.eql(expected);
    });

    it("Encoding should allow for a negative shift to shift to the left.", () => {
        const input = "Zebras went to the zoo!";
        const shift = -4;
        let actual = caesar(input, shift, encode = true);
        let expected = "vaxnwo sajp pk pda vkk!";
        expect(actual).to.eql(expected);
    });

    it("The message is sucessfully decoded.", () => {
        const input = "Xlmw mw xli wxvmrk mrtyx xs fi xiwxih!";
        const shift = 4;
        let actual = caesar(input, shift, encode = false);
        let expected = "this is the string input to be tested!";
        expect(actual).to.eql(expected);
    });

    it("Decoding should allow for a negative shift to shift to the left.", () => {
        const input = "Vaxnwo sajp pk pda vkk!";
        const shift = -4;
        let actual = caesar(input, shift, encode = false);
        let expected = "zebras went to the zoo!";
        expect(actual).to.eql(expected);
    });
})

// Check if shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.

// Spaces should be maintained, as should other non-alphabetic symbols.

// Capital letters can be ignored, set to lower case.

// If a letter goes "off" the alphabet, it should wrap around to the front of the alphabet.