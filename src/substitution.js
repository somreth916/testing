// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function checkForRepeat(str) {
    const arr = [];
    for (idx in str) {
      if (arr.includes(str[idx])) {
        return false;
      }
      else {
        arr.push(str[idx]);
      }
    }
    return true;
  };

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = "";
    const letters = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // Error handling
    if (!alphabet || alphabet.length !== 26 || !checkForRepeat(alphabet)) {
      return false;
    };

    if (encode) {
      for (idx in input) {
        const inputChar = input[idx];
        if (inputChar === " ") {
          result += inputChar;
        }
        // console.log(inputChar) // Loops through entire input letters
        for (idx in letters) {
          const letterChar = letters[idx];
          // console.log(letterChar)
          if (inputChar === letterChar) {
            const index = letters.indexOf(letterChar);
            result += alphabet[index];
          }
        }
      }
    }
    else {
      for (idx in input) {
        const inputChar = input[idx];
        if (inputChar === " ") {
          result += inputChar;
        }
        // console.log(inputChar) // Loops through entire alphabet letters
        for (idx in alphabet) {
          const alphabetChar = alphabet[idx];
          // console.log(alphabetChar)
          if (inputChar === alphabetChar) {
            const index = alphabet.indexOf(alphabetChar);
            result += letters[index];
          }
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

// Takes input & given alphabet and compares input index against alphabet index

// Those matches are then swapped over from alphabet to input letter

// Return the new letters into a string
