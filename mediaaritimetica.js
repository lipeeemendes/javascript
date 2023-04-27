//Escreva uma função que recebe uma lista de números como entrada e retorna a média (média aritmética) dos números.

let numbers = [12, 15, 20, 17, 10];

function mediaAritimetica(list) {
  let soma = 0;

  for (let i = 0; i < list.length; i++) {
    soma = soma + list[i];
  }
  return soma / list.length;
}

let result = mediaAritimetica(numbers);
console.log(result);
