const numbers = [
  /// Grades
  [0, 1, 2], //0 students
  [3, 4, 5], //1
];

let [v1, v2, v3] = numbers[0];

console.log(v1, v2, v3);
///persong.name
///lilst[0][0]

let persons = ["Lipe", 19];

let [_, name] = persons;

console.log(name);

const list = [3, 4, 5, 6, 7, 8];

console.log(list.map((num) => num * 2).slice(0, 3));
