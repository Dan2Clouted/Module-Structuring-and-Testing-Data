const cardNumber = 4533787178994213;

//

const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Initially, the code will not work because slice is a method that exist on strings and arrays. While the cardNumber is a number, so it will throw an error when trying to slice it

//To fix this, we can convert the cardNumber to a string using the toString() method before applying the slice method.
