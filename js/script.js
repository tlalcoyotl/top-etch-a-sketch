let initGrid = 16;
let container = document.getElementById('container');
let column;

createGrid(initGrid);

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