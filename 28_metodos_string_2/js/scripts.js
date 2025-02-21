// toUpperCase toLowCase

var frase = 'frase a ser manipualada';

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

// trim

var nome = '             Leonardo        ';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(' '));

var tags = 'PHP, C#, Python, HTML, CSS, JS';

console.log(tags.split(', '));

var fraseDois = 'eu quero a ultima palavra teste desta frase de teste'

console.log(fraseDois.indexOf('teste'));
console.log(fraseDois.lastIndexOf('teste'));

var teste = fraseDois.slice(47, 52);

console.log(teste);
