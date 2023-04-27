let listNames = ["Maria", "Pedro", "Sabrina", "Mariana", "Luana", "Joana"];

/*
for (name of listNames.reverse()) {
  console.log(name);
}

console.log("\n");

*/

/*
listNames.forEach((name) => console.log(name));
*/

listNames.forEach((name, index, array) => {
  console.log(name, index, array);
});
