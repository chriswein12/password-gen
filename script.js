// Assignment code here

var characters = [""]

var generatePassword = function() {

  var numChar = function() {

    var numberEntered = window.prompt("How many characters are needed for the password, please choose between 8 and 128."); 
  
    numberEntered = parseInt(numberEntered);
    console.log(numberEntered);
  
    if (numberEntered < 2 || numberEntered > 128 || numberEntered === null || numberEntered === '' || isNaN(numberEntered) ) {
      window.alert("Please pick a number of characters between 8 and 128");
      numChar();
      }
    else {
      numChar = numberEntered; 
      return;
    }
  }

  numChar();
  console.log(numChar);

  var lowercaseVal = window.confirm("Press OK if password requires lowercase letters.");
  var uppercaseVal = window.confirm("Press OK if password requires uppercase letters.");
  var numberVal = window.confirm("Press OK if password require numbers.");
  var specialCharVal = window.confirm("Press OK if password require special characters.");

  if (!lowercaseVal && !uppercaseVal && !numberVal && !specialCharVal) {
    window.alert("Password needs to have one of the following: Lowercase, Uppercase, numbers, or special characters.");
    return generatePassword();
  }

  if (lowercaseVal) {
    characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }

  if (uppercaseVal) {
    characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

  if (numberVal) {
    characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  if (specialCharVal) {
    characters.push("!", "#", "&", "$", "%", "&", "*", "+", "@", "=", "?", "~");
  }

  characters.shift();

  console.log(characters);

  var random = function() {

    var password = "";

    for (var i = 0; i < numChar; i++) {
      var randomChar = characters [Math.floor(Math.random() * characters.length)];
      password += randomChar;
      console.log(randomChar);
    }

    console.log(password);

    debugger;

    if (lowercaseVal) {
      
      for (var i = 0; i < numChar;) {
        var lowerChecker = password.charAt(i);

        if (lowerChecker = characters) {
          alert("True");
          break;
        } else if (i < numChar) {
          i++;
        }
        if (i >= numChar) {  
          random();
        }
      }
    }    

    if (uppercaseVal) {

      for (var i = 0; i < numChar;) {
        var upperChecker = password.charAt(i);

        if (upperChecker === "A" ||
         upperChecker === "B" ||
         upperChecker === "C" ||
         upperChecker === "D" ||
         upperChecker === "E" ||
         upperChecker === "F" ||
         upperChecker === "G" ||
         upperChecker === "H" ||
         upperChecker === "I" ||
         upperChecker === "J" ||
         upperChecker === "K" ||
         upperChecker === "L" ||
         upperChecker === "M" ||
         upperChecker === "N" ||
         upperChecker === "O" ||
         upperChecker === "P" ||
         upperChecker === "Q" ||
         upperChecker === "R" ||
         upperChecker === "S" ||
         upperChecker === "T" ||
         upperChecker === "U" ||
         upperChecker === "V" ||
         upperChecker === "W" ||
         upperChecker === "X" ||
         upperChecker === "Y" ||
         upperChecker === "Z") {
          alert("True")
          break;
        } else if (i < numChar) {
          i++;
        }
        if (i >= numChar) {  
          random();
        }
      }
    }

    if (numberVal) {
      for (var i = 0; i < numChar;) {
        var numChecker = password.charAt(i);

        if (numChecker === "0" ||
          numChecker === "1" ||
          numChecker === "2" ||
          numChecker === "3" ||
          numChecker === "4" ||
          numChecker === "5" ||
          numChecker === "6" ||
          numChecker === "7" ||
          numChecker === "8" ||
          numChecker === "9") {
          alert("True")
          break;
        } else if (i < numChar) {
          i++;
        } 
        if (i >= numChar) {
          random();
        }
      }
    }
  }

  random();



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
