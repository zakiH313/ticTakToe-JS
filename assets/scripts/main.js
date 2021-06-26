import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  console.log("New game");
  onRestart();
});

document.querySelector(".night-svg-cta").addEventListener("click", () => {
  changeColorTheme();
});

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
}

function onRestart() {
  game = new Game();
  gameView.updateBoard(game);
}

function changeColorTheme() {
  toggleStyle(document.querySelector(".night-svg-cta"), "color", "white");
  toggleStyle(
    document.getElementsByTagName("body")[0],
    "background-color",
    "black"
  );
  toggleStyle(document.getElementsByTagName("h1")[0], "color", "white");
  for (let i = 0; i < game.board.length; i++) {
    const tile = document.querySelector(`.board-tile[data-index='${i}']`);
    toggleStyle(tile, "background-color", "black");
  }
  toggleStyle(document.querySelector(".restart"), "color", "white");
}

function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) {
    el.style[styleName] = value;
  } else {
    el.style[styleName] = "";
  }
}

gameView.updateBoard(game);
