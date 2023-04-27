//Exercício de array e map:
//Dado um array de objetos, escreva um programa que retorne um novo array com o nome de cada pessoa em letras maiúsculas.

const people = [
  { name: "John", age: 35 },
  { name: "Mary", age: 25 },
  { name: "David", age: 30 },
];

function upCase(list) {
  return list.map((person) => person.name.toUpperCase());
}

let name = "seven";
console.log(name.toUpperCase());

let names = upCase(people);
console.log(names); // Output: ["JOHN", "MARY", "DAVID"]
