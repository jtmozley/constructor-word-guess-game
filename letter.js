function Letter(value) {
  this.letter = value;
  this.guessed = false;
}
Letter.prototype.toString = function() {
  if (this.letter === " ") {
    this.guessed = true;
    return " ";
  } else {
    if (this.guessed === false) {
      return "_";
    } else {
      return this.letter;
    }
  }
};
Letter.prototype.guess = function(guess) {
  if (guess === this.letter) {
    this.guessed = true;
  }
};

module.exports = Letter;


