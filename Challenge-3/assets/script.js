// Assignment code here
var password = ""
var lowerConfirm = ["abcdefghijklmnopqrstuvwxyz"]
var upperConfirm = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numberConfirm = ['0123456789']
var specialConfirm = ["!#$%&()*+,-./:;<=>?@[^_`{|}~"]

var passwordRequirements = function(password, lowerConfirm, upperConfirm, specialConfirm) {
  passLength = function() {
    var passwordLength = window.prompt ("How long would you like your password to be?");
      passwordLength = parseInt(passwordLength);
    
    if (passwordLength < 8) {
      alert("Please use a number equal to or greater than 8.")
      return passLength();
    } else if (passwordLength > 128) {
    alert("Please use a number equal or greater than 128")
      return passLength();
    } else {
      return passwordLength;
    }
  }
  passLength();
  //Ask if password needs uppercase letters
    var uppercase = window.confirm ("Do you need uppercase letters in your password?")
     // console.log(uppercase);
        if (uppercase) {
          uppercase = upperConfirm
        } else {
          uppercase = ""
        }
  //Ask if password needs lowercase letters
    var lowercase = window.confirm ("Do you need lowercase letters in your password?")
     // console.log (lowercase);
      if (lowercase) {
        lowercase = lowerConfirm      
      } else {
        lowercase = ""
      }
    //Ask if password needs numbers
    var specialCharacter = window.confirm ("Do you need special characters?")
     // console.log (specialCharacter);
      if (specialCharacter) {
        specialCharacter = specialConfirm
      } else {
        specialCharacter = "";
      }
    //Ask if password needs numbers
      var numbers = window.confirm ("Do you need numbers in your password")
    //  console.log (numbers);
      if (numbers) {
        numbers = numberConfirm;
      } else {
        numbers = "";
      }
      
password = upperConfirm + lowerConfirm + numberConfirm + specialConfirm; 
    return;
};


function gather() {
  var passwordArray = [];
  //make password an array
  var passwordArray = password.split("");
  //set the password length
  while (passwordArray.length < length) {
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