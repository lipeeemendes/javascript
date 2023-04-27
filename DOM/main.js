const elementH1 = document.querySelector("h1");
console.log("Conteudo do elemento h1:", elementH1.innerText);
//==========================================

// Iremos utilizar os dados abaixo para substituir os nomes das garotas no DOM.
let girls = "Maria, Patricia, Fernanda, Lucia, Alice";
let candidatas = [];

// Seleciona todos os elementos LI do DOM.
const elementLi = document.querySelectorAll("li");
console.log(elementLi);

/// Substituir o conteudo dos elementos do DOm pela
// Array da Garotas
///================================================
let girlsArray = girls.split(",");

// Percorre a lista e armazena na array candidatas
elementLi.forEach(function (node, i) {
  candidatas.push(node.innerText);
  console.log(node.innerText, i);
  //node.innerText = girlsArray[i];
});

// Percoreu a lista com os nomes das garotas e
// reatribui o conteudo de cado no do NodeList,
// usando a propriedade  innerText
//============================================
girlsArray.forEach(function (girl, index) {
  elementLi[index].innerText = girl;
});
