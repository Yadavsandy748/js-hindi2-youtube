// for of 

  const name = ["SANDEEP","dsadf","dfsfrsfersfw"]
  for (const num of name) {
    //   console.log(`value is${num}`)
  }

  const names = "sandeep"
  for (const num of names) {
    //   console.log(`char is${num}`)
  }

  // maps +++++++++++++++++++++++++++++++++++
  const map = new Map()
  map.set('In','india')
  map.set('usa','america')
  map.set('fr','france')

  // console.log(map)

for(const [key , value] of map){
    console.log(key, ":=",value)
} 

const myobj ={
  'name':"sandeep",
   'game':'spiderman'
}
// for of kaam nhi krega object ko iterate krne ke liye