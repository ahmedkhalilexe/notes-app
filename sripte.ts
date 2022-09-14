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
