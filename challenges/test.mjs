import * as chal from './challenges.mjs';
import {expect} from 'chai';

'use strict';
//
// Challenge testing
//
// Challenge 0 - Hello world
expect(chal.hello()).to.equal('Hello');
// Challenge 1 - Add one
expect(chal.addOne(1)).to.equal(2);
expect(chal.addOne(-5)).to.equal(-4);
// Challenge 2 - Add two numbers
expect(chal.sum(5, 10)).to.equal(15);
expect(chal.sum(10, -2)).to.equal(8);
expect(chal.sum(0, 0)).to.equal(0);
expect(chal.sum('Hello', 5)).to.be.NaN;
// Challenge 3 - sum numbers
expect(chal.sumArr([10])).to.equal(10);
expect(chal.sumArr([5, 10])).to.equal(15);
expect(chal.sumArr([2, 10, -5])).to.equal(7);
expect(chal.sumArr([])).to.equal(0);
// Challenge 4 - add list
expect(chal.addList(1)).to.equal(1);
expect(chal.addList(1, 50, 1.23)).to.equal(52.23);
expect(chal.addList(7, -12)).to.equal(-5);
// Challenge 5 - compute remainder
expect(chal.computeRem(10, 2)).to.equal(0);
expect(chal.computeRem(4, 0)).to.equal(Infinity);
expect(chal.computeRem(10.5, 3)).to.equal(1.5);
// Challenge 6 - range
expect(chal.range(1, 4)).to.deep.equal([1, 2, 3]);
expect(chal.range(-2, 3)).to.deep.equal([-2, -1, 0, 1, 2]);
expect(chal.range(1, 1)).to.deep.equal([]);
expect(() => {
  chal.range(5, 2);
}).to.throw();
// Challenge 7 - reverse uppercase string
expect(chal.reverseUpper('SEI Rocks!')).to.equal('!SKCOR IES');
// Challenge 8 - Remove ends
expect(chal.remEnds('SEI Rocks!')).to.equal('EI Rocks'); // DI should be EI
expect(chal.remEnds('a')).to.equal('');
// Challenge 9 - character count
expect(chal.charCount('hello')).to.deep.equal({'h': 1, 'e': 1, 'l': 2, 'o': 1});
expect(chal.charCount('Today is fantastic!')).to.deep.equal(
    {'T': 1, 'o': 1, 'd': 1, 'a': 3, 'y': 1,
      ' ': 2, 'i': 2, 's': 2, 'f': 1, 'n': 1,
      't': 2, 'c': 1, '!': 1,
    },
);
// Challenge 10 - format with padding
expect(chal.formatWithPadding(123, '0', 5)).to.equal('00123');
expect(chal.formatWithPadding(42, '*', 10)).to.equal('********42');
expect(chal.formatWithPadding(1234, '*', 3)).to.equal('1234');
// Challenge 11 - isPalindrome
expect(chal.isPalindrome('SEI Rocks')).to.be.false;
expect(chal.isPalindrome('rotor')).to.be.true;
expect(chal.isPalindrome('A nut for a jar of tuna')).to.be.true;
expect(chal.isPalindrome('')).to.be.true;
// Challenge 12 - hammingDistance
expect(chal.hammingDistance('abc', 'abc')).to.equal(0);
expect(chal.hammingDistance('a1c', 'a2c')).to.equal(1);
expect(chal.hammingDistance('abc', 'ab')).to.be.NaN;
// Challenge 13 - mumble
expect(chal.mumble('X')).to.equal('X');
expect(chal.mumble('abc')).to.equal('a-bb-ccc');
expect(chal.mumble('121')).to.equal('1-22-111');
expect(chal.mumble('!A 2')).to.equal('!-AA-   -2222');
// Challenge 14 - from pairs
expect(chal.fromPairs([
  ['a', 1], ['b', 2], ['c', 3],
])).to.deep.equal({
  'a': 1,
  'b': 2,
  'c': 3,
});
expect(chal.fromPairs([
  ['name', 'sam'], ['age', 24], ['name', 'Sally'],
])).to.deep.equal({
  'name': 'Sally',
  'age': 24,
});
// Challenge 15 - merge objects
expect(chal.mergeObjects({}, {'a': 1})).to.deep.equal({'a': 1});
expect(chal.mergeObjects({'a': 1, 'b': 2, 'c': 3}, {'d': 4}))
    .to.deep.equal({'a': 1, 'b': 2, 'c': 3, 'd': 4});
expect(chal.mergeObjects({'a': 1, 'b': 2, 'c': 3}, {'d': 4},
    {'b': 22, 'd': 44})).to.deep.equal({'a': 1, 'b': 22, 'c': 3, 'd': 44});
// Challenge 16 - findHighestPrice
expect(chal.findHighestPrice([
  {'sku': 'a1', 'price': 25},
  {'sku': 'b2', 'price': 5},
  {'sku': 'c3', 'price': 50},
  {'sku': 'd4', 'price': 10},
])).to.deep.equal({
  'sku': 'c3',
  'price': 50,
});
expect(chal.findHighestPrice([
  {'sku': 'a1', 'price': 25},
  {'sku': 'b2', 'price': 50},
  {'sku': 'c3', 'price': 50},
  {'sku': 'd4', 'price': 10},
])).to.deep.equal({
  'sku': 'b2',
  'price': 50,
});
// Challenge 17 - mapArray
expect(chal.mapArray([1, 2, 3], function(n) {
  return n * 2;
})).to.deep.equal([2, 4, 6]);
expect(chal.mapArray(['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
})).to.deep.equal(['1 - rose', '2 - tulip', '3 - daisy']);
// Challenge 18 - reduceArray
expect(chal.reduceArray([1, 2, 3], function(acc, n) {
  return acc + n;
}, 0)).to.equal(6);
expect(chal.reduceArray([1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0)).to.equal(9);
expect(chal.reduceArray(['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {})).to.deep.equal({
  'Yes': 2,
  'No': 1,
  'Maybe': 1,
});
// Challenge 19 - flattening
expect(chal.flatten([1, [2, 3]])).to.deep.equal([1, 2, 3]);
expect(chal.flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']])).to.deep.equal(
    [1, 2, 3, 4, 1, 'a', 'b', 'c'],
);
// Challenge 20 - isPrime
expect(chal.isPrime(2)).to.be.true;
expect(chal.isPrime(3)).to.be.true;
expect(chal.isPrime(4)).to.be.false;
expect(chal.isPrime(29)).to.be.true;
expect(chal.isPrime(200)).to.be.false;
// Challenge 21 - primeFactors
expect(chal.primeFactors(2)).to.have.members([2]);
expect(chal.primeFactors(3)).to.have.members([3]);
expect(chal.primeFactors(4)).to.have.members([2, 2]);
expect(chal.primeFactors(18)).to.have.members([2, 3, 3]);
expect(chal.primeFactors(29)).to.have.members([29]);
expect(chal.primeFactors(105)).to.have.members([3, 5, 7]);
expect(chal.primeFactors(200)).to.have.members([2, 2, 2, 5, 5]);
// Challenge 22 - intersection
expect(chal.intersection(['a', 1], [])).to.deep.equal([]);
expect(chal.intersection(['a', 1], [true, 'a', 15])).to.have.members(['a']);
expect(chal.intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]))
    .to.have.members([1, true, 1]);
// Challenge 23 - balanced brackets
expect(chal.balancedBrackets('()')).to.be.true;
expect(chal.balancedBrackets('(]')).to.be.false;
expect(chal.balancedBrackets('[{}]')).to.be.true;
expect(chal.balancedBrackets('[(])')).to.be.false;
expect(chal.balancedBrackets('[({}[])]')).to.be.true;
// Challenge 24 - isWinningTicket
expect(chal.isWinningTicket([['ABC', 65]])).to.be.true;
expect(chal.isWinningTicket([['ABC', 999], ['XY', 89]])).to.be.false;
expect(chal.isWinningTicket([['ABC', 66], ['dddd', 100], ['Hello', 108]],
)).to.be.true;
expect(chal.isWinningTicket([['ABC', 66], ['dddd', 15], ['Hello', 108]],
)).to.be.false;
// Challenge 25 - getNumForIP
expect(chal.getNumForIP('0.0.0.1')).to.equal(1);
expect(chal.getNumForIP('0.0.2.0')).to.equal(512);
expect(chal.getNumForIP('192.156.99.15')).to.equal(3_231_474_447);
expect(chal.getNumForIP('10.0.0.1')).to.equal(167_772_161);
// Challenge 26 - toCamelCase
expect(chal.toCamelCase('sei')).to.equal('sei');
expect(chal.toCamelCase('sei-rocks')).to.equal('seiRocks');
expect(chal.toCamelCase('banana_Turkey_potato')).to.equal('bananaTurkeyPotato');
expect(chal.toCamelCase('Mama-mia')).to.equal('MamaMia');
expect(chal.toCamelCase('A_b_c')).to.equal('ABC');
// Challenge 27 - countTheBits
expect(chal.countTheBits(0)).to.equal(0);
expect(chal.countTheBits(13)).to.equal(3);
expect(chal.countTheBits(256)).to.equal(1);
expect(chal.countTheBits(255)).to.equal(8);
expect(chal.countTheBits(65_535)).to.equal(16);
// Challenge 28 - gridTrip
expect(chal.gridTrip([0, 0], 'U2R1')).to.deep.equal([2, 1]);
expect(chal.gridTrip([5, 10], 'D5L15U2')).to.deep.equal([2, -5]);
expect(chal.gridTrip([-22, 100], 'L2L15D50U1D9')).to.deep.equal([-80, 83]);
// Challenge 29 - addChecker
expect(chal.addChecker([1, 2], 3)).to.be.true;
expect(chal.addChecker([-3, 2], 9)).to.be.false;
expect(chal.addChecker([10, 15, 16, 22], 32)).to.be.true;
expect(chal.addChecker([10, 15, 16, 22], 19)).to.be.false;
// Challenge 30 - totalTaskTime
expect(chal.totalTaskTime([], 1)).to.equal(0);
expect(chal.totalTaskTime([4, 2, 5], 1)).to.equal(11);
expect(chal.totalTaskTime([5, 8], 2)).to.equal(8);
// should be 10 (cpu2 can carry out 4 & 2 before cpu1) - says 12
expect(chal.totalTaskTime([4, 2, 10], 2)).to.equal(10);
expect(chal.totalTaskTime([2, 2, 3, 3, 4, 4], 2)).to.equal(9);
// should be 13 - says 12
expect(chal.totalTaskTime([5, 2, 6, 8, 7, 2], 3)).to.equal(13);
console.log('PASSED TESTS');
