function shoppingTime(memberId, money) {
    
    var list=['memberId','money','listPurchased','changeMoney']
    var barang=[
        ['Sepatu brand Stacattu',1500000],
        ['Baju brand Zoro',500000],
        ['Baju brand H&N',250000],
        ['Sweater brand Uniklooh',175000],
        ['Casing Handphone',50000]
    ]
    var hasil = {};
    var arraySortedBarang =sort(barang);
   
    if(memberId === '' || memberId === undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else{
            hasil[list[0]]=memberId;           
           
            if(money < 50000) {
                return "Mohon maaf, uang tidak cukup"
            }
            else{
                hasil[list[1]] = money
                var changeMoney = money;
                hasil[list[2]] = [];
                for(var i = 0; i < arraySortedBarang.length; i++){
                    if(changeMoney >= arraySortedBarang[i][1]){
                        hasil[list[2]].push(arraySortedBarang[i][0]);
                        changeMoney = changeMoney-arraySortedBarang[i][1]
                    }
                }
               
                hasil[list[3]]=changeMoney;
            }
        }
    return hasil;
}
function sort(arr){
    for(var i = 0; i <arr.length; i++){

      for(var j = 0; j < arr.length-1 ;j++){
        if(arr[j][1] < arr[j+1][1]){
            temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
          }
      }

    }
    return arr;
  }
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja