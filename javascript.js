
function createBlocks(blocksPerSide) {
    let totalBlocks = blocksPerSide ** 2;
    let containerDiv = document.querySelector("#container");
    let flexBasisSetting = 100 / blocksPerSide;
    for (i = 0; i < totalBlocks; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flexBasis = flexBasisSetting + "%";
        cell.style.backgroundColor = "rgb(255 0 255)"
        cell.style.opacity = "0.1"
        containerDiv.appendChild(cell);
    };
};

function resetGrid() {
    const cellList = document.querySelectorAll(".cell");
    for (let i = 0; i < cellList.length; i++) {
        cellList[i].style.backgroundColor = "rgb(255 255 0)"
    };
};

function parseRGBA(rgbaValues) {

}

createBlocks(4);

let cellDiv = document.querySelector(".cell");

let containerDiv = document.querySelector("#container");

containerDiv.addEventListener("mouseover", function (e) {
    if (e.target && e.target.matches(".cell")) {
        const enteredCell = e.target;
        cellBackground = enteredCell.style.opacity;
        console.log(cellBackground);
        // cellOpacity = document.getComputedStyle(enteredCell).getPropertyValue("opacity");
        // cellOpacity += 0.1;
        enteredCell.style.backgroundColor = "rgb(0 0 0)"
        enteredCell.style.opacity = String(Number(cellBackground) + 0.1);
        // enteredCell.style.backgroundColor = "black";
        // enteredCell.style.opacity = cellOpacity;
    };
});