function changeMe(arr) {
  var people = []
  for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      var obj = {
        firstName: arr[i][j],
        lastName: arr[i][j],
        gender: arr[i][j],
        age: arr[i][j]
      }
    }
    people.push(obj)
  }
  console.log(people)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male','22']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""