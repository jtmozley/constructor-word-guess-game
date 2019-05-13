// Contains a constructor, Letter.
// This constructor should be able to either display an underlying char or a blank placeholder (such as an underscore)
// , depending on whether or not the user has guessed the letter.

var Letter = function(char) {
  this.char = char; // A string value to store the underlying char for the letter
  this.guessed = false; // A boolean value that stores whether that letter has been guessed yet
};

Letter.prototype.reveal = function() {
  // A function that returns the underlying char if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  if (!this.guessed) {
    // A function that takes a char as an argument and checks it against the underlying char, updating the stored boolean value to true if it was guessed correctly
    return "_";
  } else {
    return this.char;
  }
};
Letter.prototype.userInput = function(char) {
  if (char === this.char) {
    this.guessed = true;
    this.reveal();
  }
};

// exporting our Letter constructor output
module.exports = Letter;