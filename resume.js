// 1. Exercício de array e reduce:
//Dado um array de números, escreva um programa que calcule a soma de todos os números pares no array.

const numbers = [1, 2, 3, 4, 3, 5, 6, 7, 8, 9, 10];

/*
function addNumbers(list) {
  return list.reduce((acc, value) => {
    if (value % 2 === 0) {
      return acc + value;
    } else {
      return acc;
    }
  }, 0);
}
*/

console.log(numbers.join("+"));
const sumOfEvenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

//umOfEvenNumbers = addNumbers(numbers);

console.log(sumOfEvenNumbers); // Output: 30
