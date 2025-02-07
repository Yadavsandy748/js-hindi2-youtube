// function ****************************************************
  function sayHI(){
 console.log("hello everyone this is my function")
}

sayHI();

function addTwoNumber(num1 , num2){
   console.log(num1+num2)

}
addTwoNumber(2,5);

function myTwoSum(num1,num2){

   let num3= num1+num2
   return num3 
   // after return no line will be execute because function is returned. 
   console.log("hello i am great coder and i have intersent in this coding alot.")

}

console.log(myTwoSum(1,3))
console.log(myTwoSum(2,5))

function checkMyNumber(){
   
}

// ... isi ko rest operator bolte hai aur isi ko spread operator bolte hai...

function calculateCartPrice(...num1){
   return num1 ;

}
console.log(calculateCartPrice(100,200,3000))

const user ={
   usrename:"sandeep",
   prices:199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject. usrename} and price is ${anyobject.prices}`);
}
// handleObject(user)
 handleObject({
   usrename:"maihudon",
   prices:3693298379839329,
})

const myArray = [100,200,300,400]

function myData(mynewarray){
    return mynewarray[1]
}
// console.log(myData(myArray))
console.log(myData([500,4333,4654,123234]))
