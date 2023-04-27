// Questão 1)

/*  Escreva uma função que recebe uma lista de números como entrada e retorna o maior número na lista.
const numbers = [42, 19, 7, 35, 92, 10];  */

const listNumbers = [42, 19, 7, 35, 92, 10];

/*
let maxNumber = 0;

for (let index = 0; index < listNumbers.length; index++) {
  if (maxNumber < listNumbers[index]) {
    maxNumber = listNumbers[index];
  }
}

console.log(maxNumber);
*/

/*
const user = "felipe";

if (user === "seven") {
  console.log(`usuario valido ${user}`);
} else {
  console.log(`uario invalido ${user}`);
}
*/

let media = listNumbers.reduce((maxNumber, newNumber) => {
  if (maxNumber < newNumber) {
    maxNumber = newNumber;
  }
});

console.log(media);
