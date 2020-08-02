/*
EACH QUESTION HAS A TEST SECTION!
PLEASE DO NOT CHANGE OR TOUCH THEM THEY WILL CAUSE ERRORS ON
YOUR CONSOLE, BUT IT WILL NOT STOP THE REST OF YOUR CODE
ALL VARIABLES AND FUNCTION HAVE BEEN DECLARED FOR YOU!!!!
PLEASE ONLY TYPE WHERE 'YOUR CODE HERE' IS


*/

/*
QUESTION 1

CREATE A FUNCTION THAT TAKES A CALLBACK AND INVOKES THAT CALLBACK FUNCTION

*/

function higherOrder(callback) {
  // CODE HERE
  console.log("I am a callback function");
}

/*
QUESTION 2

CREATE A FUNCTION ACCEPTS ONE ARGUMENT, A CALLBACK THAT RETURNS THE RETURN VALUE OF A CALLBACK FUNCTION

*/

function q2(callback) {
  // CODE HERE
  return callback;
}




/*
QUESTION 3

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS AN ARRAY AND A CALLBACK FUNCTION AND APPLIES THE CALLBACK FUNCTION TO EVERY ELEMENT (JUST LIKE Array.prototype.forEach) DO NOT USE FOREACH

USE A FOR-LOOP

*/

function forEach(array, callback) {
  // CODE HERE
  for(var i=0; i<array.length; i++){
    var elem = array[i];
    callback(elem,1);
  }
}


/*
QUESTION 4

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS AN ARRAY AND A CALLBACK FUNCTION. IT APPLIES THE CALLBACK FUNCTION ON EACH ELEMENT AND THEN STORES THE RETURN VALUE IN A NEW ARRAY


THIS IS JUST LIKE Array.prototype.map

USE A FOR-LOOP

*/

function map(array, callback) {
  // CODE HERE
  //var output = [];
  for(var i=0; i<array.length; i++){
    map(array[i]);
  }
}

/*
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run((failures) => {
  // if (failures) {
  //   console.error(failures)
  // } else {
  //   console.log('All passed.')
  // }
});

module.exports = { higherOrder, q2, forEach, map };

console.log('');
