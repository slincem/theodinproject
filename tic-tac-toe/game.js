const gameBoard = {
    cells: Array(9).fill(null),
}

const visualBoard = document.querySelector(".board")

let currentClickHandler = null

const createPlayer = (name, marker) => {
    return {name, marker}
}    



function playGame() {
    const player1 = createPlayer("Player 1", "X")
    const player2 = createPlayer("Player 2", "O")
    gameBoard.cells = Array(9).fill(null)

    if (currentClickHandler) {
        visualBoard.removeEventListener("click", currentClickHandler)
    }
    
    let currentPlayer = player1

    console.log("currentPlayer", currentPlayer);
    

    function setMarker(position) {
        if (gameBoard.cells[position]) return
        gameBoard.cells[position] = currentPlayer.marker
        console.log(currentPlayer);
        renderBoard()
        checkWinner()
        changePlayer()
    }

    function changePlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1
        console.log("changePlayer", currentPlayer);
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (const combination of winningCombinations) {
            const [a, b, c] = combination
            if (gameBoard.cells[a] && gameBoard.cells[a] === gameBoard.cells[b] && gameBoard.cells[a] === gameBoard.cells[c]) {
                const winner = currentPlayer.name
                const dialog = document.querySelector(".winner-dialog")
                dialog.querySelector(".winner-name").textContent = winner
                dialog.showModal()
            }
        }

        if (gameBoard.cells.every(cell => cell !== null)) {
            const dialog = document.querySelector(".draw-dialog")
            dialog.showModal()
        }
    }

    return {
        setMarker,
        changePlayer
    }
}

function screenController() {
    const {setMarker} = playGame()
    renderBoard()

    currentClickHandler = (e) => {    
        handleClick(e, setMarker)
    }
    visualBoard.addEventListener("click", currentClickHandler)
}

function renderBoard() {
    visualBoard.innerHTML = gameBoard.cells.map((cell, i) => `
        <div class="cell" data-position="${i}">${cell || ""}</div>
    `).join("");
}

function resetGame() {
    const winnerDialog = document.querySelector(".winner-dialog");
    const drawDialog = document.querySelector(".draw-dialog");

    if (winnerDialog?.open) winnerDialog.close();
    if (drawDialog?.open) drawDialog.close();
    screenController()
}

function handleClick(e, setMarker) {
    const position = e.target.dataset.position
    console.log("click", position);
    setMarker(position)
}

screenController()