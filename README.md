# password-generator
This is a password generator created with javascript

I started by creating a variable that is the desired password length. I had to use the Number property to convert the prompt input to a number so that I could evaluate it in a conditional. I have been writing console logs for each step to help determine the outcome and if my statements work.

I used const to set my global values. I created three different functions. writePassword sets an empty string that will eventually contain the generated password. It then gets the desired password length from the user and checks if it is in the range of 8 - 128.
It then calls to the second function, createUserString.

createUserString uses confirm messages to gather the preferences of character types in the users password that are then stored as a string in the variable userPickPool. It has a reset incase the user doesn't pick any character type. To do this we check if the userPickPool string is = ''. if so we prompt an alert and run the function again.

I was running into the error of returning an empty string with the variable userPickPool declared in the function when I would trigger a reset. I put the variable outside of the function and it worked. This is because once I ran through the series of confirms, it would set the value as '' the first time. It would change on the run through, but since the value was already set as '', at the end of the function, I would still have an empty string.

The last function generates a random number based off of the length of the argument. The argument being the desired password length.

The final function of writePassword is to return the passwordString to the password box on the HTML.


https://monacoglynn.github.io/password-generator/