// Minha primeira tentativa de fazer o projeto estava empacada no requisito 8, entao depois de da uma olhada no código de "GEOVANI MOURA" eu decidir refazer quase que totalmente o projeto, fazendo o minimo possível no HTML. Esse novo código teve grande inspiração no código de Geovani, mas tentei ao máximo não fazer igual, definindo minhas próprias variaveis e sem colar diretamente do código no GitHub. O código de Geovani é facil de ser compreendido e aqui deixo os créditos e méritos, além do meu agradecimento a ele. Repositório--> Geovani Moura = https://github.com/tryber/sd-019-c-project-pixels-art/pull/27/files


const header = document.createElement('header');
header.setAttribute('id', 'header');
document.body.appendChild(header);

const main = document.createElement('main');
main.setAttribute('id', 'main');
document.body.appendChild(main);

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Paleta de Cores';
header.appendChild(h1);

const paletteSection = document.createElement('section');
paletteSection.setAttribute('id', 'paletteSection');
main.appendChild(paletteSection);

const buttonSection = document.createElement('section');
buttonSection.setAttribute('id', 'buttonSection');
main.appendChild(buttonSection);

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

const clearButton = document.createElement('button');
clearButton.setAttribute('id', 'clear-board');
clearButton.innerText = 'Limpar'
buttonSection.appendChild(clearButton);

function clearBoard(event) {
    const element = document.querySelectorAll('.pixel');
    for (let i = 0; i < element.length; i += 1) {
        element[i].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clearBoard);

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

function addColor(event) {
    const element = document.querySelector('.selected');
    const e = event.target;
    e.style.backgroundColor = element.style.backgroundColor;
}

for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', addColor);
}

//Bonus 10
const input = document.createElement('input');
input.setAttribute('id', 'board-size');
input.setAttribute('type', 'number');
input.setAttribute('min', '1');
input.placeholder = 'Digite um numero de 5 até 50';
input.style.fontSize = '12px';
buttonSection.appendChild(input);
 
const sizeButton = document.createElement('button');
sizeButton.setAttribute('id', 'generate-board');
sizeButton.innerText = 'VQV';
buttonSection.appendChild(sizeButton);

function generateBoard () {
    if (input.value < 5) {
        alert('Board inválido!');
        input.value = 5;
    } else if (input.value > 50) {
        alert('Board inválido!');
        input.value = 50;
    }
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].parentNode.removeChild(pixels[i]);
    }
    makeBoard(input.value, input.value);
}

sizeButton.addEventListener('click', generateBoard);

