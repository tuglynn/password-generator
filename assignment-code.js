const uppercaseLetterArray = charLookup(65, 90);
const lowercaseLetterArray = charLookup(97, 122);
const numberArray = charLookup(48, 57);
const symbolArray = charLookup(33, 47).concat(charLookup(58, 64), charLookup(91, 96), charLookup(123, 126));
var generateBtn = document.querySelector("#generate");


// this function will return arrays of letters, numbers, and symbols.
function charLookup(start, end) {
  let characterArray = [];
  for (let i = start; i <= end; i++) {
    characterArray.push(String.fromCharCode(i))
  }
  return characterArray;
  console.log(characterArray);
}
console.log(uppercaseLetterArray);
console.log(lowercaseLetterArray);
console.log(numberArray);
console.log(symbolArray);

/*this function will take in user input and create a new array.
this will return a string of what the user wants to use for their password. */

function generatePassword() {
  // step 1: get length from user input
  var passwordText = document.querySelector("#password")
  const userInputLength = Number(prompt('please enter a number between 8 - 128'))
  if (userInputLength >= 8 && userInputLength <= 128) { //checks if user input length is between the terms.
    console.log('great job. you picked ' + userInputLength);
    let passwordString = '';
    let arrayPool = createCharacterPool();

    //every time this loop is called, it will add a random character into the password string.
    for (let passwordIndex = 0; passwordIndex < userInputLength; passwordIndex++) {
      passwordString = passwordString + arrayPool[rand(arrayPool.length)];
    }
    return passwordText.textContent = passwordString;


  } else {
    return alert('make sure you choose the right length password.');
  }
}

function createCharacterPool() {
  let generalArray = [];
  if (confirm('would you like to include lowercase letters?')) {
    generalArray = generalArray.concat(lowercaseLetterArray);
    console.log(generalArray);
  } else {
    console.log(generalArray);
  }
  if (confirm('would you like uppercase letters?')) {
    generalArray = generalArray.concat(uppercaseLetterArray);
    console.log(generalArray);
  } else {
    console.log(generalArray);
  }
  if (confirm('would you like to include numbers?')) {
    generalArray = generalArray.concat(numberArray);
    console.log(generalArray);
  } else {
    console.log(generalArray);
  }
  if (confirm('would you like to include symbols?')) {
    generalArray = generalArray.concat(symbolArray);
    console.log(generalArray);
  }
  return generalArray
}
//this function expects a number to be returned from array length
function rand(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

generateBtn.addEventListener("click", generatePassword);

//this function will return an array of the users choice of characters to include in the password.






















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// var lower = 'abcdefghijklmnopqrstuvwxyz';
// var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var numbers = '1234567890'


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);