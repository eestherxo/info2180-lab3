document.addEventListener("DOMContentLoaded", function () {
  // selects the board
  const board = document.getElementById("board");

  // selects all divs inside the board
  const squares = board.querySelectorAll("div");

  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  const statusDiv = document.getElementById("status");

  // Function to check for a winner
  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        gameState[a] !== null &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a]; // returns 'X' or 'O'
      }
    }
    return null; // no winner yet
  }

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

        // check for winner
        const winner = checkWinner();
        if (winner) {
          statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
          statusDiv.classList.add("you-won");
          return; // stop the game
        }

        // switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    div.addEventListener("mouseover", function () {
        if (gameState[Array.from(squares).indexOf(div)] === null) {
          div.className = "hover";
        }
    });

    div.addEventListener("mouseout", function () {
      const index = Array.from(squares).indexOf(div);
      div.className = gameState[index]
        ? `square ${gameState[index]}`
        : "square";
  });
});
});
