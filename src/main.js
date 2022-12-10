import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const formHtml = document.querySelector(".form");
const listEl = document.querySelector(".list")

formHtml.addEventListener("submit", foo);

function foo(evt) {
  evt.preventDefault();
  const value = evt.target.message.value.trim();
  if (!value) {
    return;
  }
  const obj = createDataTask(value);
  saveData(obj);

  evt.target.reset();
}

function saveData(value) {
  const allTasks = getData();
  allTasks.push(value);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function getData() {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

function createDataTask(value) {
  return { id: Date.now(), value, checked: false };
}

function init() {
  const currentData = getData();
  const markup = makeListMarkup(currentData);
  addListMarkupToHTML(markup);
}

function addListMarkupToHTML(markup) {
    listEl.insertAdjacentHTML('beforeend', markup)
}

function makeListMarkup(arr = []) {
  return arr
    .map(({ id, value, checked }) => {
      return `<li class="item ${checked ? "checked" : ""}" data-id=${id}>
        <p class="text">${value}</p>
        <button type="button" class="button">x</button>
        </li>`;
    })
    .join("");
}

init()