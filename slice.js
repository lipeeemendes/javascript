// 4. Exercício de array e slice:
// Dado um array de números, escreva um programa que retorne um novo array com os 3 primeiros números.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstThreeNumbers = (list) => {
  return list.slice(0, 3);
};

console.log(firstThreeNumbers(numbers)); // Output: [1, 2, 3]
