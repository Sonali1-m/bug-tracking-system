document.getElementById('add-bug-btn').addEventListener('click', addBug);

function addBug() {
    const title = document.getElementById('bug-title').value;
    const description = document.getElementById('bug-description').value;
    const status = document.getElementById('bug-status').value;

    if (title && description) {
        const bugTable = document.getElementById('bug-list');
        const newRow = bugTable.insertRow();

        const titleCell = newRow.insertCell(0);
        const descriptionCell = newRow.insertCell(1);
        const statusCell = newRow.insertCell(2);
        const actionCell = newRow.insertCell(3);

        titleCell.textContent = title;
        descriptionCell.textContent = description;
        statusCell.textContent = status;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editBug(newRow);
        };
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            const row = this.parentNode.parentNode; // Get the parent row of the delete button
            row.parentNode.removeChild(row); // Remove the row from its parent (the table)
        };
        actionCell.appendChild(deleteButton);

        // Clear the input fields
        document.getElementById('bug-title').value = '';
        document.getElementById('bug-description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

function editBug(row) {
    const cells = row.getElementsByTagName('td');
    const title = cells[0].textContent;
    const description = cells[1].textContent;
    const status = cells[2].textContent;

    document.getElementById('bug-title').value = title;
    document.getElementById('bug-description').value = description;
    document.getElementById('bug-status').value = status;

    row.remove();
}
