function isValidCreditCard(cardNumber) {
  // Rule 1: card number must be exactly 16 characters long
  if (cardNumber.length !== 16) {
    return false;
  }

  let sum = 0;
  let firstDigit = cardNumber[0];
  let allSame = true;

  let index = 0;

  while (index < cardNumber.length) {
    const currentChar = cardNumber[index];

    // Check that every character is a number from 0 to 9
    if (currentChar < "0" || currentChar > "9") {
      return false;
    }

    // Add each digit to the total sum
    sum += Number(currentChar);

    // Check whether all digits are the same
    if (currentChar !== firstDigit) {
      allSame = false;
    }

    index++;
  }

  // Rule 2: all digits cannot be the same
  if (allSame) {
    return false;
  }

  // Rule 3: final digit must be even
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: sum of all digits must be greater than 16
  if (sum <= 16) {
    return false;
  }

  return true;
}

console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("6666666666661666")); // true
console.log(isValidCreditCard("a92332119c011112")); // false
console.log(isValidCreditCard("4444444444444444")); // false
console.log(isValidCreditCard("1111111111111110")); // false
console.log(isValidCreditCard("6666666666666661")); // false
