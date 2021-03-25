// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here;
    const letters = {
      a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, 
      g: 22, h: 32, k: 52, l: 13, m: 23, n: 33, 
      o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, 
      u: 54, v: 15, w: 25, x: 35, y: 45, z: 55,
      i: 42, j: 42
    };
    const digits = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
      12: "f", 22: "g", 32: "h", 52: "k", 31: "l",
      23: "m", 33: "n", 43: "o", 53: "p", 14: "q",
      24: "r", 34: "s", 44: "t", 54: "u", 15: "v",
      25: "w", 35: "x", 45: "y", 55: "z", 42: "(i/j)", 99: " "
    };
    // Checks if this is an encoder or decoder
    if (encode) {
      const result = [];
      for (idx in input) {
        const character = input[idx];
        let num = letters[character];
        if (num === undefined) {
          num = " ";
        }
        result.push(num);
      }
      return result.join("");
    } 
    else {
      const result = [];
      input = input.replace(" ", "99");
      for (let i = 0; i < input.length; i+= 2) {
        if (input[i + 1] === undefined) {
          return false;
        }
        const key = input[i] + input[i + 1];
        result.push(digits[key]);
      }
      return result.join("");
    };
  };

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

// Check if encode is true or false in order to decide whether to encode or decode a message
// Take string input and split each letter up individually
// Create object to hold the key/value pairs i.e. { a: 11, b:21 }
// Match each individual letter with it's 2 digit counterpart
// Return the 2 digit letter and push into array
// Join each number back into a string

// If letter is I or J return both as 42 or (i/j)