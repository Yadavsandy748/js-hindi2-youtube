// singelton  : ye tb banta jb hum construction se object declare krte hai

// literals object se banayenge abhi
let  newSys = Symbol("keyvalue1")
console.log(typeof newSys)

let jsUser = {
    name:"sandeep",
    "full name" : "sandeep yadav",
    [newSys]:"keyvalue1",
    age :18,
    email:"yadav123@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["monday","sunday"]

}

jsUser.email = "bhai@google.com" // by using = we can overrode the email.
console.log(jsUser["email"])
//Object.freeze(jsUser) // by using this we cannot change object because we freeze the object .
jsUser.email = "sandyyou@gmail.com"
console.log(jsUser["email"])

// how to access this object we can access in two ways .
// fist is by using dot
// by using square 

console.log(jsUser.age)
console.log(jsUser["name"])
console.log(jsUser["full name"])

console.log(typeof jsUser[newSys])

jsUser.greating = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greating())

jsUser.greatingTwo = function(){
   console.log("hello mere bhaiyo");
}
console.log(jsUser.greatingTwo())

