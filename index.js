// Assignment Code
var generateBtn = document.querySelector("#generate"); // this lets us select the generate password button

//these are my string with all possible characters for the password.
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = ' !#$%&()*+,-./:;<=>?@[]^_`{}|~';


// Write password to the #password input
function writePassword() {
    // let password = generatePassword(); // This runs our randomized loop that constructs our password.
    let passwordString = '';
    let passwordText = document.querySelector("#password"); // this allows us to select the password text box
    // this grabs the length of the desired password from the user.
    const passwordLength = Number(prompt('Please enter your desired password length between 8 - 128 characters.'));
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log('awesome! you picked ' + passwordLength)
    }
    let userInput = createUserString();
    for (let passwordIndex = 0; passwordIndex < passwordLength; passwordIndex++) {
        passwordString += userPickPool[rand(userPickPool.length)];
    }
    return passwordText.textContent = passwordString;

}


// this function will ask the user what character types they would like to include in their password and concat them together to create a userPick string 
let userPickPool = ''; // we declare this variable outside of the function so that when it loops we can still add to it.

function createUserString() {
    userPickPool = '';
    if (confirm('Would you like to include lowercase letters?')) {
        userPickPool += lower;
        console.log(userPickPool);
    }
    if (confirm('Would you like to include uppercase letters?')) {
        userPickPool += upper;
        console.log(userPickPool);
    }
    if (confirm('Would you like to include numbers?')) {
        userPickPool += numbers;
        console.log(userPickPool);
    }
    if (confirm('Would you like to include symbols?')) {
        userPickPool += symbols;
    }
    if (userPickPool === '') {
        alert('please pick at least one type.');
        createUserString();
    }
    return userPickPool
}

// this creates a random number that we will use to pick a character from the userPickPool
function rand(stringLength) {
    return Math.floor(Math.random() * stringLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// function testWhile() {
// let number = 0;
// while (number < 5) {
//     console.log(number);
//     // if (number === 3) console.log('whoa');
//     number++;
// }

// return number
// let testPool = createUserString();
// while (testPool === '') {
//     alert("yo, this is whack")
//     testPool = createUserString();
// }

// console.log(testPool)