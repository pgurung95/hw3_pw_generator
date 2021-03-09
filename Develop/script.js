// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// random function generator data type - Model
const randomFunc = {
  lower: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  upper: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  number: function () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  symbol: function () {
    var symbols = "!@#$%^&*(){}[]=<>/,'."
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
};

function generatePassword() {
  var lowerCasedPrompt = confirm ("Do you want lowercase letters?");
  var upperCasedPrompt = confirm ("Do you want uppercase letters?");
  var numberPrompt = confirm ("Do you want numbers?");
  var symbolPrompt = confirm ("Do you want symbols?");

 // keep asking the user correct password length, this will run untill
// the user provides the correct value
while(true){
    var pwLengthChoice = prompt("Enter Password length between 8 and 128");
    var pwLength = parseInt(pwLengthChoice);
    if(isNaN(pwLength)){
      alert("Please enter a numeric value");
      continue;
    }
    
    if (pwLength < 8){
        alert("Please enter a value greater than 8.");
    } else if (pwLength > 128) {
        alert("Please enter a value less than 128.");
    } else {
      break;
    }
 }


  // if user doesn't pick any character set, we use lowercase as default
  if(!(lowerCasedPrompt || upperCasedPrompt || numberPrompt || symbolPrompt)){
    lowerCasedPrompt = true;
    }


    // store password
  var password = "";
    // creates a random character till we reach the desired length of password
  for(var i = 0; i < pwLength; i++){
      // if user selects lower
  if(lowerCasedPrompt && password.length < pwLength){
          password += randomFunc.lower();
      }
      // if user selects upper
  if(upperCasedPrompt && password.length < pwLength) {
          password += randomFunc.upper();
      }
      // if user selects number
  if(numberPrompt && password.length < pwLength) {
          password += randomFunc.number();
      }
      // if user selects symbol
  if(symbolPrompt && password.length < pwLength) {
          password += randomFunc.symbol();
      }
    }

  // check the length of the password
  console.log(password.length);
  console.log(password);
  console.log(password.split('').sort(function(){return 0.5-Math.random()}).join(''));
  // return randomly generated password after shuffle to avoid our pattern
  // lowercase , 
  return password.split('').sort(function(){return 0.5-Math.random()}).join('');
}

