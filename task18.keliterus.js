function kaliTerusRekursif(angka) {
  numString = angka.toString();

  if (numString.length === 1) {
      return numString;
  }
  var result=1;
  for(var i = 0; i < numString.length; i++){
    result *= Number(numString[i]);
  }
  
return kaliTerusRekursif(result)
} 

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6