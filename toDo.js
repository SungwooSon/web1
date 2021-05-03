const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";


let toDos = [];

function filterFn(toDo) {
    return toDo.id  === 1;
}

function deleteToDo(event) {
    
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); // filter : true 인 것만 골라서 새로운 배열로 만들어줌.
    });

    //console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDo(toDos);

}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
    //console.log(text);

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);


    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDo();
    //console.log(toDos.length);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value; 
    paintToDos(currentValue);
    toDoInput.value="";
} 

function loadToDoList() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    //console.log(loadedToDos);
    if(loadedToDos !== null) {
        const paredToDos = JSON.parse(loadedToDos);
        paredToDos.forEach(function(toDo) {
            paintToDos(toDo.text);
        });
    }
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();