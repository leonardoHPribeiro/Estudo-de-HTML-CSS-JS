var obj = {
    nome: 'Leonardo',
    idade: 21,
    profissao: 'undefined',
    estarTrabalhando: false,
    estarEstudando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log('o meu nome é' + ' ' + obj.nome);

obj.nome = 'Zé';

console.log(obj.nome);

console.log(obj);

obj.graduacao = false;

console.log(obj);
