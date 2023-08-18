const gridItem = document.querySelectorAll(`.board-game .grid-item`);
console.log(gridItem);

const gameBoard = [];

console.log(gameBoard);

let symbol = "X";

gridItem.forEach(function (element, index) {
    element.addEventListener("click", () => {  

        if(element.innerText == "") {
            element.innerText = symbol;
            gameBoard[index] = symbol;
            console.log(gameBoard);
    
            if (symbol == "X") {
                symbol = "O";
            } else {
                symbol = "X";
            }
            console.log(gridItem);
        }
    });
});