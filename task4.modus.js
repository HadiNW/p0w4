function cariModus(arr) {
  var jumlah=[]
  var modus=arr[0];
  for(var i=0;i<arr.length;i++){
    var jumlahTemp=0;
    for(var j=0;j<arr.length;j++){
	if(arr[i]===arr[j]){
           jumlahTemp=jumlahTemp+1;
        }
     }
    jumlah.push(jumlahTemp);

  }


   //cek sama
  var sama=false;
  for(var i=1;i<jumlah.length;i++){
	if(jumlah[0]===jumlah[i]){
	sama=true;
        }
        else {
         sama=false;
         break;
        }
  }
  if(sama===true){
    return -1;
  }

  //indeks nilai maksimal
  console.log(jumlah)
  var maks=jumlah[0];
  var index=0;
  for (var i = 1; i < jumlah.length; i++) {
    if(jumlah[i]>maks){
      console.log(jumlah[i], maks)
     maks=jumlah[i]
      index=i;
    }
  }

return arr[index];
}

// TEST CASES
 console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1