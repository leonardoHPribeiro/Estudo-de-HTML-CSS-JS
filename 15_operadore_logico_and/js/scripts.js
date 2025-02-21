var nome = 'João';
var idade = 16;

if (nome == 'João' && idade >= 16) {
    console.log('O jão pode entrar na aula de esgrima');
} else {
    console.log('acesso negado.');
}

if ((1 == 1 && 3 > 2 && 1 < 3) && true) {
    console.log('teste_1');
}

if ((1 == 1 && 3 > 2 && 1 < 3) && false) {
    console.log('teste_2');
}

if ((1 == 2) && 3 > 2 && 1 < 3 && true) {
    console.log('teste_3');
} else if (nome === 'João' && idade >= 16) {
    console.log('teste_3.0')
}