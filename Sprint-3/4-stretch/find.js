function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find

// The index variable starts at 0 and increases by 1 each time the loop runs because of index++. This allows the function to check each character in the string one by one from left to right.

// b) What is the if statement used to check

//The if statement checks whether the current character in the string matches the character we are searching for. It compares str[index] with char.

// c) Why is index++ being used?

// index++ is used to move to the next character in the string after each loop. Without it, the loop would keep checking the same character forever and create an infinite loop.

// d) What is the condition index < str.length used for?

//The condition index < str.length makes sure the loop only runs while index is still within the valid positions of the string. It stops the loop once all characters have been checked.
