// criar elemento
var el = document.createElement("h3");

el.classList = "testando_classe";

var texto = document.createTextNode("Este é o texto");

el.appendChild(texto);

console.log(el);

//selecionar elemento que quero trocar
var title
