
const notescontainer = document.querySelector(".text");
const createbtn = document.querySelector(".createnotes");

createbtn.addEventListener("click", () => {
    const noteContainer = document.createElement("div");
    noteContainer.className = "noteContainer";

    const inputbox = document.createElement("p");
    const icon = document.createElement("i");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    inputbox.textContent = "Add Your Note Here."; 

    icon.className = "fa-solid fa-trash-can";
    icon.style.cursor = "pointer"; 

    
    noteContainer.appendChild(inputbox);
    noteContainer.appendChild(icon);
    notescontainer.appendChild(noteContainer);

  
    icon.addEventListener("click", () => {
        noteContainer.style.animation = "fadeOut 0.5s forwards"; 
        noteContainer.addEventListener("animationend", () => {
            notescontainer.removeChild(noteContainer); 
        });
    });
});