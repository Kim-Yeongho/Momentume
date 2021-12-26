const loginForm = document.querySelector("#login");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todolist-form");
const todolist = document.querySelector("#todolist");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "name";
const localStorageName = localStorage.getItem(USERNAME_KEY);


function handleSubmit(event){
    event.preventDefault();
    const name = loginForm.querySelector("input").value;
    greetingFunction(name);
    localStorage.setItem(USERNAME_KEY, name);
    loginForm.classList.add(CLASSNAME_HIDDEN);
    
}

function greetingFunction(name){
    paintToDoList(true);
    greeting.innerHTML = `<label>What is ${name}'s ToDo for today?</label>`;
}

function paintToDoList(bool){
    if(bool){
        todoForm.classList.remove(CLASSNAME_HIDDEN);
        todolist.classList.remove(CLASSNAME_HIDDEN);
    }else{
        todoForm.classList.add(CLASSNAME_HIDDEN);
        todolist.classList.add(CLASSNAME_HIDDEN);
    }
}


if(localStorage.getItem(USERNAME_KEY) === null){
    paintToDoList(false);
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", handleSubmit);

}else{
    greetingFunction(localStorageName);
}