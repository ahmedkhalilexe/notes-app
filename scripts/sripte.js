"use strict";
const addBtn = document.getElementById("addbtn");
const creatNotesContainer = document.getElementById("creatNotesContainer");
const cancelbtn = document.getElementById("cancel");
const createbtn = document.getElementById("create");
const inputTitle = document.getElementById("notetitle");
const inputDesc = document.getElementById("noteDesc");
const container = document.getElementById("container");
let noteList = [];
//make the form visible
addBtn.addEventListener("click", () => {
    creatNotesContainer.classList.add("show");
});
const deletebtn = document.getElementById("eldelete");
//make the form invisible
cancelbtn.addEventListener("click", () => {
    creatNotesContainer.classList.remove("show");
});
createbtn.addEventListener("click", () => {
    noteList.push({
        title: inputTitle.value,
        desc: inputDesc.value,
        id: noteList.length + 1,
    });
    updateUi();
    inputTitle.value = "";
    inputDesc.value = "";
});
//updates UI elements
function updateUi() {
    container.innerHTML = "";
    noteList.forEach((note, index) => {
        let notecontainer = document.createElement("div");
        notecontainer.innerHTML = `
    <h2>${note.title}</h2>
    <p>
      ${note.desc}
    </p>
    <span class = "deletebtn" onclick = "deleteNote(${index})">delete</span>
    `;
        notecontainer.classList.add("notesContainer");
        notecontainer.setAttribute("id", `${note.id}`);
        container.appendChild(notecontainer);
        creatNotesContainer.classList.remove("show");
    });
}
//deletes UI element
function deleteNote(index) {
    noteList.splice(index, 1);
    updateUi();
}
