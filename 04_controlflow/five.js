// foreach loop 
const coding = ["js","ruby","java","py","cpp"]
const item = ["asndy","adkhufs","sgyi"]

coding.forEach(function (val){
  // console.log(val)
})

coding.forEach((value)=>{
//    console.log(value)
})


function printMe(item){
  console.log(item);
}
// coding.forEach(printMe)
coding.forEach(function (val, index, arr){
  // console.log(val ,index , arr)
})

const myCoading = [
  {
    languageName:"javascript",
    langaugefilename:"js"
  },
  {
    languageName:"java",
    langaugefilename:"java"
  },
  {
    languageName:"python",
    langaugefilename:"py"
  },
]
myCoading.forEach((item)=>{
   console.log(item.langaugefilename)
})