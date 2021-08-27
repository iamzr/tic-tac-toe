const gameBoard = (function () {
    console.log("gameBoard on")
    let board = new Array(9);

    const Player = (name, symbol) => {
        let positions = [5];
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
            console.log(square.id, typeof(player1.positions))
            turn(square.id);
        })
    })

    let whosTurn = false; // false = player1's turn , true = player2's turn
    function turn(selectedPosition) {
        if (checkValid(selectedPosition)) {
            console.log("valid position")
            
            if (!whosTurn) {
                player1.positions.push(selectedPosition)
                displayController.updateBoard(player1, selectedPosition)
            } else {
                player2.positions.push(selectedPosition)
                displayController.updateBoard(player2, selectedPosition)
            }
            whosTurn = !whosTurn;
        }
    }

    function checkValid(position) {
        if (player1.positions.includes(position) || player2.positions.includes(position)) {
            return false;
        } else {
            return true;
        }
    }

    return{player1, player2}

}) ()

const displayController = (() => {
    function updateBoard(player, position) {
        placeSymbol(player, position);
        changePlayer(player)
    }

    function changePlayer(player) {
        whosTurnDiv = document.getElementById("whos-turn");
        whosTurnDiv.textContent = player.name;
    }

    function placeSymbol (player, position) {
        square = document.getElementById(position);
        square.textContent = player.symbol;
    }

    return {updateBoard}
}) ()