document.addEventListener("DOMContentLoaded", function () {
  // selects the board
  const board = document.getElementById("board");

  // selects all divs inside the board
  const squares = board.querySelectorAll("div");

  let currentPlayer = "X";
  let gameState = Array(9).fill(null);

  // adds the 'square' class to each div
  squares.forEach((div) => {
    div.className = "square";

    div.addEventListener("click", function () {
      const index = Array.from(squares).indexOf(div);

      // only allow move if the square is empty
      if (gameState[index] === null) {
        gameState[index] = currentPlayer;

        // display X or O
        div.textContent = currentPlayer;

        div.className = currentPlayer === "X" ? "square X" : "square O";

        // switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
