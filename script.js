var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRISTUVWXYZ';
var numbers = '1234567890';
var special = ' !"#$%&()*+,-./:;<=>?@[]^_`{}|~';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLength = Number(prompt('Choose a length between 8 and 128 characters.'));
  console.log(typeof passwordLength);
  console.log(passwordLength)

  if (passwordLength < 8) {
    console.log('opps try again')
    return writePassword();
  } else if (passwordLength > 128) {
    console.log('woah! too long')
    return writePassword();
  } else {
    console.log('you picked a good length!')
  }

  var passLow = confirm('Include lowercase letters?');
  if (passLow === true) {
    console.log('yes please, add lowercase letters');
  } else {
    console,
    log('i dont like lowercase letters')
  }


  //  passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);