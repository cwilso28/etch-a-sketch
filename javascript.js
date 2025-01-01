
function createBlocks(blocksPerSide) {
    let totalBlocks = blocksPerSide ** 2;
    let containerDiv = document.querySelector("#container");
    for (i = 0; i < totalBlocks; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("style", "background: white;");
        containerDiv.appendChild(cell);
    };
};

function resetGrid() {
    const cellList = document.querySelectorAll(".cell");
    for (let i = 0; i < cellList.length; i++) {
        cellList[i].setAttribute("style", "background: white;");
    };
};

createBlocks(4);

let cellDiv = document.querySelector(".cell");
let containerDiv = document.querySelector("#container");

containerDiv.addEventListener("mouseenter", function (e) {
    if (e.target && e.target.matches(".cell")) {
        const enteredCell = e.target;
        enteredCell.setAttribute("style", "background: black;");
    };
});