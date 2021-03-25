// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

// It returns false if the given alphabet isn't exactly 26 characters long.
// It correctly translates the given phrase, based on the alphabet given to the function.
// It returns false if there are any duplicate characters in the given alphabet.
// It maintains spaces in the message, before and after encoding or decoding.
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)