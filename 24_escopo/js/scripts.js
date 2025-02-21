var x = 'Teste, escopo global.';

var y = 1;

console.log(x, y);

function teste() {
    
    var z = 'z';

    console.log(z);

}

teste();

function testando() {
    var x = 'Teste, escopo local.';

    console.log(x);
}

testando();

if(true) {

    var p = 'If global';

}

console.log(p);