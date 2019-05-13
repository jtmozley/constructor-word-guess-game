//setup constructor called "Word"
//inside we'll need an array that will house the "new Letter" objects. 1 object will be for one
//--letter of the selected word
//make a function that returns the string representation of the selected word.
//--it will call the "reveal" function from Letter.js and on incorrect/no guess display a "_"
//---on a correct guess it will replace the "_" with the correct letter and display to the user
//make a function that takes a character as an argument and calls the guess function from Letter.js on each letter object
//function that loops through "selectedWord"

var Letter = require("./Letter");

function Word() {
  this.letterObjs = [];
  this.strVal = function() {
    this.letterObjs.forEach(function(params) {
      
    })
    Letter.reveal();
  };
  this.guessed = function(char) {
    this.letterObjs.forEach(function() {
      Letter.userInput(char);
    });
  };
  this.makeWord = function(selectedWord) {
    selectedWord.forEach(function(element) {
      this.letterObjs.push(new Letter(element));
    });
  };
}
module.exports = Word;
