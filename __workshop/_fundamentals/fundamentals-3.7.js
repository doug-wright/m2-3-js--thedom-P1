// Exercise 7
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array with 2 values,
// and returns a new string made of the original string repeated by the provided number of times.
//
// - The first value of the array must be a string, and the second a number.
// - If a negative number or zero is specified, return an empty string.
// - If any invalid parameters are supplied return undefined.
//
// example: repeat(['foo', 3]) returns 'foofoofoo'

function repeat(arr) {
  if (typeof(arr) !== 'object' ||
    arr.length < 2 ||
    typeof(arr[0]) !== 'string' ||
    typeof(arr[1]) !== 'number' ||
    arr[1] <= 0) {
      return undefined;
  }

  let outString = '';

  for (let x = 0; x < arr[1]; x++) {
    outString += arr[0];
  }

  return outString;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = repeat;
