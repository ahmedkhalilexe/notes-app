"use strict";
const addBtn = document.getElementById("addbtn");
const creatNotesContainer = document.getElementById("creatNotesContainer");
const cancelbtn = document.getElementById("cancel");
const createbtn = document.getElementById("create");
const inputTitle = document.getElementById("notetitle");
const inputDesc = document.getElementById("noteDesc");
const container = document.getElementById("container");
addBtn.addEventListener("click", () => {
    creatNotesContainer.classList.add("show");
});
cancelbtn.addEventListener("click", () => {
    creatNotesContainer.classList.remove("show");
});
createbtn.addEventListener("click", () => {
    let notecontainer = document.createElement("div");
    notecontainer.innerHTML = `
    <h2>${inputTitle.value}</h2>
    <p>
      ${inputDesc.value}
    </p>`;
    notecontainer.classList.add("notesContainer");
    container.appendChild(notecontainer);
    creatNotesContainer.classList.remove("show");
    console.log("button clicked");
});
