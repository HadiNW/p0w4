function changeVocals (str) {
    var text = '';
    var character = ''
    for (var i = 0; i < str.length; i++) {
        text = str[i]
        //str +=   String.fromCharCode(kata[i].charCodeAt() + 1)
        if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            text = String.fromCharCode(str[i].charCodeAt() + 1)
            
        } else if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
            text = String.fromCharCode(str[i].charCodeAt() + 1)            
        }
      

        character += text
    }
   
   return character
   
}

function reverseWord (str) {
var character = '';
  for (var i = str.length - 1; i >= 0; i--) {
    character += str[i]
  }
  return character
}

function setLowerUpperCase (str) {
    var character = ''
    var text = ''
    for (var i = 0; i < str.length; i++) {
        text = str[i]
        if (str[i] === str[i].toUpperCase()) {
            text = str[i].toLowerCase()
        } else {
            text = str[i].toUpperCase()
        }
        character += text;
      }
      return character;
}

function removeSpaces (str) {
    var character ='';
    var text = '';
    for (var i = 0; i < str.length; i++) {
       text = str[i];
       if (str[i] === ' ') {
           text = ''
       }
       character += text
      }

      return character;
}

function passwordGenerator (name) {
  if (name.length <= 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var vocals = changeVocals(name)
  var reverses = reverseWord(vocals)
  var lowerUpper = setLowerUpperCase(reverses)
  return removeSpaces(lowerUpper);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'