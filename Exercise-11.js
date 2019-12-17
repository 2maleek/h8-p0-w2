function balikKata(kata) {
    jIndex = kata.length;
    var balik=[];
    for(var i=0; i<=jIndex; i++) {
        balik[i] = kata[jIndex-i];
    }
    return balik.join('');
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS