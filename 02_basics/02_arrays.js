const marvel_heros = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// concat basicially it join two array and return in new array
// concat use to concat only two array this is the limitestion.


const all_heroes = marvel_heros.concat(dc_heroes)
console.log(all_heroes)
// naya tarika yahi hai it is for more than one value 

let my_all_heroes = [...marvel_heros,...dc_heroes]
// console.log(my_all_heroes)

const myArray = [1,2,3,4,5,[1,2],6,7,[3,4,5]]
const all_myArray = myArray.flat(Infinity)
console.log(all_myArray)

// check that is array 
console.log(Array.isArray("sandeep"))
console.log(Array.from("sandeep"))
console.log(Array.from({name:"sandeep"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

