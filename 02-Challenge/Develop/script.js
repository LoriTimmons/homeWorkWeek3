// need to generate 10 charters 

const buttonClick = window.confirm ('Would you like to create a password');
const useLowerCase = window.confirm ("Would you like to use lower case letters?");
const useUpperCase = window.confirm ("Would you like to use upper case letters? ");
const useSpecialCharacter = window.confirm ("Would you like to use special characters?")
const useNumbers = window.confirm ("Would you like to use numbers?");
const passwordLength = window.prompt ("Enter Password length (between 8 - 128 Characters)");

// Random number function 
function getRandomNumber(max){
  return (Math.floor(Math.random()* max))
}

// random lower case char function 
function getMeARandomLowerCaseChar() {
const arr = ['a', 'b', 'c'];
const index = getRandomNumber(arr.length);
return arr[index];
}

// random upper case char function 🚫
function getMeARandomUpperCaseChar() {
  const arr = ['A', 'B', 'C'];
  const index = getRandomNumber(arr.length);
  return arr[index];
  }

//random special char 🚫
function getMeARandomSpecialChar() {
  const arr = ['!', '@', '#'];
  const index = getRandomNumber(arr.length);
  return arr[index];
  }

// random character function add other spec.🚫
function getMeARandomCharacter() {
const arr = [getMeARandomLowerCaseChar, getMeARandomUpperCaseChar, getMeARandomSpecialChar];
const index = getRandomNumber(arr.length);
return arr[index]();
}

// Password length 
let password = "";
for (let i = 0; i < passwordLength; i++) {
  // Work on this line (13) 🚫
const char = getMeARandomCharacter();
password = password + char;
}

window.alert(password);


// // Assignment 
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // capture the 5 prompts 
// // write window confirm to ask all the questions. 
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
