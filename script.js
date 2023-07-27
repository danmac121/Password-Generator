// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0,1,2,3,4,5,6,7,8,9]
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '.', '/', ',', ';', '<', '>', '?', ':', '|', '+', '_', '`', '~']

let builtarray = []



function generatePassword(){
  let confirmUpper = (confirm("Do you want your password to contain uppercase letters?"))
  let confirmLower = (confirm("Do you want your password to contain lowercase letters?"))
  let confirmNumber = (confirm("Do you want your password to contain numbers?"))
  let confirmSpecial = (confirm("Do you want your password to contain special characters?"))
  
if (confirmUpper){
  builtarray = [...builtarray, ...uppercase]
  

}
if (confirmLower){
  builtarray = [...builtarray, ...lowercase]
  
}

if (confirmNumber){
  builtarray = [...builtarray, ...numbers]
  

}
if (confirmSpecial){
  builtarray = [...builtarray, ...special]
  

}
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial){
alert("You must choose at least one character type to be included in your password.")
generatePassword()
}

let password = "";
let passwordLength = prompt("Please select a password length between 8 and 128 characters.");
for (let i = 0; i < passwordLength; i++) {
  
  let generatedLetterIndex = Math.floor(Math.random() * builtarray.length);
  password += builtarray[generatedLetterIndex];
 } 
  return password;
  




}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
