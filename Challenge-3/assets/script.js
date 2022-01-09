// Assignment code here
var password = ""

var lowerConfirm = ["abcdefghijklmnopqrstuvwxyz"]
var upperConfirm = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numberConfirm = ['0123456789']
var specialConfirm = ["!#$%&()*+,-./:;<=>?@[^_`{|}~"]
var passwordLength = ""
var wordBank = [];

var inputConfirmed = function(choice) {
  console.log(choice);
  if (choice == "upper") {
    wordBank = wordBank.concat (upperConfirm) 
  } 
  if (choice == "lower") {
    wordBank = wordBank.concat (lowerConfirm)
  }
  if (choice == "special") {
    wordBank = wordBank.concat (specialConfirm)
  }
  if (choice == "numbers") {
    wordBank = wordBank.concat (numberConfirm)
  }
//if any of the passwordRequirements are confirmed
 console.log(wordBank.join(""));
};


var passwordRequirements = function() {
  passLength = function() {
    passwordLength = window.prompt ("How long would you like your password to be?");
      passwordLength = parseInt(passwordLength);
    
    if (passwordLength < 8) {
      alert("Please use a number equal to or greater than 8.")
      return passLength();
    } else if (passwordLength > 128) {
    alert("Please use a number equal or greater than 128")
      return passLength();
    } else {
      console.log(passwordLength);
      return passwordLength;
    }
  }
  passLength();
  //Ask if password needs uppercase letters
    var uppercase = window.confirm ("Do you need uppercase letters in your password?")
     console.log(uppercase);
        if (uppercase == true) {
           inputConfirmed("upper");
        // } else {
        //   uppercase = ""
        }
  //Ask if password needs lowercase letters
    var lowercase = window.confirm ("Do you need lowercase letters in your password?")
     console.log (lowercase);
      if (lowercase == true) {
        inputConfirmed("lower");
      } 
      // else {
      //  lowercase = ""
      
    //Ask if password needs numbers
    var specialCharacter = window.confirm ("Do you need special characters?")
     console.log (specialCharacter);
      if (specialCharacter == true) {
        inputConfirmed('special')
      }
      //  else {
      //   specialCharacter = "";
      // }
    //Ask if password needs numbers
      var numbers = window.confirm ("Do you need numbers in your password")
    console.log (numbers);
      if (numbers== true) {
        inputConfirmed("numbers")
      } 
};


function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = getRandomString(passwordLength); 
};
/**
 * 
 * @param {number} length This is where we pass in password along with random string information
 * @returns {string}
 */
function generatePassword() {
  //collect password input
  passwordRequirements();
  getRandomString();
  //password provided to user
  window.alert("Your unique password is " + password);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function getRandomString(length) {
  var randomChars = wordBank.join("")
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
};
