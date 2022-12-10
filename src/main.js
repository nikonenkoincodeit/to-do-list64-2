import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const formHtml = document.querySelector('.form');

formHtml.addEventListener('submit', foo);

function foo (evt) {
evt.preventDefault();
const value = evt.target.message.value.trim()
if(!value){
return
    }
    saveData(value)
    
    evt.target.reset()
}

function saveData(value) {
    const allTasks = getData()
    allTasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    
}

function getData() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
}

