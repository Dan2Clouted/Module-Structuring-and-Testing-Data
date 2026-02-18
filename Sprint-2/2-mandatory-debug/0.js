// Predict and explain first...

// =============> write your prediction here
// The code will throw an error message because multiply only logged the result and didnt return it. So when we try to use the result of multiply(10, 32) in the template literal, it will be undefined, which will cause an error when trying to perform string interpolation with an undefined value.

// function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// To fix this error, we need to change the multiply function to return the result of the multiplication instead of just logging it. This way, when we call multiply(10, 32) inside the template literal, it will return the correct value (320) that can be used in the string interpolation without causing an error.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // output: The result of multiplying 10 and 32 is 320
