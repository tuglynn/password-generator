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



  //  passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);