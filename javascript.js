
function createBlocks(blocksPerSide) {
    let totalBlocks = blocksPerSide ** 2;
    let containerDiv = document.querySelector("#container");
    let flexBasisSetting = 100 / blocksPerSide;
    for (i = 0; i < totalBlocks; i++) {
        cellBorder = document.createElement("div");
        cellBorder.classList.add("border");
        cellBorder.style.flexBasis = flexBasisSetting + "%";
        cellBorder.style.backgroundColor = "rgb(255 255 255 / 0.0)";

        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = "rgb(" + randomRGB() + " " + randomRGB() + " " + randomRGB() + ")"
        cell.style.opacity = "0.0"
        cellBorder.appendChild(cell)
        containerDiv.appendChild(cellBorder);
    };
};

function resetGrid() {
    const cellList = document.querySelectorAll(".cell");
    for (let i = 0; i < cellList.length; i++) {
        cellList[i].style.backgroundColor = "rgb(" + randomRGB() + " " + randomRGB() + " " + randomRGB() + ")"
        cellList[i].style.opacity = "0.0"
    };
    getGridDims()
};

function randomRGB() {
    let rgbValue = Math.floor(Math.random() * (255 + 1));
    console.log(rgbValue);
    return rgbValue;
};

// INIT function to ask user for the number of cells per size, limit 100
    // Create a prompt for user input
        // Check if the input is a number
        // If it isn't display a message and default to 4 cells per side
    // Check the input to ensure it is less than 100
        // If the value is over 100 default to 100
    // Delete all of the border elements and children
    // Rebuild all border elements and children with user specified grid size
function getGridDims() {
    let userInput = prompt("Number of cells per side (1-100): ", "4");
    let text;
    let cellsPerSide;
    if (isNaN(Number(userInput))) {
        text = "You didn't enter a number! Defaulting to 4 cells per side.";
        alert(text);
        cellsPerSide = 4;
    }
    else if (Number(userInput) < 1 || Number(userInput) > 100) {
        text = "Inputs must be between 1 and 100. Defaulting to 4 cells per side.";
        alert(text);
        cellsPerSide = 4;
    }
    else {
        cellsPerSide = Number(userInput);
    };
    return cellsPerSide;
};

function deleteGrid() {
    let element = document.querySelector("#container");
    let child = element.lastElementChild;
    while(child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

createBlocks(4);

let cellDiv = document.querySelector(".cell");

let containerDiv = document.querySelector("#container");

containerDiv.addEventListener("mouseover", function (e) {
    if (e.target && e.target.matches(".cell")) {
        const enteredCell = e.target;
        cellBackground = enteredCell.style.opacity;
        if (cellBackground < 1.0) {
            enteredCell.style.opacity = String(Number(cellBackground) + 0.1);
        };
    };
});