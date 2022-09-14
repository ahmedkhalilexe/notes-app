const addBtn: HTMLElement = document.getElementById("addbtn")!;
const creatNotesContainer: HTMLElement = document.getElementById(
  "creatNotesContainer"
)!;
const cancelbtn: HTMLElement = document.getElementById("cancel")!;
const createbtn: HTMLElement = document.getElementById("create")!;
const inputTitle: HTMLInputElement = document.getElementById(
  "notetitle"
)! as HTMLInputElement;
const inputDesc: HTMLInputElement = document.getElementById(
  "noteDesc"
)! as HTMLInputElement;
const container: HTMLElement = document.getElementById("container")!;
interface NOTE {
  title: string;
  desc: string;
  id: number;
}
let noteList: Array<NOTE> = [];
//make the form visible
addBtn.addEventListener("click", () => {
  creatNotesContainer.classList.add("show");
});
const deletebtn: HTMLElement | null = document.getElementById("eldelete");
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
function deleteNote(index: number) {
  noteList.splice(index, 1);
  updateUi();
}
