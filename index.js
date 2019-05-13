// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// Randomly selects a word and uses the `Word` constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// `Letter.js` *should not* `require` any other files.
// `Word.js` *should only* require `Letter.js`
// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

var Word = require("./Word"); // require word output
//var Letter = require("./Letter"); // used for testing. remove when Word.js works
var inquirer = require("inquirer"); // require inquirer

var guessesLeft = 10; //guesses left at the beginning of the game
<<<<<<< HEAD
var guessedLetters = []; // array of guessed letters

var characters = [
  "mountains",
  "rocky",
  "zion",
  "glacier",
  "wind cave",
  "denali",
  "biscayne",
  "kenai fjords",
  "basin",
  "isle",
  "lake"
]; // array of words to use

var selectedWord = characters[
  Math.floor(Math.random() * characters.length)
].split(""); //randomly selected word from characters list split up accordingly
=======
var characters = ["mountains","rocky","zion","glacier","wind cave","denali","biscayne","kenai fjords","basin","isle","lake"]; // array of words to use
var guessedLetters = []; // array of guessed letters
var selectedWord = characters[Math.floor(Math.random() * characters.length)].split(""); //randomly selected word from characters list split up accordingly
>>>>>>> 36a323fe46fe2e5b0bf99b7363868635e26e102a

Word.makeWord(selectedWord);

var output = []; // output post testing

<<<<<<< HEAD
//[x]selected word needs to be sent through word.makeword() and turned into an array of objects
//[]THEN the objects need to be sifted through and if no guess has been made, return back "_"
//[]somehow store this string of underscores in var output in index.js
=======
///////////////// used for testing. should be in the word.js constructor
// for (var i = 0; i < selectedWord.length; i++) {
//   output.push(new Letter(selectedWord[i], guessedLetters).reveal());
// }
// console.log(new Word(selectedWord, guessedLetters,output));
/////////////////
>>>>>>> 36a323fe46fe2e5b0bf99b7363868635e26e102a

// // // // // hangman game in recursive function
var hangman = function() {
  if (guessesLeft > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter",
          name: "guessedLetter"
        }
      ])
      .then(function(inquirerResponse) {
        if (selectedWord.includes(inquirerResponse.guessedLetter)) {
          console.log("CORRECT!!!");
          console.log(output);
          guessedLetters.push(inquirerResponse.guessedLetter);
          console.log(guessedLetters);
          hangman();
        } else {
          guessesLeft--;
          console.log("INCORRECT!!!");
          console.log(output);
          console.log(guessesLeft + " guesses remaining!");
          guessedLetters.push(inquirerResponse.guessedLetter);
          console.log(guessedLetters);
          win();
        }
      });
  } else {
    console.log("You lost");
    guessesLeft = 10;
    guessedLetters = [];
    inquirer
      .prompt([
        {
          type: "list",
          message: "Play Again?",
          choices: ["Yes", "No"],
          name: "playAgain"
        }
      ])
      .then(function(inquirerResponse) {
        if (inquirerResponse.playAgain === "Yes") {
          hangman();
        } else {
          console.log("Come play again soon!");
        }
      });
  }
};
hangman();

<<<<<<< HEAD
// function win() {
//   if (output.indexOf("_") >= 0) {
//     hangman();
//   } else {
//     console.log("You Win!");
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "Play Again?",
//           choices: ["Yes", "No"],
//           name: "playAgain"
//         }
//       ])
//       .then(function(inquirerResponse) {
//         if (inquirerResponse.playAgain === "Yes") {
//           hangman();
//         } else {
//           console.log("Come play again soon!");
//         }
//       });
//   }
//}
//
//
//----------------------------------------------
//Testing code moved from top of document and stored for use later if needed
//var output = ["m", "o", "u", "n", "t", "a", "i", "_", "s"]; // output used for testing. remove when word.js works
///////////////// used for testing. should be in the word.js constructor
// for (var i = 0; i < selectedWord.length; i++) {
//   output.push(new Letter(selectedWord[i], guessedLetters).reveal());
// }
// console.log(new Word(selectedWord, guessedLetters,output));
/////////////////
//----------------------------------------------
=======
function win() {
  if (output.indexOf("_") >= 0) {
    hangman();
  } else {
    console.log("You Win!");
    inquirer
      .prompt([
        {
          type: "list",
          message: "Play Again?",
          choices: ["Yes", "No"],
          name: "playAgain"
        }
      ])
      .then(function(inquirerResponse) {
        if (inquirerResponse.playAgain === "Yes") {
          hangman();
        } else {
          console.log("Come play again soon!");
        }
      });
  }
}
>>>>>>> 36a323fe46fe2e5b0bf99b7363868635e26e102a
