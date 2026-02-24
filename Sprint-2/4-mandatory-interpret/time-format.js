function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// pad will be called 3 times because it is used for minutes, hours and seconds in the return string.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// 0, The first call is pad(totalHours),and for 61 seconds, totalHours will be 0 because 61 seconds is less than 1 hour.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// 00, pad(0) converts 0 to "0" and padStart(2, "0") makes it "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// 1, the last call is pad(remainingSeconds), and for 61 seconds, remainingSeconds = 61 % 60 = 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// 01, the last call is pad(1). pad converts 1 to "1", then padStart(2, "0") adds a leading zero, so it returns "01"
