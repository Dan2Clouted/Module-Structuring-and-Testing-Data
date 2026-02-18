const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60; //146

const remainingMinutes = totalMinutes % 60; //26
const totalHours = (totalMinutes - remainingMinutes) / 60; // 0

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 Variable declarations.

// b) How many function calls are there?

// There are 2 function calls. Console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// movieLength % 60 gives the leftover seconds after converting seconds into whole minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//It gets the total minutes by removing the leftover seconds and converting the remaining seconds into minutes by dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//remainingMinutes is the minutes part in an hours:minutes:seconds display
// It can be named as minutesDisplay.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The code will work for all positive integer values of MovieLength.
// If movieLength is negative, the code will still run but it will give a negative time which doesn't make sense in this context.
// If movieLength is not an integer, it will still run but it may give unexpected results due to the way the modulus operator works with non-integer values.
