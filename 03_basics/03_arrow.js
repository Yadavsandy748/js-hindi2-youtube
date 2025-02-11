const user =  {
    username :"sandeep",
    price: 642,

    welcomeMessage: function(){
        console.log(`${this.username}, welome to website`)
        console.log(this)
    }
}
// this jo hai wo current cintext ki baat karta hai jo bhi current context hai hoga uske baare me bata dega.

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username ="sandeep"
//     console.log(this.username)
// }
// chai()
// const chai = function(){
   
// }

// const chai =()=>{
//    let username = "sandeep"
//    console.log(this);
// }

// chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(5,7))
//******************
// implicit function jb curly braket lagate hai tb return likhna hoga pr jb braket lagayenge tb return nhi likhna hoga.

const addTwo2 =(num1,num2)=>(num1+num2)
console.log(addTwo2(64,76))

// explict jb hum return keyword lagate hai tb explict bolte hai ..bss