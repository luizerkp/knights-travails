class Board {
  constructor() {
    this.nodes = new Map();
  }

  addNode(x, y) {
    this.nodes.set(`${x},${y}`, []);
  }

  addEdge(x1, y1, x2, y2) {
    this.nodes.get(`${x1},${y1}`).push(`${x2},${y2}`);
  }

  breadthFirstSearch(start, end) {
    const queue = [];
    const visited = new Map();
    const path = new Map();
    queue.push(start);
    visited.set(start, true);
    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr === end) {
        const pathArr = [];
        while (curr !== start) {
          pathArr.unshift(curr);
          curr = path.get(curr);
        }
        pathArr.unshift(start);
        return pathArr;
      }

      this.nodes.get(curr).forEach((node) => {
        if (!visited.get(node)) {
          visited.set(node, true);
          queue.push(node);
          path.set(node, curr);
        }
      });
    }
    return null;
  }
}

export default Board;
