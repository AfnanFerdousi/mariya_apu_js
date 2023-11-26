const names = ["mariya", "apu", "afnan", "sami", "saima", "sana"];
const numbers = [12, 145, 67, 89, 90, 56, 45, 676]
 
// console.log(numbers[0] + numbers[1])
let res = 0;
for (let i = 0; i < numbers.length; i++){
    console.log(res)
    res+= numbers[i];
    // res = res + numbers[i];
    // i += 6
    // i = i + 6
}
console.log(res)
// // length
// console.log(names[0])
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
// len = 6
// 5
// 0-6 = 7
// 1-6 = 6
// 0 - 5 = 6


// length and index is TWO DIFFERNT THINGS
// we have 6 elements here but we have elements till the index of 5. 


// abc = 100 people

// a page = a variable 
// 100 variables to store 100 names
// 1 variable, make an Array, stack all those names together