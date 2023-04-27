// getElementByTagName()
// getElementById()
// querySelecto()

// Retorna um HTMLColletion , tipo um "Array"

/*
const element = document.getElementsByTagName("h1");

console.log("Element:", element[0].textContent);
console.log("Element:", element[0].innerText);
console.log("Element:", element[0].innerHTML);
*/

/*
************************************
Conteudo dos elementos
************************************
textContent
innerText
InnerHTML

getAttribute('input')
setAttribute('id', 'my-id')
setAttributeNames()
removeAttribute('id')
*/

//const element = document.getElementById("heading");
const element = document.querySelector("#heading");
//const element = document.getElementsByTagName("H1");
console.log(element);
console.log(element.textContent);
element.innerHTML = "<a href='#'>Pagina de lipe</a>";

/*
const element = document.querySelector("body");
console.log(element);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.innerText);
*/

/*
const element = document.querySelector("input");

console.log(element);
console.log(element.value);
element.value = "ferrari";
*/

/*
const element = document.querySelector("input");
element.setAttribute("id", "pwd");
console.log(element.getAttributeNames());
*/

//const element = document.querySelector("body");
//element.style.backgroundColor = "blue";

//const h1Element = document.querySelector("h1");
//h1Element.style.color = "white";
//h1Element.classList.add("colorH1");
//h1Element.classList.toggle("colorH1");

//console.log(h1Element.classList);

// parrentElement/ parrentNode
// childNodes
// lastChild / firstChild
// children

/*
console.log(element.parentElement);
console.log(element.parentNode);
console.log(element.childNodes);
console.log(element.lastChild);
console.log(element.firstChild);
console.log(element.children);
console.log(element.childNodes)
*/

// HTMLCollection / NodeList
// element.children
//element.childNodes.forEach((node) => console.log(node));

/*
const bodyElement = document.querySelector("body");
const divElement = document.createElement("ul");
//divElement.innerText = "Maria é dadinha";
// append /prepend
bodyElement.append(divElement);
//bodyElement.prepend(divElement);
console.log(divElement);

let element;

for (let i = 0; i < 8; i++) {
  element = document.createElement("li");
  element.innerText = `${i} - Item -${i}`;
  divElement.append(element);
}

const numLI = document.createElement("li");
//numLI.innerText = numbers[0];
//bodyElement.append(numLI);

// forEach()
// map()
// reduce()
// slice()
//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((num) => {
  element = document.createElement("li");
  element.innerText = num;
  bodyElement.append(element);
});
*/
