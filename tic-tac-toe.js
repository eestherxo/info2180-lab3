document.addEventListener("DOMContentLoaded", function () {
    
    // selects the board
    const board = document.getElementById("board");

    // selects all divs inside the board
    const squares = board.querySelectorAll("div");

    // adds the 'square' class to each div
    squares.forEach((div) => {
        div.className = "square";
    });
});