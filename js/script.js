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
    if (e.target.classList.contains('cell')){
     e.target.style.backgroundColor = "#000000";
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