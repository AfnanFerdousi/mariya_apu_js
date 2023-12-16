function drawSquare(side) {
    for (let i = 1; i <= side; i++) {
        let row = "";
        if(i === 1 || i === side) {
            for (let j = 1; j <= side; j++) {
                row += "* ";
            }
        } else {
            for (let k = 1; k <= side; k++){
                if(k === 1 || k === side) {
                    row += "* ";
                } else {
                    row += " ";
                }
            }
        }
        
        console.log(row)
    }
}

drawSquare(100)




// 1. print a hollow pattern 
// 2. there is gonna be a starting number and an ending number 
// 3. we're gonna print all the numbers ONLY when it is the starting number or the ending number
// 4. In between the starting and ending numbers, we are only gonna print the starting number and ending number 
// 5. For the other number, we're gonna print a space instead of the number
// 6. Declare the initial value of row in the PARENT for loop 
// 7. Print the row inside the PARENT for loop (before the ending bracket)

    *************
    *           *
    *           *
    *           *
    *           *
    *           *
    *           *
    *************