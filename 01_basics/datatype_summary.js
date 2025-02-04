// # primitive data 

// 7 types: String ,number ,bigint,boolean,null,symbol, undefined

//# non-primitive(refrence direct allocation in memory) 

// array , object , function 

let score = 100 
let scoreNumber= 100.3
let isLoggedIn = false 
let temperature =null 
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigInt = 234768745837549827638966868675658778567798687n // this n is mandatroy for bigInt otherwise it will be number.

console.log(typeof bigInt)


// *************************** stack and heap memory ****************************************************************
// stack(primitive) , heap (non-primitive).

let myYoutubename = "sandeep yadav"
let anotherName = myYoutubename 
anotherName = "sandysundy"
console.log(myYoutubename) 
console.log(anotherName)

let userOne ={
    email : "google@gmail.com",
     upi : "google@ybl",
}

let userTwo = userOne
userTwo.email = "sandeep@goole.com"

console.log(userOne.email)
console.log(userTwo.email)

