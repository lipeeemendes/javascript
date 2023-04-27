/*const numbers = [3, 7, 5, 12, 9, 22, 15, 10];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});
const average = sum / numbers.length;

console.log("Average: " + average);
*/

const numbers = [3, 7, 5, 12, 9, 22, 15, 10];

const sum = numbers.reduce(
  (accumulador, currenttValue) => accumulador + currenttValue,
  0
);
const average = sum / numbers.length;

console.log("Averange: " + average);
