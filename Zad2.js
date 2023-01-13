/*main*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let numbers = input.split(' ');
  let num1 = parseInt(numbers[0]);
  let num2 = parseInt(numbers[1]);
  console.log(`${num1 + num2}`);
});

