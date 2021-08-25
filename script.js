const gameBoard = (function () {
    console.log("gameBoard on")
    board = new Array(9);

    const Player = (name, symbol) => {
        let positions = []
        return {name, symbol, positions}
    };

    player1 = Player("p1", "x");
    player2 = Player("p2", "o");
    
    whosTurn = false; // False = player 1, true = player 2
    function turn (position){
        if (!whosTurn) {
            player1.positions = position;
        } else {
            player2.positions = position;
        }
        whosTurn = !whosTurn;
        updateWhosTurn(whosTurn);
    }

    return {board, whosTurn}
}) ()

const displayController = (() => {
    console.log("display controller on")

    console.log("running")
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("click", () => {
            console.log(square.id)
        })
    })

    function playerTurn(square) {
        console.log(square.id);
    }

   function updateWhosTurn (bool) {
       let turn = "";

       if (!bool) {
           turn = "Player 1"
       } else {
           turn = "Player 2"
       }

       whosTurnDiv = document.getElementById("whos-turn");
       whosTurnDiv.textContent = turn;
    
   }

   return {playerTurn, updateWhosTurn}
 
}) ()