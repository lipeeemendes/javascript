let listNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

let name;

// Function declaration - Create the function - We can call it later.
function findNumber(list, num) {
  for (let i = 0; i < listNumbers.length; i++) {
    if (list[i] === num) {
      return num;
    }
  }

  return null;
}
//---------------------------------------------------

let result = findNumber(listNumbers, 5);
console.log(result);
