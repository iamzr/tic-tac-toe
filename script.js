const gameBoard = (function () {
    board = new Array(9);

    return {board}
}) ()

const player = function (name, symbol) {
    let turn = false; 

    let winner = () => {
        console.log(`${name} is the winner!`)
    }
    return {name, symbol, turn, winner}
}

const gameController = function () {
    
}