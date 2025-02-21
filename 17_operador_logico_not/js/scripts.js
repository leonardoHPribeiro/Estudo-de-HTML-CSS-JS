if (true) {
    console.log('true');
}

if (!true) {
    console.log('fake true');
}

if (false) {
    console.log('false');
}

if (!false) {
    console.log('fake false');
}

var nome = 'Leonardo';

// Inversão de valores

if (!(nome == 'Leonardo')) {
    console.log('true sobreposto por falso');
}

if (!(nome == 'Pedro')) {
    console.log('falso sobreposto por true');
}