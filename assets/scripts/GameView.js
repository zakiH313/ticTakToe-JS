export default class GameView {
  constructor() {
    console.log(`init game view`);
  }

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();
    console.log(game.board);
    var winningPlayer;
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
        winningPlayer = game.board[i];
      }
    }
    if (winningCombination) {
      alert(`Congrats Player ${winningPlayer}, you won!`);
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");

    playerX.classList.remove("active");
    playerO.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
