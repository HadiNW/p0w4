function countProfit(shoppers) {
   
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ]; 
     

    var sepatu = [];
    var baju = [];  
    var sweater = [];  
    
    if(shoppers.length === 0){
      return [];
    } 
    var totalSweater = 0;
    var totalSepatu = 0;
    var totalBaju = 0;  
    for(var i = 0; i < shoppers.length; i++){
        if(shoppers[i].product === 'Sepatu Stacattu'){

            if(listBarang[0][2] - shoppers[i].amount >= 0){
                listBarang[0][2] = listBarang[0][2] - shoppers[i].amount;
                totalSepatu += listBarang[0][1] * shoppers[i].amount;
                sepatu.push(shoppers[i].name); 
            }
        }else {
            if (listBarang[2][2] - shoppers[i].amount >= 0){
                listBarang[2][2] = listBarang[2][2] - shoppers[i].amount;
                totalSweater += listBarang[2][1] * shoppers[i].amount;
                sweater.push(shoppers[i].name);
            }
        }
    }

    var results = [
        {
            product : listBarang[0][0],
            shoppers : sepatu,
            leftOver : listBarang[0][2],
            totalProfit : totalSepatu
        },
        {
            product : listBarang[1][0],
            shoppers : baju,
            leftOver : listBarang[1][2],
            totalProfit : totalBaju
        },
        {
            product : listBarang[2][0],
            shoppers : sweater,
            leftOver : listBarang[2][2],
            totalProfit : totalSweater
        }
    ];
    

  return results;

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]