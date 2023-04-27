const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Charlie", idade: 35 },
  { nome: "Dave", idade: 40 },
];
/*
function calcularMediaIdade(listPessoas) {
  let media = 0;
  for (let index = 0; index < listPessoas.length; index++) {
    const element = listPessoas[index];
    media = media + element.idade;
  }

  return media / listPessoas.length;
}
*/
/*
function calcularMediaIdade(listPessoas) {
  let media = 0;
  for (element of listPessoas) {
    media = media + element.idade;
  }
  return media / listPessoas.length;
}
*/

// Anonimouns function
// Expression functiion
const calcularMediaIdade = function (listPessoas) {
  let media = 0;
  for (element of listPessoas) {
    media = media + element.idade;
  }
  return media / listPessoas.length;
};

// Teste
const mediaIdade = calcularMediaIdade(pessoas);
console.log("Média de Idade: ", mediaIdade); // Saída: Média de Idade: 32.5
