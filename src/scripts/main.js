'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

function addRow() {
  const rows = table.querySelectorAll('tr');
  const lastRow = table.querySelector('tr:last-child');
  const newRow = lastRow.cloneNode(true);

  if (rows.length < 10) {
    removeRow.disabled = false;
    table.appendChild(newRow);
  }

  if (rows.length + 1 === 10) {
    appendRow.disabled = true;
  }
}

function addCol() {
  const rows = table.querySelectorAll('tr');
  const countCell = rows[0].querySelectorAll('td');

  if (countCell.length < 10) {
    removeColumn.disabled = false;

    rows.forEach((tr) => {
      const lastCell = tr.querySelector('td:last-child');
      const newCell = lastCell.cloneNode(true);

      tr.appendChild(newCell);
    });
  }

  if (countCell.length + 1 === 10) {
    appendColumn.disabled = true;
  }
}

function deleteRow() {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    appendRow.disabled = false;
    table.removeChild(rows[rows.length - 1]);
  }

  if (rows.length - 1 === 2) {
    removeRow.disabled = true;
  }
}

function deleteCol() {
  const rows = table.querySelectorAll('tr');

  rows.forEach((tr) => {
    const cells = tr.querySelectorAll('td');

    if (cells.length > 2) {
      appendColumn.disabled = false;
      tr.removeChild(cells[cells.length - 1]);
    }

    if (cells.length - 1 === 2) {
      removeColumn.disabled = true;
    }
  });
}

appendRow.addEventListener('click', () => {
  addRow();
});

removeRow.addEventListener('click', () => {
  deleteRow();
});

appendColumn.addEventListener('click', () => {
  addCol();
});

removeColumn.addEventListener('click', () => {
  deleteCol();
});
