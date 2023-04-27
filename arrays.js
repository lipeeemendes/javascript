const list1 = [1, 2, 3, 4, 5];
const list2 = [4, 5, 6, 7, 8];

function findCommonElements(array1, array2) {
  let list3 = [];

  for (let i = 0; i < array1.length; i++) {
    const elementArray1 = array1[i];

    for (let index = 0; index < array2.length; index++) {
      if (elementArray1 === array2[index]) {
        list3.push(array2[index]);
      }
    }
  }

  return list3;
}

const commonElements = findCommonElements(list1, list2);
console.log("Common Elements: ", commonElements); // Output: Common Elements: [ 4, 5 ]
