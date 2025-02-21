let pessoa = {

    nome: 'leonardo',
    idade: 21,
    falar: function() {
        console.log('Olá Mundo');
    },
    soma: function(a, b) {
        return a + b;
    },

};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);
