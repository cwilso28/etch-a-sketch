
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
};

function randomRGB() {
    let rgbValue = Math.floor(Math.random() * (255 + 1));
    console.log(rgbValue);
    return rgbValue;
};

createBlocks(4);

let cellDiv = document.querySelector(".cell");

let containerDiv = document.querySelector("#container");

containerDiv.addEventListener("mouseover", function (e) {
    if (e.target && e.target.matches(".cell")) {
        const enteredCell = e.target;
        cellBackground = enteredCell.style.opacity;
        console.log(cellBackground);
        if (cellBackground < 1.0) {
            enteredCell.style.opacity = String(Number(cellBackground) + 0.1);
        };
    };
});