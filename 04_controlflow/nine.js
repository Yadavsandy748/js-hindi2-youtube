const mynum =[1,2,3,4,5]

const mynew = mynum.reduce(function (acc, curval){
   // console.log(`my acc is ${acc} curval is ${curval}`)
   return acc + curval
},0)
// console.log(mynew)

const priceofcourse =[
    {
        itenName: "javascript",
        price:2999
    },
    {
        itenName: "javascript",
        price:2999
    },
    {
        itenName: "javascript",
        price:2999
    }
]
 const mynewPrice = priceofcourse.reduce( (acc,item) =>acc+item.price ,0)
 console.log(mynewPrice)