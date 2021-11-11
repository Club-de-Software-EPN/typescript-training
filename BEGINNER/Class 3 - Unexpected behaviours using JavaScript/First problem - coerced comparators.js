/*
    *
    * TOPIC: Problems with JavaScript
    * Cyber Security Team
    * 
*/

// ----------------------------------------------
// PROBLEM
// ----------------------------------------------

// The == operator will compare for equality after doing any necessary type conversions.

console.log("PROBLEM")

if("" == 0){
    console.log("True?")
}else{
    console.log("False?")
}
if(0 == false){
    console.log("Also true?")
}else{
    console.log("False?")
}
if("0" == 0){
    console.log("And so on...")
}else{
    console.log("False?")
}

// ----------------------------------------------
// TYPE COERCION
// ----------------------------------------------
// Type Coercion refers to the process of automatic or implicit conversion of values from
// one data type to another. 


// ----------------------------------------------
// SOLUTION
// ----------------------------------------------
// - Use explicit comparators (===) over coerced comparators (==)
// - The === operator will not do the conversion, so if two values are not the same type === 
//   will simply return false .

console.log("SOLUTION")

if("" === 0){
    console.log("True?")
}else{
    console.log("False?")
}