/*
    *
    * TOPIC: Unexpected behaviours using JavaScript
    * Cyber Security Team
    * 
*/

// ----------------------------------------------
// HOISTING
// ----------------------------------------------

// - Variables defined with *let* are only accessible inside their block-scope
//   while *var* variables are hoisted to the function level.

for(var index = 1; index <= 4; index++){
    console.log("->",index)
}

console.log("->",index)


for(let index2 = 1; index2 <= 4; index2++){
    console.log("-->",index2)
}

// console.log("-->",index2) // ReferenceError: index2 is not defined

// ----------------------------------------------
// THE BIG PROBLEM
// ----------------------------------------------

for (var index = 1; index <= 4; index++) {
    console.log("+ ---- ",index);
    for (var index = 1; index <= 2; index++) {
        console.log("*",index);
    }
}

// ----------------------------------------------
// ES6 SOLTUION
// ----------------------------------------------

for (let index = 1; index <= 4; index++) {
    console.log("+ ---- ",index);
    for (let index = 1; index <= 2; index++) {
        console.log("*",index);
    }
}
