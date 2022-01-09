// Assignment code here


var password = ""
var lowerConf = "abcdefghijklmnopqrstuvwxyz"
var upperConf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberConf = "0123456789"
var specialConf = "!#$%&()*+,-./:;<=>?@[^_`{|}~"

var passwordRequirements = function() {
  passLength = function() {
    var passwordLength = window.prompt ("How long would you like your password to be?")
      passwordLength = parseInt(passwordLength);
    if (passwordLength < 8) {
      alert("Please use a number equal to or greater than 8.")
    } else if (passwordLength > 128) {
    alert("Please use a number equal or greater than 128")
    } else {
      return passwordLength;
    }
  }
  //Ask if password needs uppercase letters
    var uppercase = confirm ("Do you need uppercase letters in your password?")
      console.log(uppercase);
        if (uppercase = confirm) {
          uppercase = upperConf
        } else {
          uppercase = ""
        }
  //Ask if password needs lowercase letters
      var lowercase = confirm ("Do you need lowercase letters in your password?")
      console.log (lowercase);
      if (lowercase = confirm) {
        lowercase = lowerConf      
      } else {
        lowercase = ""
      }
    //Ask if password needs numbers
      var specialCharacter = confirm ("Do you need special characters?")
      console.log (specialCharacter);
      if (specialCharacter = confirm) {
        numbers = specialConf
      } else {
        specialCharacter = ""
      }
    //Ask if password needs numbers
      var numbers = confirm ("Do you need numbers in your password")
      console.log (numbers);
      if (numbers = confirm) {
        number = numberConf;
      } else {
        numbers = ""
      }
  password = upperConf + lowerConf + numberConf + specialConf; 
    return;
};


function gather() {
  var passwordArray = [];
  //make password an array
  var passwordArray = password.split("");
  //set the password length
  while (passwordArray.length < passLength) {
    passwordArray = passwordArray.concat(passwordArray);
  }

  //randomizer
  passwordArray = passwordArray.sort(() => Math.random() - 0.5);
  //password length
  passwordArray.length = length
  //make it into a string
  password = passwordArray.join(" ");
  return;
}

function generatePassword() {
  //collect password input
  passwordRequirements();
  //combine all characters
  gather();
  //password provided to user
  window.alert("Your new password is " + password);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);