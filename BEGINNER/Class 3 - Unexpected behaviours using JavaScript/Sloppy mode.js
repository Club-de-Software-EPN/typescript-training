/*
    *
    * TOPIC: Unexpected behaviours using JavaScript
    * Cyber Security Team
    * 
*/

// ----------------------------------------------
// SLOPPY MODE (Non-strict mode)
// ----------------------------------------------

// - Using a variable, without declaring it, is allowed:

name = "Alejandro Llanganate";
console.log(name)

// - Deleting a variable is allowed:
delete name

//  Duplicating a parameter is allowed
function add(number, number){
    return number+number
}
console.log(add(5,7)) // ¿12?, but we get 14 

// The use of eval() function is allowed
var lastname = "Alejandro";
eval("var lastname='Attack'")
console.log(lastname)