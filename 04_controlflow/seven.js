// map this will give return value and this is also call back 

const myNumber  = [1,2,3,4,5,6,7,8,9]

//  const newnum = myNumber.map( (num) => { return num+10})

 const newnum = myNumber.map((val)=> val*10)
               .map((val)=>val+1)
               .filter((val)=>val >=40)

 console.log(newnum)

