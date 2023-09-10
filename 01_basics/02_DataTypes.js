"Use Strict"; // treat all JS code as a Newer Version.

//alert ( 3 + 3 ) // We are using nodejs, not Brower.
 

let name = "Hasnian"
let age = 24
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object  

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//To find the object type

console.log(typeof age); 


// My Own Notes💥💥💥💥💥💥

// JavaScript offers various types of data types. Here are some examples:

// 1. **Number**: This data type includes integers and floating-point numbers. For example:
var x = 3;  // integer
var y = 3.14;  // floating-point number


// 2. **String**: This data type is used for a sequence of characters. For example:
var text = "Hello, World!";


// 3. **Boolean**: This data type only has two values: true or false. For example:
var isReading = true;  // Yes, I'm reading
var isSleeping = false;  // No, I'm not sleeping


// 4. **Object**: This data type can store collections of data. For example:
var myCar = {name:"Toyota", model:"Corolla", year:2005};


// 5. **Null**: This type has one value: null. 
var empty = null;


// 6. **Undefined**: A variable that has not been assigned a value is of type undefined.
var testVar;
console.log(testVar);   // Output: undefined


// 7. **Array**: This type is a special kind of object used to store multiple values in a single variable.
var colors = ['red', 'green', 'blue'];


// 8. **Function**: Functions are callable objects in JavaScript.
function greet() {
  return "Hello there!";
}


// 9. **Symbol**: This is a new data type introduced in ECMAScript 6. Symbols are immutable.
let symbol1 = Symbol();
let symbol2 = Symbol("symbol");
