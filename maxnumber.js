//1 - Escreva uma função que recebe uma lista de números como entrada e retorna o maior número na lista.

const numbers = [42, 19, 7, 35, 92, 10];

function maxNumber(list) {
  let currentNumber = 0;

  for (i = 0; i < list.length; i++) {
    if (currentNumber < list[i]) {
      currentNumber = list[i];
    }
  }

  return currentNumber;
}

let result = maxNumber(numbers);

console.log(result);
