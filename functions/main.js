/**
 * @file Functions lab answers
 * @author Dylan Mayor
 */
'use strict';

/**
 * Ex 1:
 * Returns the max of two numbers
 * @param {number} x number one
 * @param {number} y number two
 * @return {number} The max of the two numbers
 */
function maxOfTwoNumbers(x, y) {
  return x > y ? x : y;
}

/**
 * Ex 2:
 * Returns the max of three numbers
 * @param {number} one number one
 * @param {number} two number two
 * @param {number} three number three
 * @return {number} the max value
 */
function maxOfThree(one, two, three) {
  return one > two ? (one > three ? one : three) : (two > three ? two : three);
}

/**
 * Ex 2:
 * Returns the max of the arg list
 * @param  {...number} args argument list of numbers
 * @return {number} The max value
 */
function maxVal(...args) {
  if (!args.length) throw Error('One arg must be passed');
  if (args.length == 1) return args[0];

  return args.reduce((max, val) => {
    return val > max ? val : max;
  }, Number.MIN_VALUE);
}

/**
 * Ex 3:
 * Verifies whether the passed character is a vowel
 * @param {string} character character to check
 * @return {boolean} whether the passed character is a vowel
 */
function isCharAVowel(character) {
  if (character.length != 1) throw Error('Only one character can be passed');

  return 'AEIOU'.includes(character.toUpperCase());
}

/**
 * Ex 4:
 * Sums the passed array
 * @param {[number]} numArray array to sum
 * @return {number} sum of the array
 */
function sumArray(numArray) {
  return numArray.reduce((total, val) => {
    return total + val;
  }, 0);
}

/**
 * Ex 5:
 * Multiplies the passed array
 * @param {[number]} numArray array to multiply
 * @return {number} product of the passed array
 */
function multiplyArray(numArray) {
  return numArray.reduce((total, val) => {
    return total * val;
  }, 0);
}

/**
 * Ex 6:
 * Returns the number of args that were passed
 * @param  {...any} args args to calculate the length of
 * @return {number} arg count
 */
function numArgs(...args) {
  return args.length;
}

/**
 * Ex 7:
 * Reverses the passed string
 * @param {string} string string to reverse
 * @return {string} the reversed string
 */
function reverseString(string) {
  return string.split('').reverse().join('');
}

/**
 * Ex 8:
 * Finds the longest string in the passed array
 * @param {[string]} stringArr array of strings
 * @return {number} the length of the longest string
 */
function longestStringInArr(stringArr) {
  return stringArr.reduce((max, str) => {
    return str.length > max ? str.length : max;
  }, -1);
}

/**
 * Ex 9:
 * Returns an array containing strings longer than minLen
 * @param {[string]} stringArr array of strings
 * @param {number} minLen minimum length for a string to be included
 * @return {[string]} the filtered string
 */
function stringsLongerThan(stringArr, minLen) {
  return stringArr.filter((str) => {
    return str.length > minLen;
  });
}

// Results / tests
console.log(`Max of 10, 7: ${maxOfTwoNumbers(10, 7)}`);
console.log(`Max of 2, 7, 4: ${maxOfThree(2, 7, 4)}`);
console.log(`Max of 2, 7, 4, 8, 90: ${maxVal(2, 7, 4, 8, 90)}`);
console.log(`A is a Vowel: ${isCharAVowel('A')}`);
console.log(`Sum of 2, 4, 5: ${sumArray([2, 4, 5])}`);
console.log(`Mult of 2, 4, 5: ${multiplyArray([2, 4, 5])}`);
console.log(`Arg count: ${numArgs(1, 2, 3, 4, 5, 6, 7, 8)}`);
console.log(`rockstar | ${reverseString('rockstar')}`);
console.log(`Longest string ${longestStringInArr([
  'a',
  'aaaaa',
  'abc',
  'a',
  'abcdefg',
  'xy',
])}`);
console.log(`Strings longer than 3: ${stringsLongerThan([
  'say',
  'hello',
  'in',
  'the',
  'morning',
], 3)}`);
