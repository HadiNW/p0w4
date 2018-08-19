var barang = [
    {
        nama: 'Sepatu brand Stacattu',
        harga: 1500000
    },
    {
        nama: 'Baju brand Zoro',
        harga: 500000
    },
    {
        nama: 'Baju brand H&N',
        harga: 250000
    },
    {
        nama: 'Sweater brand Uniklooh',
        harga: 175000
    },
    {
        nama: 'Casing Handphone',
        harga: 50000
    }        
]
var sortBarang = sort(barang, 60000);

console.log(sortBarang)

function sort(arr, num){
    for(var i=0; i<arr.length;i++){
      for(var j=0;j<arr.length-1;j++){
        if(arr[j][1]<arr[j+1][1]){
            temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp
          }
      }
    }
    return arr;
}