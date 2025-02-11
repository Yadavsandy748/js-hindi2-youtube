// Immediately Invoked Function Expressions(IIFE).
// globale scope ke pollution se problem hoti hai kai baar is liye hum log 
//usko use krte h usko hatane ke liye..
// aur immediately fuction exective krte ke liye use kte hai.

(
    function chai(){
        console.log("DB CONNECTED")
    }
)() ;
// hmesa iife likhne ke baad band krna hota hai semicolon laga ke ;
(
    (name)=>{
        console.log(`Db connect to ${name}`)
    }
)("sandeep") ;// not to forget mention semicolon;
