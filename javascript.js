// INIT a function to generate each block for the etch-a-sketch
    // INIT a variable with the total number of blocks in the etch-a-sketch by squaring the blockPerSide
    // INIT a loop that loops the total number of blocks
        // Create a div block with the class "cell"
        // Append the cell block to the container

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
// cellDiv.addEventListener("mouseenter", () => {cellDiv.setAttribute("style", "background: black;")})