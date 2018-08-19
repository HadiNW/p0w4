function cariModus(arr) {
  //start
  var modus = arr[0];
  var temp = []
  
  for(var i = 0;i < arr.length; i++){
    var temp2 = 0;
    for(var j = 0; j < arr.length; j++){
	if(arr[i] === arr[j]){
           temp2++;
        }
     }
    temp.push(temp2);

  }
  // check is same?
  var isSame = false;
  for(var i = 1; i < temp.length; i++){
    if(temp[0] === temp[i]){
      isSame = true;
    } else {
      isSame = false;
      break;
    }
  }
  if(isSame === true){
    return -1;
  }  
 
  var count = 0;
  var max = temp[0];
  for (var i = 1; i < temp.length; i++) {
    if(temp[i] > max){
      max = temp[i]
      count = i;
    }
  }

  return arr[count];

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1