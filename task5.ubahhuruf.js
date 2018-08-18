function ubahHuruf(kata) {   
    var str = ''
    for (var i = 0; i < kata.length; i++) {
        str +=   String.fromCharCode(kata[i].charCodeAt() + 1)
    }
   
   return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu