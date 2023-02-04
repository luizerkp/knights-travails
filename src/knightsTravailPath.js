import Board from "./gameBoard";
import knightPossibleMoves from "./knightPossibleMoves";

const checkInvalidSquares = (start, end) => {
  if (!Array.isArray(start) || !Array.isArray(end)) {
    return true;
  }

  if (start.length === 0 || end.length === 0) {
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
  return board.breadthFirstSearch(`${start[0]},${start[1]}`, `${end[0]},${end[1]}`);
};

const getKnightsShortestPath = (start, end) => {
  const path = shortestPath(start, end);
  return path;
};

const displayPath = (pathTextContent) => {
  const testsContainer = document.querySelector(".tests-container");
  const resultsDiv = document.createElement("div");
  resultsDiv.textContent = pathTextContent;
  return testsContainer.appendChild(resultsDiv);
};

const printPath = (path) => {
  // if path is not an array, then it will contain the error message from checkValidSquares
  if (!Array.isArray(path)) {
    displayPath(path);
    return console.log(path);
  }

  const moves = path.length - 1;
  const movesMsg = `You made it in ${moves} moves! here is your path: `;
  displayPath(movesMsg);
  console.log(movesMsg);
  path.forEach((move) => {
    displayPath(move);
    console.log(move);
  });

  return moves;
};

export { getKnightsShortestPath, printPath };
