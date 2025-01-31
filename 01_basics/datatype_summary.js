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

const bigInt = 2347687458375498276389n // this n is mandatroy for bigInt otherwise it will be number.

console.log(typeof bigInt)



