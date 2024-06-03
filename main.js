const gridSize = parseInt(prompt("Enter grid size: "));
let columns = gridSize;
let rows = gridSize;
const gridContainer = document.querySelector("#grid");
const row = document.querySelector(".row");

const clear = document.querySelector("#clear-button");

const makeGrid = () => {
  if (columns > 100 || rows > 100) {
    alert("Please enter a number less than 100");
  } else {
    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      gridContainer.appendChild(column);
      for (let j = 0; j < rows; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        row.addEventListener("mouseover", () => {
          const randomColor = getRandomColor();
          row.style.backgroundColor = randomColor;
        });
        row.addEventListener("mouseout", () => {
          row.style.backgroundColor = randomColor;
        });
      }
    }
  }
};

makeGrid();

clear.addEventListener("click", () => {
  // Remove all the columns and rows
  const columns = document.querySelectorAll(".column");
  const rows = document.querySelectorAll(".row");

  columns.forEach((column) => {
    column.remove();
  });

  rows.forEach((row) => {
    row.remove();
  });

  // Recreate the grid
  makeGrid();
});

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
