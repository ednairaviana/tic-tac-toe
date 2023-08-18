const gridItem = document.querySelectorAll(`.board-game .grid-item`);
const gameBoard = [];

let symbol = "X";
gridItem.forEach(function (element, index) {
    
    element.addEventListener("click", () => {  
        if(element.innerText == "") {
            renderSign(element);
            gameBoard[index] = symbol;
            checkVictory();
            checkBoard();
        }
    });
});

function checkVictory() {
    function setField (i1, i2, i3) {
        return [gameBoard[i1], gameBoard[i2], gameBoard[i3]];
    }

    const victoryProb = [
        setField(0, 1, 2),
        setField(3, 4, 5),
        setField(6, 7, 8),
        setField(0, 3, 6),
        setField(1, 4, 7),
        setField(2, 5, 8),
        setField(0, 4, 8),
        setField(2, 4, 6),
    ]

    victoryProb.forEach(function (probs) {
        if (probs.every(field => field == "X")) {
            clearBoard();
        } else if (probs.every(field => field == "O")) {
            clearBoard();
        }
    })
}

function checkBoard() {
    if(gameBoard.length == 9 && gameBoard.includes(undefined) == false) {
        clearBoard();
    }
}

function clearBoard() {
    gridItem.forEach(function (element) {
        element.innerText = "";
    })
    gameBoard.length = 0;
}

function renderSign(parent) {
    const sign = document.createElement("i");
    sign.classList.add("fa-regular");

    if (symbol == "X") {
        sign.classList.add("fa-x");
        symbol = "O";
    } else {
        sign.classList.add("fa-circle");
        symbol = "X";
    }

    parent.appendChild(sign);
}