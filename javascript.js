
function createBlocks(blocksPerSide) {
    let totalBlocks = blocksPerSide ** 2;
    let containerDiv = document.querySelector("#container");
    for (i = 0; i < totalBlocks; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        containerDiv.appendChild(cell);
    }
}

createBlocks(4);

let cellDiv = document.querySelector(".cell");
let containerDiv = document.querySelector("#container");

containerDiv.addEventListener("mouseover", function (e) {
    if (e.target && e.target.matches(".cell")) {
        const enteredCell = e.target;
        enteredCell.setAttribute("style", "background: black;");
    };
});