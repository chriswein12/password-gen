// Assignment code here

// Adds initial array
var characters = [""]



// Main Function
var generatePassword = function() {

  //Function to obtain the user input and verify it is a number between 8 and 128
  var numChar = function() {

    var numberEntered = window.prompt("How many characters are needed for the password, please choose between 8 and 128."); 

    numberEntered = parseInt(numberEntered);
    console.log(numberEntered);

    if (numberEntered < 8 || numberEntered > 128 || numberEntered === null || numberEntered === '' || isNaN(numberEntered) ) {
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

  // Obtain values from prompts confirming lowercase, uppercase, number, and special character selections.
  lowercaseVal = window.confirm("Press OK if password requires lowercase letters.");
  uppercaseVal = window.confirm("Press OK if password requires uppercase letters.");
  numberVal = window.confirm("Press OK if password require numbers.");
  specialCharVal = window.confirm("Press OK if password require special characters.");
  

  // Checks to make sure at least one category was selected.
  if (!lowercaseVal && !uppercaseVal && !numberVal && !specialCharVal) {
    window.alert("Password needs to have one of the following: Lowercase, Uppercase, numbers, or special characters.");
    generatePassword();
  }

  // Pushes the selected values into the array.
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
    characters.push("!", "#", "&", "$", "%", "&", "*", "+", "@", "=", "?", "~", ">", "<", ":", ";", "-");
  }

  // Removes the first empty string element
  characters.shift();

  console.log(characters);

    //Function that creates the random password based off of the available array, and checks to make sure it has each required character type.
  var random = function() {

    var genPassword = "";
    
    // Creates a string based on how many characters are needed
    for (var i = 0; i < numChar; i++) {
      var randomChar = characters [Math.floor(Math.random() * characters.length)];
      genPassword += randomChar;
      console.log(randomChar);
    }

    console.log(genPassword);


    // Confirms password contains at least one lowercase value (if selected earlier)
    if (lowercaseVal) {
      
      for (var i = 0; i <= numChar;) {
        var lowerChecker = genPassword.charAt(i);

        if (lowerChecker === "a" ||
        lowerChecker === "b" ||
        lowerChecker === "c" ||
        lowerChecker === "d" ||
        lowerChecker === "e" ||
        lowerChecker === "f" ||
        lowerChecker === "g" ||
        lowerChecker === "h" ||
        lowerChecker === "i" ||
        lowerChecker === "j" ||
        lowerChecker === "k" ||
        lowerChecker === "l" ||
        lowerChecker === "m" ||
        lowerChecker === "n" ||
        lowerChecker === "o" ||
        lowerChecker === "p" ||
        lowerChecker === "q" ||
        lowerChecker === "R" ||
        lowerChecker === "s" ||
        lowerChecker === "t" ||
        lowerChecker === "u" ||
        lowerChecker === "v" ||
        lowerChecker === "w" ||
        lowerChecker === "x" ||
        lowerChecker === "y" ||
        lowerChecker === "z") {
          
          break;
        } else if (i < numChar) {
          i++;
        } else if (i = numChar) {
          return random();       

        } else {
          break;
        }
      }
    }

    // Confirms password contains at least one uppercase value (if selected earlier)
    if (uppercaseVal) {

      for (var i = 0; i <= numChar;) {
        var upperChecker = genPassword.charAt(i);

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
      
          break;
        } else if (i < numChar) {
          i++;
        } else if (i = numChar) {
          return random();       

        } else {
          break;
        }
      }
    }
      // Confirms password contains at least one number value (if selected earlier)
    if (numberVal) {
      for (var i = 0; i <= numChar;) {
        var numChecker = genPassword.charAt(i);
        
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
    
          break;
        } else if (i < numChar) {
          i++;
              
        } else if (i = numChar) {
          return random();       

        } else {
          break;
        }
      }
    }

          // Confirms password contains at least one special character value (if selected earlier)
    if (specialCharVal) {
      for (var i = 0; i <= numChar;) {
        var specialChecker = genPassword.charAt(i);

        if (specialChecker === "!" ||
        specialChecker === "#" ||
        specialChecker === "&" ||
        specialChecker === "$" ||
        specialChecker === "%" ||
        specialChecker === "&" ||
        specialChecker === "*" ||
        specialChecker === "+" ||
        specialChecker === "@" ||
        specialChecker === "=" ||
        specialChecker === "?" ||
        specialChecker === "~" ||
        specialChecker === ">" ||
        specialChecker === "<" ||
        specialChecker === ":" ||
        specialChecker === ";" ||
        specialChecker === "-") {
          
          break;
        } else if (i < numChar) {
          i++;
        } else if (i = numChar) {
          return random();       

        } else {
          break;
        }
      }
    }

    
    console.log(genPassword);

    random = genPassword;

    console.log(random);

    console.log(genPassword);

    return random;
  

  }

  random();


  console.log(random);

  generatePassword = random;

  console.log(generatePassword);

  return generatePassword;



  
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

