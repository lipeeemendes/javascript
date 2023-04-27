//Escreva uma função que recebe uma lista como entrada e retorna uma nova lista com os elementos invertidos.

const originalList = [1, 2, 3, 4, 5];

/*
function reverseList(list) {
  let newList = [];

  for (i = list.length - 1; i >= 0; i--) {
    newList.push(list[i]);
  }

  return newList;
}

let getNewList = reverseList(originalList);

console.log(getNewList);
*/

/*
for (number of originalList.reverse()) {
  console.log(number);
}
*/

const fn = (value) => {
  console.log(value);
};

const people = [
  {
    name: "Seven",
    age: 51,
    gender: "male",
  },
  {
    name: "Lipe",
    age: 19,
    gender: "male",
  },
  {
    name: "Maria",
    age: 22,
    gender: "female",
  },
];

people.forEach((element) => {
  console.log(`Nome: ${element.name} idade: ${element.age}`);
});
