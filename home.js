console.log('hello');

// alert('Hello, This is Jijo');

// How to write a comment inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// Manipulate DOM with Javascript
/* ... It's just a Fancy way of saying
change HTML with Javascript*/

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers is Javascript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *,remainder %
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('This is a function');
}

// Call
fun();

/* Let's create a function that take in a name
and say hello followed by your name

For example

Name: "Jijo"
Return: "Hello Jijo"
*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

// While loops

/* var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

//For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}