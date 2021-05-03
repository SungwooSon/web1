const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

function paintGreeting (text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerHTML = `hello ${text}`;
}

function saveName(text) {
     localStorage.setItem("name", text);
}

function handleSubmit(event) {
    event.preventDefault();
    saveName(input.value);
    paintGreeting(input.value);
    
}

function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit)
}

function loadName() {
    const name = localStorage.getItem("name");
    if(name === null) {
        askForName();
    } else {
        paintGreeting(name);
    }
}

function init() {
    loadName();
}

init();