const gameBoard = (function () {
    console.log("gameBoard on")
    let board = new Array(9);

    const Player = (name, symbol) => {
        let positions = []
        return {name, symbol, positions}
    };

    winningCombos = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]];

    let player1 = Player("p1", "x");
    let player2 = Player("p2", "o");

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("click", () => {
            turn(square.id)
        })
    })

    let whosTurn = false; // false = player1's turn , true = player2's turn
    function turn(selectedPosition) {
        if (checkValid(selectedPosition)) {
            console.log("valid position")
            
            if (!whosTurn) {
                player1.positions.push(selectedPosition)
                displayController.updateBoard(player1, position)
            } else {
                player2.positions.push(selectedPosition)
                displayController.updateBoard(player2, position)
            }
            anyWins();
            whosTurn = !whosTurn;
        }
        else {
            displayController.invalidSelection()
        }
    }

}) ()

const displayController = (() => {

}) ()