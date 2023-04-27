const customers = [10, 3, 40, 7, 50, 500];

console.log(
  customers.reduce((acc, currentValue) => acc + currentValue, 0) /
    customers.length
);

console.log(customers.filter((value) => value % 2 !== 0));
console.log(customers.filter((value) => value % 2 === 0));
