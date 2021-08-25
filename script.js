const gameBoard = (function (p1, p2) {
    board = new Array(9);

    const Player = (name, symbol) => {
        return {name, symbol}
    };

    player1 = Player(p1);
    player2 = Player(p2);
      
    return {board}
}) ()

const displayController = (() => {

    const squares = document.querySelectorAll("square")
        squares.forEach(square => {
            square.addEventListener("click", () =>{
                console.log(square.id)
                return square.id;
 
})
