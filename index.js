var Word = require("./word.js");
var inquirer = require("inquirer");
var chalk = require("chalk");

var letterArray = "abcdefghijklmnopqrstuvwxyz";
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
];
var randomWord = characters[Math.floor(Math.random() * characters.length)];

var computerWord = new Word(randomWord);
var requireNewWord = false;

var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function hangman() {
  if (requireNewWord) {
    var randomWord = characters[Math.floor(Math.random() * characters.length)];
    computerWord = new Word(randomWord);
    requireNewWord = false;
  }
  var wordComplete = [];
  computerWord.objArray.forEach(completeCheck);
  if (wordComplete.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter between A-Z!",
          name: "userinput"
        }
      ])
      .then(function(input) {
        if (
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("\nPlease try again!\n");
          hangman();
        } else {
          if (
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("\nAlready Guessed or Nothing Entered\n");
            hangman();
          } else {
            var wordCheckArray = [];
            computerWord.userGuess(input.userinput);
            computerWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
              console.log(chalk.red("\nIncorrect\n"));
              incorrectLetters.push(input.userinput);
              guessesLeft--;
            } else {
              console.log(chalk.green("\nCorrect!\n"));
              correctLetters.push(input.userinput);
            }
            computerWord.log();
            console.log("Guesses Left: " + guessesLeft + "\n");

            if (guessesLeft > 0) {
              hangman();
            } else {
              console.log("Sorry, you lose!\n");
              restartGame();
            }
            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log("YOU WIN!\n");
    restartGame();
  }
  function completeCheck(key) {
    wordComplete.push(key.guessed);
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to play again?:",
        choices: ["Yes", "No"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Yes") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        hangman();
      } else {
        return;
      }
    });
}

hangman();
