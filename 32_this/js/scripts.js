var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {

    nome: 'leonardo',
    idade: 21,
    falar: function() {
        console.log('Olá Mundo');
    },
    dizerNome: function() {
        console.log('meu nome é ' + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr ' + this.nome;
    },

};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log('Olá ' + sdc);