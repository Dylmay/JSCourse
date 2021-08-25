/**
 * @file Loops & conditionals lab answers
 * @author Dylan Mayor
 */
'use strict';

/**
 * Array extensions
 */
Object.assign(Array.prototype, {
  /**
   * Inserts the value at the given position
   * @param {number} index Index to insert at
   * @param {*} value value to insert
   */
  insert(index, value) {
    this.splice(index, 0, value);
  },

  /**
   * Removes the value at the given position
   * @param {number} index index to remove at
   */
  remove(index) {
    this.splice(index, 1);
  },
});

// ex 1
const foods = [];

// ex 2
foods.push('pizza', 'cheeseburger');

console.log(`Exercise 2: ${foods}`);

// ex 3
foods.unshift('taco');

console.log(`Exercise 3: ${foods}`);

// ex 4
const favFood = foods[foods.indexOf('pizza')];

console.log(`Exercise 4: ${favFood}`);

// ex 5
foods.insert(foods.indexOf('cheeseburger'), 'tofu');

console.log(`Exercise 5: ${foods}`);

// ex 6
foods.splice(foods.indexOf('pizza'), 1, 'sushi', 'cupcake');

console.log(`Exercise 6: ${foods}`);

// ex 7
const yummy = foods.slice(foods.indexOf('sushi'), foods.indexOf('sushi') + 2);

console.log(`Exercise 7: ${yummy}`);

// ex 8
const soyIndx = foods.indexOf('tofu');

console.log(`Exercise 8: ${soyIndx}`);

// ex 9
const allFoods = foods.join(' -> ');

console.log(`Exercise 9: ${allFoods}`);

// ex 10
const hasSoup = foods.includes('soup');

console.log(`Exercise 10: ${hasSoup}`);

// ex 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const oddArr = [];

nums.forEach((val) => {
  if (val % 2) oddArr.push(val);
});

console.log(`Exercise 11: ${oddArr}`);

// ex 12
const fizz = [];
const buzz = [];
const fizzBuzz = [];

nums.forEach((val) => {
  const canFizz = !(val % 3);
  const canBuzz = !(val % 5);

  if (canFizz && canBuzz) {
    fizzBuzz.push(val);
  } else if (canFizz) {
    fizz.push(val);
  } else if (canBuzz) {
    buzz.push(val);
  }
});

console.log('--Exercise 12--');
console.log(`Fizz:     ${fizz}`);
console.log(`Buzz:     ${buzz}`);
console.log(`FizzBuzz: ${fizzBuzz}`);
console.log('---------------');

// ex 13
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 0],
  [45, 66],
  [7, 81, 90],
];
const numList = numArrays[numArrays.length - 1];

console.log(`Exercise 13: ${numList}`);

// Ex 14
const num = numArrays[2][1];

console.log(`Exercise 14: ${num}`);

// Ex 15
let total = 0;
numArrays.forEach((innerArr) => {
  innerArr.forEach((value) => {
    total += value;
  });
});

console.log(total);
