const penceString = "399p";

// This creates a string variable that represents a price in pence, with the letter p at the end.

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// This takes the string from the start up to (but not including) the last character, so it removes the trailing "p" and leaves "399"

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// This makes sure the pence number has at least 3 characters by adding zeros to the front if it’s too short (so "5" would become "005"), and "399" stays "399".
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// This takes everything except the last 2 digits, which gives the pounds part (for "399" it becomes "3").

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//This takes the last 2 digits to get the pence part (for "399" it becomes "99") and ensures it is always 2 digits long by padding with zeros on the right if needed.

//.padEnd(2, "0") is unnecessary here because paddedPenceNumberString is always at least length 3 due to padStart(3, "0"), so substring(length - 2) will always return exactly two characters. That means the pence part is already guaranteed to be 2 digits.

console.log(`£${pounds}.${pence}`);

// This prints the final formatted price by inserting pounds and pence into a template string, producing £3.99.

// This program takes a string representing a price in pence
