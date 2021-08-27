const gameBoard = (function () {
    console.log("gameBoard on")
    let board = new Array(9);

    const Player = (name, symbol) => {
        let positions = [];
        return {name, symbol, positions}
    };



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
                anyWins(player1)
            } else {
                player2.positions.push(selectedPosition)
                displayController.updateBoard(player2, selectedPosition)
                anyWins(player2)
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

    function anyWins(player) {
        let winningCombos = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]];
        console.log(player.positions) 
        for (let i=0; i<winningCombos.length; i++){
            let check = winningCombos[i].every(val => player.positions.includes(val.toString()));
            console.log(check)
            if (check) {
                return displayController.gameOver(player)
            }
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

    function gameOver() {
        document.getElementById("game-display").setAttribute("style", "display:none")
        document.getElementById("game-over").classList = ""
    }

    function restart() {
        gameBoard.player1.positions = []
        gameBoard.player2.positions = []
        document.getElementById("game-display").setAttribute("style", "display:block")
    }

    playAgain = document.getElementById("play-again")
    playAgain.addEventListener("click", restart())

    return {updateBoard, gameOver}
}) ()