/*let result;

function show(msg) {
  return msg;
}

result = show("revisao");
console.log("Result: " + result);

show("teste");
console.log(show("felipe"));


function add(a, b) {
  return a + b;
}

result = add(2, 18);
console.log(result);
let r = add;
console.log(r);
console.log(r(10, 20));
*/

function permissao(nome, idade) {
  const result = {
    name: nome,
    age: idade,
    msg: "pode dirigir",
    fnc: function () {
      return true;
    },
  };

  if (result.age >= 18) {
    return result;
  }

  result.msg = "nao pode direigir";
  return result;
}

function x(variavel) {
  return typeof variavel;
}

let result = permissao("felipe", 17);
console.log(result);
console.log(result.fnc());

let name = "felipe";
let number = 19;
let permitido = true;
let lista = [1, 2, 3];
let car = { cor: "vermelho", ano: 2000 };
let bola;
let mouse = null;

console.log(x(result));

console.log(x(name));
console.log(x(number));
console.log(x(permitido));
console.log(x(lista));
console.log(x(car));
console.log(x(bola));
console.log(x(mouse));
