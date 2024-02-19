// Solve the Sudoku puzzle by filling in the board
function puzzleSolver(puzzle) {
  if (solvePuzzle(puzzle)) {
    return puzzle;
  } else {
    return null;
  }
}

//Iterative function to solve the Sudoku puzzle
function solvePuzzle(puzzle) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (checkValidity(puzzle, row, col, num)) {
            puzzle[row][col] = num;
            if (solvePuzzle(puzzle)) {
              return true;
            }
            puzzle[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Checking if a number can be placed in a specific cell without breaking the Sudoku rules
function checkValidity(puzzle, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (puzzle[row][i] === num || puzzle[i][col] === num) {
      return false;
    }
  }

  // Checking if the number already exists in the 3x3 subgrid
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (puzzle[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

// the beginning of sudoku puzzle
const sudokuPuzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const solvedPuzzle = puzzleSolver(sudokuPuzzle);
console.log(solvedPuzzle);
