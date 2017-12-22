/*
* What a wonderful function
*/
function foo(msg) {
  var output = msg || 'Hey, I\'m foo!';
  return output;
}

foo();

// Whooops
console.log(123123);
