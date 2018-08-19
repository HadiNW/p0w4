function totalDigitRekursif(angka) {
  var num = angka.toString();
  if (num.length === 0) {
      return 0
  }
  var number = parseInt(num[0]);
  var modif = num.substring(1); 
  return number + totalDigitRekursif(modif)
  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5