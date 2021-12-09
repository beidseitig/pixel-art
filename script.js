let pixelBoard = document.querySelector('#pixel-board');


function makePixels() {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
}

function jumpLine() {
    
}

function makeBoard(rows, columns) {
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            makePixels();
        }
        jumpLine = document.createElement('br');
        jumpLine.className = 'jumpLine';
        pixelBoard.appendChild(jumpLine);
    }
}

makeBoard(5, 5);



