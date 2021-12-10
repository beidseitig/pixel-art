//Semantics

const header = document.createElement('header');
header.setAttribute('id', 'header');
document.body.appendChild(header);

const main = document.createElement('main');
main.setAttribute('id', 'main');
document.body.appendChild(main);

//Semantics

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Paleta de Cores';
header.appendChild(h1);

const paletteSection = document.createElement('section');
paletteSection.setAttribute('id', 'paletteSection');
main.appendChild(paletteSection);

const paletteList = document.createElement('ul');
paletteList.setAttribute('id', 'color-palette');
paletteSection.appendChild(paletteList);

const blackLi = document.createElement('li');
blackLi.className = 'color';
blackLi.classList.add('selected');
blackLi.style.backgroundColor = 'black';
paletteList.appendChild(blackLi);

const redLi = document.createElement('li');
redLi.className = 'color';
redLi.style.backgroundColor = 'red';
paletteList.appendChild(redLi);

const greenLi = document.createElement('li');
greenLi.className = 'color'
greenLi.style.backgroundColor = 'green';
paletteList.appendChild(greenLi);

const blueLi = document.createElement('li');
blueLi.className = 'color';
blueLi.style.backgroundColor = 'blue';
paletteList.appendChild(blueLi);

const pixelBoard = document.createElement('section');
pixelBoard.setAttribute('id', 'pixel-board');
main.appendChild(pixelBoard);

// for (let i = 0; i < 5; i += 1) {
//     const ulQ = document.createElement('ul');
//     ulQ.className = 'quadros';
//     pixelSection.appendChild(ulQ);

//     for (let index = 0; index < 5; index += 1) {
//         const liQuadros = document.createElement('li');
//         liQuadros.className = 'pixel';
//         ulQ.appendChild(liQuadros);
//     }
// }

// Create a square
function makePixels() {
    pixel = document.createElement('li');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
}

//Create the board using a loop and the function makePixels, wich create individual box's
function makeBoard(rows, columns) {
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            makePixels();
        }
        jumpLine = document.createElement('br');
        jumpLine.className = 'jump-line';
        pixelBoard.appendChild(jumpLine);
    }
}

makeBoard(5, 5);

// Essa porte do código foi pega do Course, do bloco 5.3, JavaScript - Events
// Muda a cor que esta com a classe '.selected' quando se clica em algum das box de cores
const color = document.querySelectorAll('.color');

function changeColorSelected(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', changeColorSelected);
}

//   blackBox.addEventListener('click', changeColorSelected);
//   redBox.addEventListener('click', changeColorSelected);
//   greenBox.addEventListener('click', changeColorSelected);
//   blueBox.addEventListener('click', changeColorSelected);

let pixels = document.querySelectorAll('.pixel');

function adicionaCor(event) {
    const element = document.querySelector('.selected');
    const e = event.target;
    e.style.backgroundColor = element.style.backgroundColor;
}

for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', adicionaCor);
}