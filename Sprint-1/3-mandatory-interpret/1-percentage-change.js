let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are 5 function calls in this file.
// Line 4 : Number() and replaceAll()
// Line 5 : Number() and replaceAll()
// Line 10 : console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//// In the original version, the error came from line 5 because the replaceAll call was not written correctly (the arguments weren’t separated properly),
// So JavaScript couldn’t parse it.
// Fix: pass two valid string arguments to replaceAll, e.g. replaceAll(",", "") so commas are removed before converting to a number.

// c) Identify all the lines that are variable reassignment statements

// Line 4 and Line 5

// d) Identify all the lines that are variable declarations

// Line 1, 2, 7, 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// The expression is first calling the replaceAll method on the carPrice string to remove all commas. "10,000" ==> "10000"
// Then it converts the resulting string into a number using the Number() function. "10000" ==> 10000
