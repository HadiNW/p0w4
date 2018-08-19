function changeMe(arr) {
  var people = []
  var temp = []
  var obj = {}
  var year = new Date().getFullYear();

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      //console.log(j, i)
      obj.firstName = arr[i][0]
      obj.lastName = arr[i][1]
      obj.gender = arr[i][2]
      if ( arr[i][3] === undefined) {
        obj.age = 'Invalid Birth Year'
      } else {
        obj.age = year - arr[i][3]
      }     
    }
    people.push(obj)       
    var obj = {}   
  }

  for (var i = 0; i < people.length; i++) {
    console.log(`${i+1}. ${people[i].firstName} ${people[i].lastName}: `)
    console.log(people[i])
  }

  
  
}




// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""