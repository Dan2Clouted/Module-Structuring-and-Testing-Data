// Predict and explain first BEFORE you run any code...
// The code will throw an error because of an unexpected number "3" in the function parameter. The function parameter must be a variable name, not a number.
// Also, there is no num parameter declared in the function, so even if the function definition worked, it would sill cause a reference error when trying to use "num" in the return statement.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

//function square(3) {
//    return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number in function parameter list. This error occurs because "3" is not a valid parameter name. Parameters should be variable names that can be used within the function body.
//ReferenceError: num is not defined. This error occurs because "num" is being used in the return statement, but it has not been declared or defined anywhere in the function.

// =============> explain this error message here
// To fix this error, we need to change the function parameter from "3" to a valid variable name, such as "num". This way, we can pass a number as an argument when calling the function, and it will be used correctly within the function body to calculate the square of that number.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3)); // output: 9
