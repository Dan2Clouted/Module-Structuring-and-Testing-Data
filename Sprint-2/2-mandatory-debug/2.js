// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

//I predict that it will print out the wrong last digit of all numbers.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// The output is the way it is because the function "getLastDigit" is using a global variable "num" which is set to 103. So, regardless of the input passed to the function, it will always return the last digit of 103, which is 3.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function "getLastDigit" is not working properly because it is using a global variable "num" instead of accepting and using a function. Adding `num`as a parameter makes the function work with any number passed in.
