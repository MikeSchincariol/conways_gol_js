console.log("hello");

const mainNode = document.querySelector("main");

// A sleep function to workaround the lack of one in JavaScript
const sleep = function (ms) {
 return new Promise( resolver => setTimeout(resolver, ms));
};

// Factory function to create, initialize and return a new grid
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
const createGrid = function(grid_height, grid_width) {
    let grid = {
        height: grid_height,
        width: grid_width,
        data: Array(grid_height)
    };
    for (let i = 0; i < grid_height; i++) {
        grid.data[i] = Array(grid_width);
        for (let j = 0; j < grid_width; j++) {
            grid.data[i][j] = 0;
        }
    }
    return grid;
}

// Add an "acorn" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addAcorn = function(grid, start_row, start_col) {
    // Acorn is initially 3 lines tall and 7 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 3 > grid.height) && !(start_col + 7 > grid.width)) {
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+1][start_col+3] = 1;
        newGrid.data[start_row+2][start_col+0] = 1;
        newGrid.data[start_row+2][start_col+1] = 1;
        newGrid.data[start_row+2][start_col+4] = 1;
        newGrid.data[start_row+2][start_col+5] = 1;
        newGrid.data[start_row+2][start_col+6] = 1;
    }
    return newGrid;
}

// Add a "blinker" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in tdatahe grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addBlinker = function(grid, start_row, start_col) {
    // Blinker is initially 1 line tall and 3 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 1 > grid.height) && !(start_col + 3 > grid.width)) {
        newGrid.data[start_row+0][start_col+0] = 1;
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+0][start_col+2] = 1;
    }
    return newGrid;
}

// Add an "toad" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addToad = function(grid, start_row, start_col) {
    // Toad is initially 2 lines tall and 4 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 2 > grid.height) && !(start_col + 4 > grid.width)) {
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+0][start_col+2] = 1;
        newGrid.data[start_row+0][start_col+3] = 1;
        newGrid.data[start_row+1][start_col+0] = 1;
        newGrid.data[start_row+1][start_col+1] = 1;
        newGrid.data[start_row+1][start_col+2] = 1;
    }
    return newGrid;
}

// Add an "beacon" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addBeacon = function(grid, start_row, start_col) {
    // Toad is initially 2 lines tall and 4 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 2 > grid.height) && !(start_col + 4 > grid.width)) {
        newGrid.data[start_row+0][start_col+0] = 1;
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+1][start_col+0] = 1;
        newGrid.data[start_row+1][start_col+1] = 1;
        newGrid.data[start_row+2][start_col+2] = 1;
        newGrid.data[start_row+2][start_col+3] = 1;
        newGrid.data[start_row+3][start_col+2] = 1;
        newGrid.data[start_row+3][start_col+3] = 1;
    }
    return newGrid;
}

// Add an "glider" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addGlider = function(grid, start_row, start_col) {
    // Glider is initially 3 lines tall and 3 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 1 > grid.height) && !(start_col + 3 > grid.width)) {
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+1][start_col+2] = 1;
        newGrid.data[start_row+2][start_col+0] = 1;
        newGrid.data[start_row+2][start_col+1] = 1;
        newGrid.data[start_row+2][start_col+2] = 1;
    }
    return newGrid;
}

// Add an "pulsar" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addPulsar = function(grid, start_row, start_col) {
    // Pulsr is initially 13 lines tall and 13 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 13 > grid.height) && !(start_col + 13 > grid.width)) {
        newGrid.data[start_row+0][start_col+2] = 1;
        newGrid.data[start_row+0][start_col+3] = 1;
        newGrid.data[start_row+0][start_col+4] = 1;
        newGrid.data[start_row+0][start_col+8] = 1;
        newGrid.data[start_row+0][start_col+9] = 1;
        newGrid.data[start_row+0][start_col+10] = 1;

        newGrid.data[start_row+2][start_col+0] = 1;
        newGrid.data[start_row+2][start_col+5] = 1;
        newGrid.data[start_row+2][start_col+7] = 1;
        newGrid.data[start_row+2][start_col+12] = 1;

        newGrid.data[start_row+3][start_col+0] = 1;
        newGrid.data[start_row+3][start_col+5] = 1;
        newGrid.data[start_row+3][start_col+7] = 1;
        newGrid.data[start_row+3][start_col+12] = 1;

        newGrid.data[start_row+4][start_col+0] = 1;
        newGrid.data[start_row+4][start_col+5] = 1;
        newGrid.data[start_row+4][start_col+7] = 1;
        newGrid.data[start_row+4][start_col+12] = 1;

        newGrid.data[start_row+5][start_col+2] = 1;
        newGrid.data[start_row+5][start_col+3] = 1;
        newGrid.data[start_row+5][start_col+4] = 1;
        newGrid.data[start_row+5][start_col+8] = 1;
        newGrid.data[start_row+5][start_col+9] = 1;
        newGrid.data[start_row+5][start_col+10] = 1;

        newGrid.data[start_row+7][start_col+2] = 1;
        newGrid.data[start_row+7][start_col+3] = 1;
        newGrid.data[start_row+7][start_col+4] = 1;
        newGrid.data[start_row+7][start_col+8] = 1;
        newGrid.data[start_row+7][start_col+9] = 1;
        newGrid.data[start_row+7][start_col+10] = 1;

        newGrid.data[start_row+8][start_col+0] = 1;
        newGrid.data[start_row+8][start_col+5] = 1;
        newGrid.data[start_row+8][start_col+7] = 1;
        newGrid.data[start_row+8][start_col+12] = 1;

        newGrid.data[start_row+9][start_col+0] = 1;
        newGrid.data[start_row+9][start_col+5] = 1;
        newGrid.data[start_row+9][start_col+7] = 1;
        newGrid.data[start_row+9][start_col+12] = 1;

        newGrid.data[start_row+10][start_col+0] = 1;
        newGrid.data[start_row+10][start_col+5] = 1;
        newGrid.data[start_row+10][start_col+7] = 1;
        newGrid.data[start_row+10][start_col+12] = 1;

        newGrid.data[start_row+12][start_col+2] = 1;
        newGrid.data[start_row+12][start_col+3] = 1;
        newGrid.data[start_row+12][start_col+4] = 1;
        newGrid.data[start_row+12][start_col+8] = 1;
        newGrid.data[start_row+12][start_col+9] = 1;
        newGrid.data[start_row+12][start_col+10] = 1;
    }
    return newGrid;
}

// Add an "light-weight spaceship" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addLWSS = function(grid, start_row, start_col) {
    // LWSS is initially 4 lines tall and 5 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 4 > grid.height) && !(start_col + 5 > grid.width)) {
        newGrid.data[start_row+0][start_col+0] = 1;
        newGrid.data[start_row+0][start_col+3] = 1;
        newGrid.data[start_row+1][start_col+4] = 1;
        newGrid.data[start_row+2][start_col+0] = 1;
        newGrid.data[start_row+2][start_col+4] = 1;
        newGrid.data[start_row+3][start_col+1] = 1;
        newGrid.data[start_row+3][start_col+2] = 1;
        newGrid.data[start_row+3][start_col+3] = 1;
        newGrid.data[start_row+3][start_col+4] = 1;
    }
    return newGrid;
}

// Add an "puffer-train" pattern to the grid
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Grid row to start adding the pattern at. 0-based.
// start_col: Grid column to start adding the pattern at. 0-based.
const addPufferTrain = function(grid, start_row, start_col) {
    // Puffer-train is initially 1 line tall and 8 pixels wide.
    // Can't add it if the start location is too far down/right
    let newGrid = grid;
    if (!(start_row + 1 > grid.height) && !(start_col + 8 > grid.width)) {
        newGrid.data[start_row+0][start_col+0] = 1;
        newGrid.data[start_row+0][start_col+1] = 1;
        newGrid.data[start_row+0][start_col+2] = 1;
        newGrid.data[start_row+0][start_col+3] = 1;
        newGrid.data[start_row+0][start_col+4] = 1;
        newGrid.data[start_row+0][start_col+5] = 1;
        newGrid.data[start_row+0][start_col+6] = 1;
        newGrid.data[start_row+0][start_col+7] = 1;

        newGrid.data[start_row+0][start_col+9] = 1;
        newGrid.data[start_row+0][start_col+10] = 1;
        newGrid.data[start_row+0][start_col+11] = 1;
        newGrid.data[start_row+0][start_col+12] = 1;
        newGrid.data[start_row+0][start_col+13] = 1;
    }
    return newGrid;
}

// Counts the number of live cells in the grid that surround the starting cell
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// start_row: Central row of the grid, around which the count is performed. 0-based.
// start_col: Central col of the grid, around which the count is performed. 0-based.
const countLiveCellsIn3x3Grid = function(grid, start_row, start_col) {
    // Trap for being at the edges of the grid
    let i_min;
    if (start_row == 0) {
        i_min = start_row;
    } else {
        i_min = start_row -1;
    }
    let i_max;
    if (start_row == grid.height-1) {
        i_max = start_row;
    } else {
        i_max = start_row + 1;
    }
    let j_min;
    if (start_col == 0) {
        j_min = start_col;
    } else {
        j_min = start_col -1;
    }
    let j_max;
    if (start_col == grid.width-1) {
        j_max = start_col;
    } else {
        j_max = start_col + 1;
    }
    // Search over the bounds determined above, for live cells.
    // :NOTE: The central cell is excluded from the count.
    let liveCount = 0;
    for (let i = i_min; i <= i_max; i++) {
        for (let j = j_min; j <= j_max; j++){
            if (!(i == start_row && j == start_col) && grid.data[i][j] == 1) {
                liveCount++;
            }
        }
    }
    return liveCount;
};

// The kernel of the GOL animation
// grid: The grid to add the pattern to
// grid_height: Number of rows in the grid. 1-based.
// grid_width: Number of columns in the grid. 1-based.
// delay_in_ms: The amount of time (in ms) between updates to the grid.
async function animate(grid, delay_in_ms) {
    // GOL kernel
    while (1) {
        // Create HTML img elements to match starting values
        let htmlContent = "";
        let newDiv;
        mainNode.innerHTML = "";
        for (let i = 0; i < grid.height; i++) {
            htmlContent = "";
            newVDiv = document.createElement("div");
            newVDiv.classList.add("VDiv")

            for (let j = 0; j < grid.width; j++) {
                newHDiv = document.createElement("div");
                newHDiv.classList.add("HDiv")
                if (grid.data[i][j] == 1) {
                    newHDiv.classList.add("Live");
                    //newHDiv.innerHTML = "1";
                } else {
                    newHDiv.classList.add("Dead");
                    //newHDiv.innerHTML = "0";
                }
                newVDiv.append(newHDiv);
            }
            mainNode.append(newVDiv)
        }

        await sleep(delay_in_ms);

        let newGrid = createGrid(grid.height, grid.width);
        for (let i = 0; i < grid.height; i++) {
            for (let j = 0; j < grid.width; j++) {
                let liveCellCount = countLiveCellsIn3x3Grid(grid, i, j);

                if (grid.data[i][j] == 0 && liveCellCount == 3) {
                    newGrid.data[i][j] = 1;
                } else if (grid.data[i][j] == 1 && (liveCellCount == 2 || liveCellCount == 3)) {
                    newGrid.data[i][j] = 1;
                } else {
                    newGrid.data[i][j] = 0;
                }
            }
        }
        grid = newGrid;
    }
}

// Create and initialize the grid with nothing in it
const GRID_HEIGHT = 32;
const GRID_WIDTH  = 32;
const ANIMATION_DELAY_IN_MS = 500;
let curGrid = createGrid(GRID_HEIGHT, GRID_WIDTH);

// Add initial patterns in grid
addAcorn(curGrid, 8,8);
addBlinker(curGrid, 2,28);
addGlider(curGrid,  2,20);
addToad(curGrid,  16,4);
addBeacon(curGrid,  23,4);
addPulsar(curGrid,  16,16);
addLWSS(curGrid,  0,0);
addPufferTrain(curGrid,  30,0);

// Kick off he kernel
animate(curGrid, ANIMATION_DELAY_IN_MS);
