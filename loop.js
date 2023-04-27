let listNames = ["Maria", "Pedro", "Sabrina", "Mariana", "Luana", "Joana"];

function findNames(list, char) {
  const names = [];

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element.startsWith(char)) {
      names.push(element);
    }
  }

  return names;
}

let result = findNames(listNames, "M");
console.log(result);
