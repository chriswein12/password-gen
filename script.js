// Assignment code here

var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numChar = function() {

  var numberEntered = window.prompt("How many characters are needed for the password, please choose between 8 and 128."); 

  numberEntered = parseInt(numberEntered);
  console.log(numberEntered);

  if (numberEntered < 8 || numberEntered > 128 ) {
    window.alert("Please pick a number of characters between 8 and 128");
    numChar();
    }
  else {
    numChar = numberEntered; 
    return;
  }
}

var generatePassword = function() {
 debugger;
  numChar();
  console.log(numChar);

  var uppercaseVal = window.confirm("Press OK if password requires uppercase letters.");
  var numberVal = window.confirm("Press OK if password require numbers.");
  var specialCharVal = window.confirm("Does password require special characters.");

  if (uppercaseVal) {
    characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

  if (numberVal) {
    characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  if (specialCharVal) {
    characters.push("!", "#", "&", "$", "%", "&", "*", "+", "@", "=", "?", "~");
  }

  console.log(characters);

  for (var i = 0; i < numChar; i++) {
    var randomChar = characters [Math.floor(Math.random() * characters.length)];
    console.log(randomChar);
  }





}





var numbers = []

var requireNumbers = function() {

}

var requireLetters = function () {

}









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
