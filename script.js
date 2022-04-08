// var lower = 'abcdefghijklmnopqrstuvwxyz';
// var upper = 'ABCDEFGHIJKLMNOPQRISTUVWXYZ';
// var numbers = '1234567890';
// var special = ' !"#$%&()*+,-./:;<=>?@[]^_`{}|~';

let groups = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRISTUVWXYZ', '1234567890', ' !#$%&()*+,-./:;<=>?@[]^_`{}|~'];

let choices = [null, null, null, null];

let userPick = null;

var password = ''


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLength = Number(prompt('Choose a length between 8 and 128 characters.'));
  console.log(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 120) { // this statement sets to conditions. the password must be between 8 and 120
    console.log('you picked a good length!');
    for (var i = 0; i < groups.length; i++) {
      choices[i] = confirm('include ' + groups[i] + '?');
    }
    // console.log(choices);
    // if (choices[0] && choices[1] && choices[2] && choices[3]) {
    //   userPick = groups[0].concat(groups[1], groups[2], groups[3]);
    //   console.log('you picked all choices')
    //   console.log(userPick);
    //   var password = ''
    //   for (var m = 0; m < passwordLength; m++) {
    //     var character = userPick[Math.floor(Math.random() * userPick.length)]
    //     password = password.concat(character);
    //     console.log(password);

    //   }
    // }
  }
}
generateBtn.addEventListener("click", writePassword);

function generateArray() {
  for (var i = 0; i < choices.length; i++) {
    if (choices[i]) {
      password = password.concact(groups[i])
    }
  }
  return password
}
// passwordText.value = password;



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword()