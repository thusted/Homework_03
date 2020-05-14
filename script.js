// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create array containing lowercase alphabet
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create array containing uppercase alphabet
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//create array containing numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//created array containing special characters
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", ".", "?"];

//write a function that prompts user to answer a series of questions to set password parameters
function generatePassword () {
  var password = "";

  //prompt to determine password length
  var passwordLength = prompt("How many characters would you like your password to be?");

  //password must be between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password length that is greater than 8 or less than 128.");
    var passwordLength = prompt("How many characters would you like your password to be?");
  }

  //a series of confirms to set password character types
  var isLowercase = confirm("Would you like to have lowercase characters in your password?");

  var isUppercase = confirm("Would you like to have uppercase characters in your password?");

  var isNumbers = confirm("Would you like to have numbers in your password?");

  var isSpecial = confirm("Would you like to have special characters in your password?");

  //password must contain at least one character type
  if (isLowercase === false && isUppercase === false && isNumbers === false && isSpecial === false) {
    alert("Password must contain at least one character type.");

    var isLowercase = confirm("Would you like to have lowercase characters in your password?");

    var isUppercase = confirm("Would you like to have uppercase characters in your password?");

    var isNumbers = confirm("Would you like to have numbers in your password?");

    var isSpecial = confirm("Would you like to have special characters in your password?");
  }

  //for a random password only comprised of lowercase letters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === false && isNumbers === false && isSpecial === false) {
    for (var i = 0; i <= passwordLength; i++) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    return password;
  }

  //for a random password only comprised of uppercase letters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === true && isNumbers === false && isSpecial === false) {
    for (var i = 0; i <= passwordLength; i++) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    return password;
  }

  //for a random password only comprised of numbers
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === false && isNumbers === true && isSpecial === false) {
    for (var i = 0; i <= passwordLength; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return password;
  }

  //for a random password only comprised of special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === false && isNumbers === false && isSpecial === true) {
    for (var i = 0; i <= passwordLength; i++) {
      password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase and uppercase letters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === true && isNumbers === false && isSpecial === false) {

    //create a new array comprised of lowercase and uppercase arrays
    var lowerAndUppercase = lowercase.concat(uppercase);

    for (var i = 0; i < passwordLength; i++) {
      password += lowerAndUppercase[Math.floor(Math.random() * lowerAndUppercase.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase letters and numbers
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === false && isNumbers === true && isSpecial === false) {

    //create a new array comprised of lowercase and number arrays
    var lowercaseAndNumbers = lowercase.concat(numbers);

    for (var i = 0; i < passwordLength; i++) {
      password += lowercaseAndNumbers[Math.floor(Math.random() * lowercaseAndNumbers.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase letters and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === false && isNumbers === false && isSpecial === true) {

    //create a new array comprised of lowercase and special character arrays
    var lowercaseAndSpecial = lowercase.concat(specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += lowercaseAndSpecial[Math.floor(Math.random() * lowercaseAndSpecial.length)];
    }
    return password;
  }

  //for a random password only comprised of uppercase letters and numbers
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === true && isNumbers === true && isSpecial === false) {

    //create a new array comprised of uppercase and number arrays
    var uppercaseAndNumbers = uppercase.concat(numbers);

    for (var i = 0; i < passwordLength; i++) {
      password += uppercaseAndNumbers[Math.floor(Math.random() * uppercaseAndNumbers.length)];
    }
    return password;
  }

  //for a random password only comprised of uppercase letters and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === true && isNumbers === false && isSpecial === true) {

    //create a new array comprised of uppercase and special character arrays
    var uppercaseAndSpecial = uppercase.concat(specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += uppercaseAndSpecial[Math.floor(Math.random() * uppercaseAndSpecial.length)];
    }
    return password;
  }

  //for a random password only comprised of numbers and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === false && isNumbers === true && isSpecial === true) {

    //create a new array comprised of numbers and special character arrays
    var numbersAndSpecial = numbers.concat(specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += numbersAndSpecial[Math.floor(Math.random() * numbersAndSpecial.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase letters, uppercase letters, and numbers
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === true && isNumbers === true && isSpecial === false) {

    //create a new array comprised of lowercase, uppercase, and number arrays
    var lowerUppercaseAndNumbers = lowercase.concat(uppercase, numbers);

    for (var i = 0; i < passwordLength; i++) {
      password += lowerUppercaseAndNumbers[Math.floor(Math.random() * lowerUppercaseAndNumbers.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase letters, uppercase letters, and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === true && isNumbers === false && isSpecial === true) {

    //create a new array comprised of lowercase, uppercase, and special character arrays
    var lowerUppercaseAndSpecial = lowercase.concat(uppercase, specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += lowerUppercaseAndSpecial[Math.floor(Math.random() * lowerUppercaseAndSpecial.length)];
    }
    return password;
  }

  //for a random password only comprised of lowercase letters, numbers, and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === false && isNumbers === true && isSpecial === true) {

    //create a new array comprised of lowercase, numbers, and special character arrays
    var lowercaseNumbersAndSpecial = lowercase.concat(numbers, specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += lowercaseNumbersAndSpecial[Math.floor(Math.random() * lowercaseNumbersAndSpecial.length)];
    }
    return password;
  }

  //for a random password only comprised of uppercase letters, numbers, and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === false && isUppercase === true && isNumbers === true && isSpecial === true) {

    //create a new array comprised of uppercase, number, and special character arrays
    var uppercaseNumbersAndSpecial = uppercase.concat(numbers, specialCharacters);

    for (var i = 0; i < passwordLength; i++) {
      password += uppercaseNumbersAndSpecial[Math.floor(Math.random() * uppercaseNumbersAndSpecial.length)];
    }
    return password;
  }

  //for a random password comprised of lowercase letters, uppercase letters, numbers, and special characters
  if (passwordLength >= 8 && passwordLength <= 128 && isLowercase === true && isUppercase === true && isNumbers === true && isSpecial === true) {

    //create a new array comprised of lowercase, uppercase, number, and special character arrays
    var allChar = lowercase.concat(uppercase, numbers, specialCharacters);
    
    for (var i = 0; i < passwordLength; i++) {
      password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    return password;
  }
}

