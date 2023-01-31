import Board from "./gameBoard.js";
import knightMoves from "./knightMoves.js";

const shortestPath = (start, end) => {
  const board = new Board();
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      board.addNode(i, j);
      for (let k = 0; k < 8; k += 1) {
        const x = i + knightMoves[k][0];
        const y = j + knightMoves[k][1];
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          board.addEdge(i, j, x, y);
        }
      }
    }
  }
  return board.bfs(`${start[0]},${start[1]}`, `${end[0]},${end[1]}`);
};

// need to fix bug that ouputs [ '0,0', '2,1', '3,3' ] instead of [ '0,0', '1,2', '3,3' ]
console.log(shortestPath([0, 0], [3, 3]));
