/*
    *
    * TOPIC: Variables
    * Cyber Security Team
    * 
*/

// VARIABLES
// ----------------------------------------

// Create a variable
var firstname = "Alejandro";
let lastname = "Llanganate"; // was introduced in ES6 (2015)
const PI = 3.141592; // was introduced in ES6 (2015)
// PI = 5.4; // error

console.log(firstname, lastname, PI);

// DATA TYPES
// ----------------------------------------

// Primitives
let age = 20;
let mobilePhoneNumber = "+593 99 7845 221";
let isEmpty = false;
let date = new Date();

// Objects
// - In JavaScript, an object is an unordered collection of key-value pairs.
// - Each key-value pair is called a property.
const clubMember1 = {
    firstName: "Alejandro",
    lastname: "Llanganate",
    team: "Cybersecurtiy",
    getInfo: function(){
        // Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.
        console.log(`My name is ${this.firstName} ${this.lastname} and I'm from the ${this.team} team`)
    }
}
clubMember1.getInfo()
const clubMember2 = new Object();

// The dot notation
console.log(clubMember1.lastname)

clubMember2.team = "AI"
console.log(clubMember2)

// Checking if a property exists
console.log('team' in clubMember1) // true
console.log('lastname' in clubMember2) // false

// JavaScript Types are Dynamic
age = 22
age = "22" // Now age is a String
age = false // Now age is a Boolean

console.log(typeof age) // boolean