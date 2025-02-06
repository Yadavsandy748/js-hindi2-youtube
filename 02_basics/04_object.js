// singleton object is created when we use construction like 
const tinder = new Object() ;

// literals object 
const myTinder = {}

myTinder.id = "123abc"
myTinder.name = "sujay"
myTinder.isLoggedIn = false

// console.log(myTinder)

const regulerUser = {
    name:"sandeep",
    fullname :{ 
        firstname:"sandeep",
        lastname:"yadav",
    }
}
// console.log(regulerUser.fullname.firstname)

const obj1 = {
    1:'a',
    2:"b",
}
const obj2 = {
    3:"v",
    4:"r",
}
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// spreed method is best for add multi number of object.
const obj4 = {...obj1,...obj2}
// console.log(obj4);

// when values come from database.
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

users[1].email
// console.log(myTinder)

// console.log(Object.keys(myTinder));
// console.log(Object.values(myTinder));
// console.log(Object.entries(myTinder))
// console.log(myTinder.hasOwnProperty('isLoggedIn'));
// console.log(myTinder.hasOwnProperty('isLogged'));

// ++++++++++++++++++++++++++ destructing+++++++++++++++++++++++++++++

const course ={
    coursename :"js in hindi",
    price:300,
    couseinstructor:"hiteshbhai"
}
// baar baar course.courseinstructor
const {couseinstructor:instructor} = course
console.log(instructor)
