function hitungHuruf(kata) {
 //new variabel -> split
 var words =[];
 var tmp=''
 for (var i = 0; i < kata.length; i++) {
   if(kata[i] === ' '){
     words.push(tmp);
     tmp = ''
   }
   else{
     tmp = tmp + kata[i]
   }
 }
 words.push(tmp);

// start counter loop
 var jumlah = [];
 for(var i = 0; i<words.length;i++){
   var tmp = 0;
   for(var j = 0; j < words[i].length; j++){
     for(var k = 0;k < words[i].length;k++){
       if(words[i][j] === words[i][k] && j !== k){
         tmp = tmp + 1
       }
     }
   }
   jumlah.push(tmp / 2);
 }
 // end counter
 
 var max = jumlah[0]
 var index = 0;
 for(var i = 1;i < jumlah.length; i++){
   if(jumlah[i] > max){
     max = jumlah[i]
     index = i
   }
 }

return words[index];


}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau