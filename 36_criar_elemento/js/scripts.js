//inserir elemnento no body
var novoP = document.createElement("p");

var text = document.createTextNode("Elemento de paragrafo criado");

novoP.appendChild(text);

console.log(novoP);

var body = document.querySelector("body");

console.log(body)

body.appendChild(novoP);

//inserir em um container
var containe = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);
