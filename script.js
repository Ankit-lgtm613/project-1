// ---------- Load Notes on Page Load ----------
window.onload = function() {
    displayNotes();
}

// ---------- Add Note ----------
function addNote() {
    let note = document.getElementById("noteInput").value;
    if (note === "") return alert("Enter a note!");

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteInput").value = "";
    displayNotes();
}

// ---------- Display Notes ----------
function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        list.innerHTML += `
            <li>
                ${note}
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </li>
        `;
    });
}

// ---------- Edit Note ----------
function editNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let updated = prompt("Edit your note:", notes[index]);

    if (updated !== null) {
        notes[index] = updated;
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }
}

// ---------- Delete Note ----------
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}
