//NO 1
var rows1 = 5, rows2 = 5, rows3 = 5;

for(var i=1; i<=rows1; i++) {
    console.log('*');
}


//NO 2
for(var i=1; i<=rows1; i++) {
    for(var j=1; j<=rows2; j++){
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}

//NO 3
for(var i=1; i<=rows3; i++) {
    for(var j=1; j<=i; j++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}