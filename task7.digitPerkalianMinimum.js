function digitPerkalianMinimum(angka) {  

  var numbers =[];
  var digits=[];

  for(var i = 1; i < (angka+1); i++){
    for(var j = 1; j < (angka+1); j++){
      if(i * j === angka){
        numbers.push([i,j]);
      }
    }
  }

  if(numbers.length !== 1){
    for(var j = 0; j < numbers.length; j++){
      var temp = numbers[j];
       for(var i = 0; i < numbers.length; i++){
        if(temp[0] === numbers[i][1] &&  temp[1] === numbers[i][0]){
          numbers.splice(i,1)
        }
      }
    }
 }
   
  for(var i = 0; i < numbers.length; i++){
    var count=0;
    for(var j = 0; j < numbers[i].length; j++){
      var tmp = numbers[i][j].toString();
      for(var k = 0;k < tmp.length;k++){
        count++;
      }
    }digits.push(count);
  }
 
  var minimum = digits[0];
  for(var i = 1; i < digits.length; i++){
    if(digits[i] < minimum){
      minimum = digits[i]
    }
  }

  return minimum;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

