// run a loop inside another loop to print multiplication table from 1-10

for (let i = 1; i <= 5; i++){
    console.log(`\n --------Multiplication table of ${i}------- \n`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${j * i}`)
    }
}