function mineCraft(tambang) {
  var harga = 0;
  for(var i=0; i<tambang.length; i++) {  
    if(tambang[i] === 'c') {
      harga += 20;
    }else if(tambang[i] === 'i') {
      harga += 30;
    }else if(tambang[i] === 's') {
      harga += 40;
    }else if(tambang[i] === 'd') {
      harga += 1000;
    }else if(tambang[i] === 'g') {
      harga += 80;
    }
  }
  if(harga === 0) {
    return 'Tidak ada mineral sama sekali';
  }else {
    return harga;
  }
}

console.log(mineCraft('#g####c##s')); //140
console.log(mineCraft('######w###q###')); //Tidak ada mineral sama sekali
console.log(mineCraft('#sdgicp##')); //1170
console.log(mineCraft('')); //Tidak ada mineral sama sekali