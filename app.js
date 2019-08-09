var totalData = '' ;
var Data = [];
const pair = require('./logic/pairTheShocks');

console.log('========================');
console.log('PAIR SHOCK PROGRAM');
console.log('========================');
const readline = require('readline-sync');

totalData = readline.question('Input number of data --> ');
Data = readline.question('Input data separated by space --> ');

console.log(pair.pairMyShock(totalData,Data));

console.log('========================');
console.log('PAIR SHOCK PROGRAM END');
console.log('========================');