const boardGame = document.querySelector(".board-game");
const banner = document.querySelector(".main-banner");
const gridItem = document.querySelectorAll(`.board-game .grid-item`);

const gameBoard = [];
let symbol = "X";
displayTurn(symbol);

gridItem.forEach(function (element, index) {
    
    element.addEventListener("click", () => {  
        if(element.childNodes.length == 0) {
            gameBoard[index] = symbol;
            renderSign(element);
            displayTurn(symbol);
            setTimeout(checkVictory, 500);
            setTimeout(checkBoard, 500);
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
    ];

    victoryProb.forEach(function (probs) {
        if (probs.every(field => field == "X")) {
            adviceWin("X");
            displayTurn();
            clearBoard();
        } else if (probs.every(field => field == "O")) {
            adviceWin("O");
            displayTurn()
            clearBoard();
        }
    })
}

function checkBoard() {
    if(gameBoard.length == 9 && gameBoard.includes(undefined) == false) {
        adviceWin();
        displayTurn();
        clearBoard();
    }
}

function clearBoard() {
    gridItem.forEach(function (element) {
        element.innerText = "";
    });
    gameBoard.length = 0;

    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", () => {
        banner.style.display = "none";
        boardGame.style.display = "grid";
        symbol = "X";
        displayTurn(symbol);
    });
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

function adviceWin(winner) {
    const winX = document.querySelector("#x-win");
    const winO = document.querySelector("#o-win");
    const draw = document.querySelector("#draw");

    boardGame.style.display = "none";
    banner.style.display = "flex";

    if (winner == "X") {
        displayWin("flex", "none", "none");
    } else if (winner == "O") {
        displayWin("none", "flex", "none");
    } else {
        displayWin("none", "none", "flex");
    }

    function displayWin(x, o, dr) {
        winX.style.display = x;
        winO.style.display = o;
        draw.style.display = dr;
    }
}

function displayTurn(turn) {
    const turnX = document.querySelector("#x-turn");
    const turnO = document.querySelector("#o-turn");

    if(turn == "X") {
        turnX.style.display = "block";
        turnO.style.display = "none";
    } else if (turn == "O") {
        turnX.style.display = "none";
        turnO.style.display = "block";
    } else {
        turnX.style.display = "none";
        turnO.style.display = "none";
    }
}