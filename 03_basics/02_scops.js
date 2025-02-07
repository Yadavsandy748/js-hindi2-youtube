// let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
console.log(c);

let a = 300;

if(true){
    let a =10
    const b = 20
    console.log("Inner",a)
    var ab = 75
}
console.log(a)
// console.log(ab) this is the issue we dont want it gives alot probles so this is the scop problem

// nested function .

function one (){
    let username  = "sandeep"
    console.log(username)
    function two(){
       let website = "youtube"
       console.log(username)
    }
   // console.log(website) it is out of scop so it cannot print
   two()
}
one()
// child fuction can use the variable of parent function....

// ++++++++++++++++++++++++++++ intersesting +++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1 
}

// console.log(addTwo(5))
//  this will give error because our function is stored in variable .
// some time we call it express but it is function...

const addTwo = function(num){
    return num+2
}


