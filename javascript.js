
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
    cellsPerSide = getGridDims();
    deleteGrid();
    createBlocks(cellsPerSide);
};

function randomRGB() {
    let rgbValue = Math.floor(Math.random() * (255 + 1));
    console.log(rgbValue);
    return rgbValue;
};

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