function sorting(arrNumber) {
  return arrNumber.sort(function(x, y){
    return y-x;
  })
}

function getTotal(arrNumber) {  
   var count = 1;
   var awal = arrNumber[0];
   for(var i = 1; i < arrNumber.length; i++){
    if(arrNumber[0] === arrNumber[i]){
      count = count+1;
     }
   }
   var result = `angka paling besar adalah ${awal} dan jumlah kemunculan sebanyak ${count} kali`;

   if(arrNumber.length === 0) {
     return ''
    } else {
    return result;
  }
}


function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''