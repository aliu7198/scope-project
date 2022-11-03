/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"

***********************************************************************/
// Input: string
// Output: function => when invoked, str returned w/ interruptions

/*
Plan:
- create word variable for interruptingWord
-
- return function that takes a string as arg
  - create variable for new sentence
  - new sentence = string.split take interrupting word as arg
  - new sentence = array.join w/ space
  - return new sentence
*/

function interrupter(interruptingWord) {
  let word = interruptingWord
  // console.log(word) // what
  return function myFunc(str) {
    // console.log(str); // how are you
    let newSentence = str.split(' ');
    console.log(newSentence); //SHOULD Be [how, what, are, what, you]
    newSentence = newSentence.join(' ' + word + ' ' );
    return newSentence;
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
