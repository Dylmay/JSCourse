/**
 * @file Guess the number lab
 * @author Dylan Mayor
 */
'use strict';

// Guess the number game object
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  prevGuesses: [],

  /**
   * Plays the game
   */
  play() {
    [this.smallestNum, this.biggestNum] = this.getRange();
    const secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    let curGuess = NaN;
    do {
      curGuess = this.getGuess();

      this.render(curGuess, secretNum);
      this.prevGuesses.push(curGuess);
    } while (curGuess != secretNum);
  },

  /**
   * Gets a valid number from the user using a prompt
   * @return {number} the number fetched from the user
   */
  getGuess() {
    return this.getInput(
        `Enter a guess between ${this.smallestNum} & ${this.biggestNum}`,
        50,
        (input) => {
          Number.isNaN(input) ||
          input < this.smallestNum || input > this.biggestNum;
        },
    );
  },

  /**
   * Returns a pair containing the smallest and largest chosen range
   * values respectively
   * @return {[number, number]} Smallest an largest chosen range values
   */
  getRange() {
    const smallestNum = this.getInput(
        `Enter the minimum value of the range`,
        1,
        (input) => {
          Number.isNaN(input) ||
          input < this.smallestNum || input > this.biggestNum;
        },
    );

    const largestNum = this.getInput(
        `Enter the maximum value of the range`,
        100,
        (input) => {
          Number.isNaN(input) ||
          input < this.smallestNum || input > this.biggestNum;
        },
    );

    return [smallestNum, largestNum];
  },

  /**
   * Renders the win/lose screen onto the display
   * @param {number} curGuess current guess
   * @param {number} secretNum number to guess
   */
  render(curGuess, secretNum) {
    if (curGuess === secretNum) {
      // win
      alert(
          `Congrats! You guessed the number in
          ${this.prevGuesses.length} guesses!`,
      );
    } else {
      // no win
      alert(
          `Your guess (${curGuess}) is too ${curGuess > secretNum ? 'High' : 'Low'}
          Previous Guesses: ${this.prevGuesses.join(', ')}`,
      );
    }
  },

  /**
   * Helper function used to get valid user data
   * @param {string} text Text to display to the user
   * @param {any} initValue initial value
   * @param {*} failTest Function to check if the value is not valid
   * @return {any} the captured user data
   */
  getInput(text, initValue, failTest) {
    let input = NaN;

    do {
      input = Number.parseInt(prompt(text, initValue));
    } while (failTest(input));

    return input;
  },


};
