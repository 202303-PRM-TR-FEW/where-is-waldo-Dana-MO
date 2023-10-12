const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

  const whereIsWaldo = (matrix) => {
    const waldo = matrix[0][0];
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (waldo !== matrix[row][col] && row === 0 && col === 1) {
          return [row + 1, col];
        } else if (waldo !== matrix[row][col]) {
          return [row + 1, col + 1];
        }
      }
    }
  };


console.log(whereIsWaldo(example));
