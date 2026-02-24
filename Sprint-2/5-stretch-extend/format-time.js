// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("00:45");
const targetOutput5 = "12:45 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("12:30");
const targetOutput6 = "12:30 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("13:05");
const targetOutput7 = "01:05 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

// I tested the function with edge cases around midnight and noon.
// I found that the original function handled times like "08:00" and "23:00",
// but it did not correctly handle "00:xx" (midnight times) or "12:xx" (noon times).

// Bugs found:
// - "00:00" returned "00:00 am" instead of "12:00 am"
// - "00:45" returned "00:45 am" instead of "12:45 am"
// - "12:00" returned "12:00 am" instead of "12:00 pm"

// Fix:
// I added separate conditions for:
// - hours === 0  (midnight -> 12:xx am)
// - hours === 12 (noon -> 12:xx pm)
// - hours > 12   (convert to pm by subtracting 12)
// I also kept the minutes using time.slice(2), so the ":MM" part stays the same.

// After fixing, the function correctly formats morning, noon, afternoon,
// evening, and midnight times in 12-hour clock format.
