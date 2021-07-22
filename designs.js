// Declaring Variables

    const height = document.getElementById("inputHeight");
    const width = document.getElementById("inputWidth");
    const form = document.getElementById("sizePicker");
    const table = document.getElementById("pixelCanvas");
    const color = document.getElementById("colorPicker");

// Event Listeners

    form.addEventListener("submit", makeGrid);

// Making the Grid function

    function makeGrid(e) {

// Prevent From Browser Reloading

    e.preventDefault();

// ClearGrid For every submission

    clearGrid();

// Getting the Table's Child value

    const rows = height.value;
    const column = width.value;
    const tbody = document.createElement("tbody");

// For Loop

    for (let r = 0; r < rows; r++) {
        const row = tbody.insertRow(r);
      
    for (let c = 0; c < column; c++) {
        
          const cell = row.insertCell(c);
          cell.addEventListener("click", function(e) {
          e.target.style.backgroundColor = color.value;
        
        });
      }
    }

// Append table body to table

    table.appendChild(tbody);
}

// Clearing the Grid

    function clearGrid() {
        table.innerHTML = " ";
    }
