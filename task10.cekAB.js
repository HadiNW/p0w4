function checkAB(str) {
  var benar = null;
  for (var i = 0; i < str.length; i++) {
   
    if (str[i] === 'a' || str[i] === 'b') {
        var count = 0;
       
       // console.log(count , 'xx')    
    }
   
    if ((str[i] === 'b' || str[i] === 'a') && count === 4) {
        //console.log(count, 'ini b', 'horee')
        benar = true
    } 
    count++;
    
   // console.log('ini adalah flow', str[i], count)
   
  }
  if (benar) {
     benar = true;
  } else{
      benar = false
  }
  
  return benar
 
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false