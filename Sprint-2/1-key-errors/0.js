// Predict and explain first...
//  =============> write your prediction here

// The code will throw an error because the variable "str" is being declared twice in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//Original code with errors:

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The error occurs because the variable "str" is being declared twice in the same scope. This causes a conflict and results in a syntax error.
// To fix this error, we can simply remove the "let" keyword when reassigning the value to "str" inside the function. This way we are not declaring a new variable, but rather reassigning the existing parameter "str".

// =============> write your new code here
// Updated Code:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
