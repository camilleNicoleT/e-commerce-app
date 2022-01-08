// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt ("What is the length of your password?")
console.log(passwordLength)
if (passwordLength < 8) {
  alert("Please use a number equal to or greater than 8.")
} else if (passwordLength > 128) {
alert("Please use a number equal or greater than 28")
} else {
  var uppercase = confirm ("Do you need uppercase letters in your password?")
  console.log(uppercase)
    if ()
  var lowercase = confirm ("Do you need lowercase letters in your password?")
  console.log (lowercase)
  var specialCharacter = confirm ("Do you need special characters?")
  console.log (specialCharacter)
  
  var numbers = confirm ("Do you need numbers in your password")
  console.log (numbers);
}

//use inner html or innertext

for (i = 0; i < passwordLength; i++){
//1.math.floor (math.random) use the length of th e element array to determine the lower and upper bound
//2. another for loop using the math.floor get the value of the element at the randomly generated index. it will be the value that i got from step 1
//a. can create a string and just keep adding to the string or create another array after it generates a password
}
}
// return generatePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//"Your password is " + password 