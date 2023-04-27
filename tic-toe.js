let board = ["X", "O", "X", "O", "O", "O", "X", "X", "O"];

let list = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function won() {
  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (board[a] && board[a] === board[a] && board[b] === board[c]) {
      console.log(board[a]);
    }
  }

  return null;
}

won();
