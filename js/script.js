let gridValue = 16;
let container = document.getElementById('container');
let button = document.querySelector('#new-canvas');
let column;

createGrid(gridValue);

// Create Grid
function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        container.innerHTML += `<div id="column${[i]}">`;
        for (j = 0; j < gridSize; j++) {
            let column = document.getElementById(`column${i}`);
            console.log(column);
            column.innerHTML += '<div class="cell"></div>';
        }
        container.innerHTML += '</div>';
    }
}

// Function to change background of cell
function gridPaint(e) {
    let currentOpacity = window.getComputedStyle(e.target).getPropertyValue('background-image');
    console.log(currentOpacity);
    if (e.target.classList.contains('cell')){
        e.target.style.backgroundColor = randRGB();
        if (currentOpacity == 'none'){
            e.target.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))';
        } else if (currentOpacity != 'none') {
            let alpha = currentOpacity.slice(30, 33);
            e.target.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${parseFloat(alpha) + 0.1}), rgba(0, 0, 0, ${parseFloat(alpha) + 0.1}))`;
        }
    };
}

container.addEventListener('mouseover', gridPaint);

// Function to generate new grid

function newGrid() {
    container.innerHTML = '';
    gridValue = parseInt(prompt('Enter new grid size less than 100!'));
    while ((!Number.isInteger(gridValue)) || gridValue > 100) {
        gridValue = parseInt(prompt('Enter new grid size NUMBER less than 100!'));        
    }
    createGrid(gridValue);
}

button.addEventListener('click', newGrid);

function randRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}