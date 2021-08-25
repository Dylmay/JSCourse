/**
 * @file Extra challenges for JS course
 * @author Dylan Mayor
 */
'use strict';

/**
 * Extension of JS String
 */
Object.assign(String.prototype, {
  /**
   * Reverses the string
   * @return {this} The string reversed
   */
  reverse() {
    return this.split('').reverse().join('');
  },
});

/**
 * Extension of JS Array
 */
Object.assign(Array.prototype, {
  /**
   * Removes the item at the given index
   * @param {number} index Index to remove at
   */
  remove(index) {
    this.splice(index, 1);
  },
  /**
   * Inserts the value at the given position
   * @param {number} index Position to insert at
   * @param {any} value value to insert
   */
  insert(index, value) {
    this.splice(index, 0, value);
  },
});

/**
 * Extension of Array class
 */
Object.assign(Array, {
  /**
   * Initialises an array with the given length and value
   * @param {number} length length of the array
   * @param {any} value
   * @return {[]} Initialised array
   */
  init(length, value) {
    return Array.from({length: length}, () => value);
  },
});

/**
 * Returns a hello message
 * @return {string} Hello string
 */
function hello() {
  return 'Hello';
}

/**
 * Increments and returns the passed number
 * @param {number} number Number to increment
 * @return {number} incremented number
 */
function addOne(number) {
  return number + 1;
}

/**
 * Returns the sum of two numbers
 * @param {number} n1 First number
 * @param {number} n2 SecondNumber
 * @return {number} The summed number
 */
function sum(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) return NaN;

  return n1 + n2;
}

/**
 * Returns the product of an array
 * @param {[number]} arr Array to sum
 * @return {number} The product of the array
 */
function sumArr(arr) {
  return arr.reduce((sum, num) => sum += num, 0);
}

/**
 * Returns the product of an argument list
 * @param {[]} args argument list
 * @return {number} product of the argument list
 */
function addList(...args) {
  return sumArr(args);
}

/**
 * Computes the remainder of a division
 * @param {number} dividend number to divide
 * @param {number} divisor number to divide by
 * @return {number} the remainder of the division
 */
function computeRem(dividend, divisor) {
  if (divisor === 0) return Infinity;

  return dividend % divisor;
}

/**
 * Creates a range of integers between the passed arguments
 * @param {number} from number to begin with
 * @param {number} to number to stop at, not including
 * @return {[number]} The generated range
 */
function range(from, to) {
  if (from === to) return [];
  if (from > to) throw Error('First arg must be less than second');

  const range = [from];

  while (++from < to) range.push(from);

  return range;
}

/**
 * Reverses and converts the passed string to upper case
 * @param {string} str the string to convert
 * @return {string} the flipped, uppercase string
 */
function reverseUpper(str) {
  return str.toUpperCase().reverse();
}

/**
 * Removes the end characters from the passed string
 * @param {string} str the string to trim
 * @return {string} the string substring
 */
function remEnds(str) {
  if (str.length < 3) return '';

  return str.substring(1, str.length - 1);
}

/**
 * Counts the occurrence of characters in the passed string
 * @param {string} str the string to count chars in
 * @return {{}} Object holding KV pairs of counted characters
 */
function charCount(str) {
  const charCount = {};

  for (const character of str) {
    if (!charCount[character]) charCount[character] = 0;

    charCount[character]++;
  }

  return charCount;
}

/**
 * Formats a passed number to a given length using a repeating string
 * @param {number} formatNum number to format
 * @param {string} str padding string
 * @param {number} padSize total length of the string
 * @return {string} The formatted string
 */
function formatWithPadding(formatNum, str, padSize) {
  return formatNum.toFixed().padStart(padSize, str);
}

/**
 * Returns a boolean indicating whether the passed string is a palindrome
 * @param {string} str string to test
 * @return {boolean} Whether passed string is a palindrome
 */
function isPalindrome(str) {
  if (str.length <= 1) return true;

  str = str.replaceAll(' ', '').toLowerCase();
  return str === str.reverse();
}

/**
 * returns the count of symbols at the same position within each string
 * that are different
 * @param {string} strOne string one
 * @param {string} strTwo string two
 * @return {number} count
 */
function hammingDistance(strOne, strTwo) {
  let count = 0;

  if (strOne.length !== strTwo.length) {
    return NaN;
  }

  for (let i = 0; i < strOne.length; i++) {
    if (strOne[i] !== strTwo[i]) count++;
  }

  return count;
}

/**
 * Repeats each character the number of times according to its position
 * @param {string} str the string to mumble through
 * @return {string} the mumble string
 */
function mumble(str) {
  let mumble = '';

  for (let i = 0; i < str.length; i++) {
    mumble += str[i].repeat(i + 1);
    mumble += '-';
  }

  return mumble.substring(0, mumble.length - 1);
}

/**
 * Converts an array holding KV pairs into an object holding KV pairs
 * @param {[]} mapArr array of KV pairs
 * @return {{}} map object
 */
function fromPairs(mapArr) {
  const map = {};

  for (const [key, value] of mapArr) {
    map[key] = value;
  }

  return map;
}

/**
 * Merges objects into a single object
 * @param {{}} argA First object
 * @param {{}} argB Second object
 * @param {{}} args Further objects
 * @return {{}} Merged object
 */
function mergeObjects(argA, argB, ...args) {
  let merged = {...argA, ...argB};

  for (const arg of args) {
    merged = {...merged, ...arg};
  }

  return merged;
}

/**
 * finds the highest priced item in an object array
 * @param {[{}]} objArr Array of priced items
 * @return {{}} the highest priced item
 */
function findHighestPrice(objArr) {
  let hpi = 0;

  if (objArr.length === 1) return objArr[0];
  if (!objArr.length) throw Error('object array too small');

  for (let i = 1; i < objArr.length; i++) {
    if (objArr[i]['price'] > objArr[hpi]['price']) hpi = i;
  }

  return objArr[hpi];
}

/**
 * Maps an array
 * @param {[]} array array to map
 * @param {function} callbackFunc Function used for mapping
 * @return {[]} The mapped array
 */
function mapArray(array, callbackFunc) {
  const mapArray = [];

  for (let i = 0; i < array.length; i++) {
    mapArray.push(callbackFunc(array[i], i));
  }

  return mapArray;
}

/**
 * Reduces an array
 * @param {[]} array array to reduce
 * @param {function} callbackFunc function used for reduction
 * @param {any} accum initial accumulator
 * @return {any} the accumulator
 */
function reduceArray(array, callbackFunc, accum) {
  for (let i = 0; i < array.length; i++) {
    accum = callbackFunc(accum, array[i], i);
  }

  return accum;
}

/**
 * Flattens a nested array, recursively
 * @param {[[]]} nestedArr the array to flatten
 * @return {[]} the flattened array
 */
function flatten(nestedArr) {
  const flattenedArr = [];

  for (const value of nestedArr) {
    if (Array.isArray(value)) {
      flattenedArr.push(...flatten(value));
    } else {
      flattenedArr.push(value);
    }
  }

  return flattenedArr;
}

/**
 * Verifies whether the passed number is a prime
 * @param {number} integer the number to verify
 * @return {boolean} whether the number is a prime
 */
function isPrime(integer) {
  if (!Number.isInteger(integer) || integer < 2) return false;
  if (integer === 2) return true;

  const maxVal = Math.floor(Math.sqrt(integer));
  for (let i = 2; i <= maxVal; i++) {
    if (integer % i === 0) return false;
  }

  return true;
}

/**
 * Finds the prime factors of a given integer
 * @param {number} integer the number to find the prime numbers for
 * @return {[]} prime factors of the number
 */
function primeFactors(integer) {
  if (integer <= 1) throw Error('Number must be greater than 1');
  if (integer === 2) return [2];

  const factorArray = [];

  while (!(integer % 2)) {
    factorArray.push(2);
    integer = Math.floor(integer / 2);
  }

  const maxVal = Math.floor(Math.sqrt(integer));
  for (let i = 3; i <= maxVal; i += 2) {
    while (integer % i === 0) {
      factorArray.push(i);
      integer = Math.floor(integer / i);
    }
  }

  if (integer > 2) factorArray.push(integer);

  return factorArray;
}

/**
 * Finds the intersection of two arrays
 * note: has 'special' behaviour where repeating duplicates will be kept
 *       in the returned intersection
 * @param {[]} arrA array a
 * @param {[]} arrB array b
 * @return {[]} The intersection of the two arrays
 */
function intersection(arrA, arrB) {
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) return [];

  const intersectArr = [];
  const tempB = [...arrB];

  for (let arrAIndx = 0; arrAIndx < arrA.length; arrAIndx++) {
    for (let arrBIndx = 0; arrBIndx < tempB.length; arrBIndx++) {
      if (arrA[arrAIndx] === tempB[arrBIndx]) {
        tempB.remove(arrBIndx);
        intersectArr.push(arrA[arrAIndx]);
      }
    }
  }

  return intersectArr;
}

/**
 * Checks whether the passed string has balanced brackets
 * @param {string} str string to balance
 * @return {boolean} Whether the brackets balance
 */
function balancedBrackets(str) {
  const stack = [];

  if (str.length % 2) return false;

  for (const character of str) {
    switch (character) {
      case '(': case '[': case '{': // opening
        stack.push(character);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      default:
        break;
    }
  }

  return true;
}

/**
 * Checks whether the ticket holder has won by
 * verifying whether character codePoints equal the ticket value
 * @param {[[]]} array the ticket array to verify
 * @return {boolean} whether the ticket is winning
 */
function isWinningTicket(array) {
  for (const ticket of array) {
    let foundMatch = false;

    for (let i = 0; i < ticket[0].length; i++) {
      if (ticket[0].charCodeAt(i) === ticket[1]) {
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) return false;
  }

  return true;
}

/**
 * Calculates the ip number
 * @param {string} ipString IP string to total
 * @return {number} The total of the IP string
 */
function getNumForIP(ipString) {
  const splitStr = ipString.split('.').reverse();
  let num = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(splitStr[i])) {
      num += Number.parseInt(splitStr[i]) * 256 ** i;
    }
  }

  return num;
}

/**
 * Converts a string to camelCase
 * note: will not work on strings beginning with _
 * @param {string} str string to process
 * @return {string} camelCased string
 */
function toCamelCase(str) {
  return str.replace(/[-_]\w/ig, (match) => match[1].toUpperCase());
}

/**
 * Counts the bits within a number
 * @param {number} number number to count
 * @return {number} the number of bits
 */
function countTheBits(number) {
  let bitCount = 0;

  do {
    bitCount += number & 1;
  } while ((number >>= 1));

  return bitCount;
}

/**
 * updates the xyPairs position relating to the passed movement/trip string
 * @param {[]} yxPair yx pair to update
 * @param {string} movementStr movement/trip string
 * @return {[]} new yxPair
 */
function gridTrip(yxPair, movementStr) {
  const splitStr = movementStr.match(/\w\d+/g);
  let y = yxPair[0];
  let x = yxPair[1];

  splitStr.forEach((elem) => {
    const character = elem[0].toUpperCase();
    const amount = Number.parseInt(elem.substring(1, elem.length));

    switch (character) {
      case 'U':
        y += amount;
        break;

      case 'D':
        y -= amount;
        break;

      case 'R':
        x += amount;
        break;

      case 'L':
        x -= amount;
        break;

      default:
        break;
    }
  });

  return [y, x];
}

/**
 * Verifies whether two integers within the array sum to the passed integer
 * @param {[number]} intArray array of integers to search
 * @param {number} integer integer to match on
 * @return {boolean} whether two integers within the arr sum to the integer
 */
function addChecker(intArray, integer) {
  if (intArray.length < 2) return false;

  for (let i = 0; i < intArray.length - 1; i++) {
    for (let y = i + 1; y < intArray.length; y++) {
      const total = intArray[i] + intArray[y];
      if (total === integer) return true;
      if (total > integer) break;
    }
  }

  return false;
}

/**
 * Calculates the minimum task time to finish the work queue
 * @param {[]} queue CPU work queue
 * @param {number} cpuThreads number of CPU threads
 * @return {number} Time taken to finish the tasks
 */
function totalTaskTime(queue, cpuThreads) {
  const threadArr = Array.init(cpuThreads, 0);
  let totalTime = 0;

  while (queue.length) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < threadArr.length; i++) {
      if (!queue.length) break;

      if (threadArr[i] === 0) {
        threadArr[i] = queue.pop();
      }
      if (threadArr[i] < minDiff) {
        minDiff = threadArr[i];
      }
    }

    for (let i = 0; i < threadArr.length; i++) {
      threadArr[i] -= minDiff;
    }

    totalTime += minDiff;
  }

  return totalTime + Math.max(...threadArr);
}

// export defs
export {
  hello, addOne, sum, sumArr, addList, computeRem, range,
  reverseUpper, charCount, remEnds, formatWithPadding, isPalindrome,
  hammingDistance, mumble, fromPairs, mergeObjects, findHighestPrice,
  mapArray, reduceArray, flatten, isPrime, primeFactors, intersection,
  balancedBrackets, isWinningTicket, getNumForIP, toCamelCase,
  countTheBits, gridTrip, addChecker, totalTaskTime,
};
