// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0,1,2,3,4,5,6,7,8,9]
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '.', '/', ',', ';', '<', '>', '?', ':', '|', '+', '_', '`', '~']
// let lowercaseindex = Math.floor(Math.random()*26);
let builtarray = []
let generatedLetterIndex = Math.floor(Math.random()*lowercase.length);
// generate num between 0-10 with no decimal
// Math.floor(Math.random()*10)
let confirmUpper = (confirm("Do you want your password to contain uppercase letters?"))
let confirmLower = (confirm("Do you want your password to contain lowercase letters?"))
let confirmNumber = (confirm("Do you want your password to contain numbers?"))
let confirmSpecial = (confirm("Do you want your password to contain special characters?"))

function generatePassword(){
  
if (confirmUpper){
  builtarray = [...builtarray, ...uppercase]
console.log(builtarray)
}
if (confirmLower){
  builtarray = [...builtarray, ...lowercase]
 console.log(builtarray);
}

if (confirmNumber){
  builtarray = [...builtarray, ...numbers]
  console.log(builtarray);

}
if (confirmSpecial){
  builtarray = [...builtarray, ...special]
  console.log(builtarray);
}

}

generatePassword()

let passwordlength = prompt("Please select a password lenght between 8 and 128 characters.")
for (let i = 0; i < passwordlength; i++) {
  
  
  password += "x";

//   return "x"
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
