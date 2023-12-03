// Madam
// mam
// 121
// 212

const word = "Madam"
let reverse = ""; 
const transformedWord = word.toLowerCase()

for (let i = transformedWord.length-1; i >= 0; i--){
    reverse += transformedWord[i]        
}
console.log(transformedWord)
console.log(reverse)

if (transformedWord === reverse){
    console.log(true)
} else {
    console.log(false)
}