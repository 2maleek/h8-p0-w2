// NO 1
var i = 0;

console.log('LOOPING PERTAMA');
while(i < 20) {
  i+= 2;
  console.log(i + ' - I love coding');
}

i = 20;
console.log('LOOPING KEDUA');
while(i > 0) {
  console.log(i+ ' - I will become fullstack developer');
  i-= 2;
}


// NO 2
console.log('LOOPING PERTAMA');
for(i=1; i<=20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(i=20; i>0; i--) {
  console.log(i + ' - I will become fullstack developer');
}



// NO 3
for(var counter=1; counter<=100; counter++ ) {
  if(counter % 2 === 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}


for(counter=1; counter<=100; counter+= 2) {
  counter % 3 === 0 ? console.log(counter + ' Kelipatan 3') : console.log('');
}

for(counter=1; counter<=100; counter+= 5) {
  counter % 6 === 0 ? console.log(counter + ' Kelipatan 6') : console.log('');
}

for(counter=1; counter<=100; counter+= 9) {
  counter % 10 === 0 ? console.log(counter + ' Kelipatan 10') : console.log('');
}