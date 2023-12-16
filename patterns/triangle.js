function drawTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

drawTriangle(5);


function drawSquare(side) {
    for (let i = 1; i <= side; i++) {
        let row = '';
        for (let j = 1; j <= side; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

drawSquare(5);

