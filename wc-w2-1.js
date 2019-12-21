function lostNumbers(first, second, third) {
    if(typeof first !== 'number' || typeof second !== 'number' || typeof third !== 'number') {
        return 'invalid input';
    }
    var terbesar, terkecil, lost=[];
    for(var i=0; i<3; i++) {
        if(first>second && first>third) {
            terbesar = first;
        }else if(second>first && second>third) {
            terbesar = second;
        }else{
            terbesar = third;
        }

        if(first<second && first<third) {
            terkecil = first;
        }else if(second<first && second<third) {
            terkecil = second
        }else{
            terkecil = third;
        }

        //angka tengah
    }
     // blok ini udah bener
    var counter = terkecil+1, counterLost=0;
    while(counter < terbesar) {
        if(counter !== first && counter!== second && counter !== third) {
            lost[counterLost] = counter;
            counterLost++;
        }
        counter++;
    }
    if(lost[0] === undefined) {
        return 'Tidak ada angka sama sekali';
    }else{
        return '' + lost;
    }
}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali