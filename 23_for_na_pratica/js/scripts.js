var lista = ['laranja', 'maçã', 'limão', 'abacate'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textLi = document.createTextNode(lista[i]);

    liFor.appendChild(textLi);

    listaNoBody[0].appendChild(liFor);

}
