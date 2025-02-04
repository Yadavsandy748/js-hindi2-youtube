 let myDate = new Date()
//  console.log(myDate)
//  console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreateDate = new Date("2025/04/23")
// console.log(myCreateDate)
// console.log(myCreateDate.toLocaleString())

let mycreateDate = new Date(2025,0,22 , 5,23)
// console.log(mycreateDate)
// console.log(mycreateDate.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.toLocaleString())
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getHours())

newDate.toLocaleString("default", {
    weekday:'long',
    
})