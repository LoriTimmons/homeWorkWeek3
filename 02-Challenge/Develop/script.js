var generateBtn = document.querySelector("#generate");
let useLowerCase;
let useUpperCase;
let useSpecialCharacter;
let useNumbers;
let passwordLength;

// Random number function ✅
function getRandomNumber(max){
  return (Math.floor(Math.random()* max))
}

// random lower case char function ✅
function getMeARandomLowerCaseChar() {
const arr = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z' ];
const index = getRandomNumber(arr.length);
return arr[index];
}

// random upper case char function ✅
function getMeARandomUpperCaseChar() {
  const arr = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  const index = getRandomNumber(arr.length);
  return arr[index];
  }

//random special char ✅
function getMeARandomSpecialChar() {
  const arr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '='];
  const index = getRandomNumber(arr.length);
  return arr[index];
  }

// random character function add other spec.✅
function getMeARandomCharacter() {
const arr = [getMeARandomLowerCaseChar, getMeARandomUpperCaseChar, getMeARandomSpecialChar];
const index = getRandomNumber(arr.length);
return arr[index]();
}

// build get random number ✅
function getMeARandomNumber() {
  const arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9];
  const index = getRandomNumber(arr.length);
  return arr[index];
  }


function generatePassword(){
  passwordLength = window.prompt ("Enter Password length (between 8 - 128 Characters)");
  if(passwordLength < 8){
    alert("Must be greater than 8 characters")
    return 
  }

  if(passwordLength > 128) {
    alert("Must be less than 128")
    return
  }

  useUpperCase = window.confirm ("Would you like to use upper case letters? ");
  useLowerCase = window.confirm ("Would you like to use lower case letters?");
  useNumbers = window.confirm ("Would you like to use numbers?");
  useSpecialCharacter = window.confirm ("Would you like to use special characters?");
  // Password length 
let password = "";
if (useUpperCase === true){
  password = password + getMeARandomUpperCaseChar();
}
if (useLowerCase === true) {
  password = password + getMeARandomLowerCaseChar();
}
if (useNumbers === true) {
  password = password + getMeARandomNumber();
}
if (useSpecialCharacter === true) {
  password = password + getMeARandomCharacter();
}
console.log(password)
console.log(password.length)
for (let i = password.length; i < passwordLength; i++) {
  // Work on this line (13) ✅
const char = getMeARandomCharacter();
password = password + char;
}

console.log(password)
return password;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Assignment 
// // Assignment Code
// // capture the 5 prompts 
// // write window confirm to ask all the questions. 
// // Write password to the #password input