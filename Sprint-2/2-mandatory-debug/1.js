// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error message because the function "sum" has a return statement that is not returning any value.

//function sum(a, b) {
//  return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function "sum" is not returning any value.
// To fix the error, we need to change the return statement to return the result of the addition of "a" and "b".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
