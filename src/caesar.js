// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    const letter = input.toLowerCase();
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode) {
      let result = "";
      for (idx in letter) {
        const char = alphabet.includes(letter[idx]);
        if (!char) {
          result += letter[idx];
        }
        else {
          let index;
          const charIdx = alphabet.findIndex((char) => char === letter[idx]);
          const currentIdx = charIdx + shift;
          if (currentIdx > 25) {
            index = currentIdx - 26;
          } else if (currentIdx < 0) {
            index = 26 - (currentIdx * -1);
          }
          result += alphabet[currentIdx] || alphabet[index];
        }
      }
      return result;
    }
    else {
      let result = "";
      for (idx in letter) {
        const char = alphabet.includes(letter[idx]);
        if (!char) {
          result += letter[idx];
        }
        else {
          let index;
          const charIdx = alphabet.findIndex((char) => char === letter[idx]);
          const currentIdx = charIdx - shift;
          if (currentIdx > 25) {
            index = currentIdx - 26;
          } else if (currentIdx < 0) {
            index = 26 - (currentIdx * -1);
          }
          result += alphabet[currentIdx] || alphabet[index];
        }
      }
      return result;
    }
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

// Create alphabet variable
// Take string input and split each letter up individually
// Reads current letter and shifts letter
// Join the new letter back into a string

// Adds shift to current index
// Check if new index is over 25 or below zero
// If new index is over 25 (new index - 25)
// if new index is below zero (26 - new index)

// changes