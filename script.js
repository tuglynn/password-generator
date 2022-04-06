// var lower = 'abcdefghijklmnopqrstuvwxyz';
// var upper = 'ABCDEFGHIJKLMNOPQRISTUVWXYZ';
// var numbers = '1234567890';
// var special = ' !"#$%&()*+,-./:;<=>?@[]^_`{}|~';

let groups = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRISTUVWXYZ', '1234567890', ' !"#$%&()*+,-./:;<=>?@[]^_`{}|~'];

let choices = [null, null, null, null];

let userPick = null;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLength = Number(prompt('Choose a length between 8 and 128 characters.'));
  console.log(typeof passwordLength);
  console.log(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 120) { // this statement sets to conditions. the password must be between 8 and 120
    console.log('you picked a good length!');
    for (var i = 0; i < groups.length; i++) {
      choices[i] = confirm('include ' + groups[i] + '?');
    }
    console.log(choices);
    if (choices[0] && choices[1] && choices[2] && choices[3]) {
      userPick = groups[0].concat(groups[1], groups[2], groups[3]);
      console.log('you picked all choices')
      console.log(userPick);
    } else if (choices[0] && choices[1] && choices[2] && !choices[3]) {
      userPick = groups[0].concat(groups[1], groups[2]);
      console.log('you picked everything except special characters');
      console.log(userPick);
    } else if (choices[0] && choices[1] && !choices[2] && !choices[3]) {
      userPick = groups[0].concat(groups[1]);
      console.log(userPick);
    }

  }
}





// passwordText.value = password;

writePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());