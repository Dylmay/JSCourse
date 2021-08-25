/**
 * @file Array iterator lab
 * @author Dylan Mayor
 */
'use strict';

const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
  {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
  {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
  {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
  {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
  {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909},
];

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William',
];

const devs = [
  {name: 'Wes', year: 1988},
  {name: 'Kait', year: 1986},
  {name: 'Irv', year: 1970},
  {name: 'Lux', year: 2015},
];

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck',
];

const comments = [
  {text: 'Love this!', id: 523423},
  {text: 'Super good', id: 823423},
  {text: 'You are the best', id: 2039842},
  {text: 'Ramen is my fav food ever', id: 123523},
  {text: 'Nice Nice Nice!', id: 542328},
];

// Ex1 - Filter
const bornBefore1500 = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year <= 1600;
});

// EX2 - Map
const firstLast = inventors.map((inventor) => {
  return {first: inventor.first, last: inventor.last};
});

/**
 * Ex3 - sort by age
 * Sorts the inventors array from old to young
 * @return {[]} the inventors array
 */
function sortOldToYoung() {
  return inventors.sort((a, b) => {
    return a.year - b.year;
  });
}

/**
 * Ex4 - sort by lifespan
 * Sorts the inventors array from short to long lifespans
 * @return {[]} the inventors array
 */
function sortShortToLong() {
  return inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
  });
}

// Ex5 - total life
const totalLife = inventors.reduce((life, inventor) => {
  return life + (inventor.passed - inventor.year);
}, 0);

// Ex6 - nameFlip
const flipNames = people.map((nameString) => {
  return nameString.split(', ').reverse().join(' ');
});

// Ex 7 - instanceCount
const instanceCount = data.reduce((counts, itemData) => {
  if (!counts[itemData]) counts[itemData] = 0;

  counts[itemData]++;

  return counts;
}, {});

// Ex 8 - over 19 check
const over19 = devs.some((developer) => {
  return (new Date().getFullYear() - developer.year) >= 19;
});

// Ex 9 - all over 19 check
const allOver19 = devs.every((developer) => {
  return (new Date().getFullYear() - developer.year) >= 19;
});

// Ex 10 - findId
const findID = comments.find((comment) => {
  return comment.id === 823_423;
});

// Ex 11 - findIndex
const findIDIndex = comments.findIndex((comment) => {
  return comment.id === 123_523;
});

// results
console.log(`Ex 1 - Born in 1500's: ${JSON.stringify(bornBefore1500)}`);
console.log(`Ex 2 - firstLast names: ${JSON.stringify(firstLast)}`);
console.log(`Ex 3 - old to young: ${JSON.stringify(sortOldToYoung())}`);
console.log(`Ex 4 - shortest to longest lived:\
 ${JSON.stringify(sortShortToLong())}`,
);
console.log(`Ex 5 - total life: ${totalLife}`);
console.log(`Ex 6 - flipped names: ${flipNames}`);
console.log(`Ex 7 - item counts: ${JSON.stringify(instanceCount)}`);
console.log(`Ex 8 - over 19 check: ${over19}`);
console.log(`Ex 9 - all over 19: ${allOver19}`);
console.log(`Ex 10 - find ID: ${JSON.stringify(findID)}`);
console.log(`Ex 11- Find ID index: ${findIDIndex}`);
