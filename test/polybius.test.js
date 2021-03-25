// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

// When encoding, it translates the letters i and j to 42.
// When decoding, it translates 42 to (i/j).
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)
// It maintains spaces in the message, before and after encoding or decoding.