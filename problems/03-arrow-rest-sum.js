/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/
/*
Input: all pararmeters,
Output: sums parameters up into one number
Use rest parameter syntax!
Plan:
1.
*/
// Your code here
let arrowRestSum = (num, ...nums) => {
  let sum = 0

  for (let num1 of nums) {
    sum += num1;
  }

  return sum + num
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
