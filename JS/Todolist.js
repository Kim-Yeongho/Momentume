const todoInput = document.querySelector("#todolist-form input");

let toDos = [];

function handleSubmitToDo(event){
    event.preventDefault();
    const toDoObject = {id: Date.now(), Text:todoInput.value};
    todoInput.value = "";
    toDos.push(toDoObject);

    addToDoList(toDoObject);
    saveToDoList(toDos);
}

function addToDoList(toDoObject){
    const li = document.createElement("li");
    li.id = toDoObject.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = toDoObject.Text;
    button.innerText = "❌";
    li.appendChild(span);
    span.addEventListener("click", (element) =>{
        span.innerHTML = `<del>${toDoObject.Text}</del>`;
    });
    li.appendChild(button);
    button.addEventListener("click", (element) => {
        const selectLi = element.target.parentElement;
        
        toDos = toDos.filter( (item) => {return item.id !== parseInt(selectLi.id);} );
        
        selectLi.remove();
        saveToDoList(toDos);

    });
    todolist.appendChild(li);

}


function saveToDoList(toDos){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}




if(localStorage.getItem("name") === null){
    todoForm.classList.add("hidden");
    todolist.classList.add("hidden");
}else{
    todoForm.classList.remove("hidden");
    todolist.classList.remove("hidden");

    const savedToDos = localStorage.getItem("toDos");

    if(savedToDos !== null){
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(element => {
            addToDoList(element);
        });
    }

}

todoForm.addEventListener("submit", handleSubmitToDo);

