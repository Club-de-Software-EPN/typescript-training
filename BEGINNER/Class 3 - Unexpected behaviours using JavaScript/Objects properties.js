/*
    *
    * TOPIC: Unexpected behaviours using JavaScript
    * Cyber Security Team
    * 
*/

// ----------------------------------------------
// PROBLEM
// ----------------------------------------------

const clubMember = {
    name: "Alejandro Llanganate",
    team: "Cyber Security",
}

// Accesing properties which are present
console.log(clubMember.name) // Alejandro Llanganate

// Accesing properties which aren't present
console.log(clubMember.email)

// Most programming languages would throw an error when these sorts of errors occur,
// but in JavaScript it is not like that
for (let index = 0; index < 5; index++) {
    console.log(index)
}
