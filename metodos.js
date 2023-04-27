// Arras methods
/// -> forEach()  ; redude() ; reverse()
// Objetc!     { key: value}   {name:'Lipe',  fn:() =>{}}
// Mutate / Imutate
///  How can I add a new elemet in a array? method: push() added a new element in the end of array.
/// Hoe can I remoce a item ina array? pop() / stack   /
/// Insert inthe end: push() , remove in the start of array shift(), inset in the start of the list : unshift()
// how to modify a element:
// How to acces a item of an array: array[index] = newValue
/// map()
/// spread operator: ...
/// Slice()

let numbers = [1, 2, 4, 5, 3, 6, 7, 8, 9];

numbers.push(10, 12, 11);

const num = numbers.map((num) => {
  if (num === 4) {
    num *= 2;
  }
  return num;
});

const restParameters = (...args) => {
  // console.log(args);
};

restParameters(numbers);
restParameters(...numbers);

console.log("Slice:", numbers.slice(-2));
console.log(
  "Sort:",
  numbers.sort((a, b) => a - b)
);
