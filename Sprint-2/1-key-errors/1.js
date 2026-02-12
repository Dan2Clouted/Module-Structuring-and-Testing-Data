// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// The program will throw an error because decimalNumber is declared twice in the same function scope. And also decimalNumber is used in console.log(decimalNumber) outside the function, where it doesn't exist.

// Try playing computer with the example to work out what is going on

// Code with errors:

// function convertToPercentage(decimalNumber) {
// const decimalNumber = 0.5
//const percentage = `${decimalNumber * 100}%`;
//
// return percentage;
//}
// console.log((decimalNumber));

// =============> write your explanation here

// The error occurs because the variable "decimalNumber" is being declared twice in the same scope. This causes a conflict and results in a syntax error. Additionally, "decimalNumber" is being used in console.log(decimalNumber) outside the function, where it doesn't exist, which will also cause a ReferenceError.

// To fix this error, i simply removed the second declaration of decimalNumber inside the function and also changed console.log(decimalNumber) to console.log(convertToPercentage(0.5)) to call the function with an argument and log the result.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5)); // output: 50%
