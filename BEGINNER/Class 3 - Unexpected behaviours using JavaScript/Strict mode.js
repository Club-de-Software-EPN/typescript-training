/*
    *
    * TOPIC: Unexpected behaviours using JavaScript
    * Cyber Security Team
    * 
*/

// ----------------------------------------------
// STRICT MODE
// ----------------------------------------------
// - Strict mode makes it easier to write "secure" JavaScript.
// - Strict mode changes previously accepted "bad syntax" into real errors.
//  The "use strict" directive was new in ES5 (ECMAScript 2009)


'use strict';

// - Using a variable, without declaring it, isn't allowed:
name = "Alejandro Llanganate";
console.log(name) // Will throw an error

// - Deleting a variable isn't allowed:
delete name // Will throw an error

//  Duplicating a parameter isn't allowed
function add(number, number){// Will throw an error
    return number+number
}

// The use of eval() function is limited
var lastname = "Alejandro";
eval("var lastname='Attack'")
console.log(lastname)