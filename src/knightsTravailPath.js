/*
  have to add the extendsion to run in terminal using node:
    Updated "import/extensions" on .eslintrc.json to always require extension
    updated package.json with "type": "module"
    This is to avoid "Cannot find module" error when using node.
*/
import Board from "./gameBoard.js";
import knightPossibleMoves from "./knightPossibleMoves.js";

const checkInvalidSquares = (start, end) => {
  if (!Array.isArray(start) || !Array.isArray(end)) {
    return true;
  }
  const invalid = [...start, ...end].some((value) => {
    if (value > 7 || value < 0 || !Number.isInteger(value)) {
      return true;
    }
    return false;
  });

  return invalid;
};
const shortestPath = (start, end) => {
  if (checkInvalidSquares(start, end)) {
    return "Please use positive interger coordinates that fall within an 8x8 board i.e. [0,0] to [7, 7]";
  }

  const board = new Board();
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      board.addNode(i, j);
      for (let k = 0; k < 8; k += 1) {
        const x = i + knightPossibleMoves[k][0];
        const y = j + knightPossibleMoves[k][1];
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          board.addEdge(i, j, x, y);
        }
      }
    }
  }
  return board.bfs(`${start[0]},${start[1]}`, `${end[0]},${end[1]}`);
};

// TODO: refactor this into it's own function
const path = shortestPath([3, 3], [4, 3]);
const moves = path.length - 1;
console.log(`You made it in ${moves} moves! here is your path: `);
path.forEach((move) => {
  console.log(move);
});
