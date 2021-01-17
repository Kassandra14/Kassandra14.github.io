// Assignment Code

//arrays of variables to be included in password
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var special = "!@#$%^&".split("")
var numbers = "123456789".split("")
//save value password length

//function to prompt user for password options
function getPasswordOptions() {
  //variable to store length of password from user input
  var length = parseInt(
    prompt("Please select pasword length (enter a value between 8 and 128 characters")  
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

//save info and validate characters entered
// Variable to store boolean regarding the inclusion of special characters
var hasSpecial = confirm(
  'Click OK to confirm including special characters.'
);

// Variable to store boolean regarding the inclusion of numeric characters
var hasNumbers = confirm(
  'Click OK to confirm including numeric characters.'
);

// Variable to store boolean regarding the inclusion of lowercase characters
var hasLowerCase = confirm(
  'Click OK to confirm including lowercase characters.'
);

// Variable to store boolean regarding the inclusion of uppercase characters
var hasUpperCase = confirm(
  'Click OK to confirm including uppercase characters.'
);

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (
  hasSpecial === false &&
  hasNumbers === false &&
  hasLowerCase === false &&
  hasUpperCase === false
) {
  alert('Must select at least one character type');
  return;
}


//Object to store user input
var passwordOptions = {
  length: length,
  hasSpecial: hasSpecial,
  hasNumbers: hasNumbers,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase
  };

return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  console.log(randElement);
  return randElement;

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }  

 // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  console.log(password);
}


// add event Listener to generate button
generateBtn.addEventListener("click", writePassword);