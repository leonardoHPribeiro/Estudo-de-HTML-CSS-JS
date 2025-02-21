for(i = 10; i > 0; i--) {
    console.log(i);

    if(i === 5) {
        break;
    }
}

console.log('break');

var x = 10;

while(x < 100) {
    x += 10;

    if( x === 60 || x === 80) {
        console.log('CONTINUE')
        continue;
    }

    console.log('testando loop contínuo ' + x);
}
