import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const formHtml = document.querySelector(".form");
const listEl = document.querySelector(".list")

formHtml.addEventListener("submit", foo);
listEl.addEventListener("click", deleteMarkup);

function foo(evt) {
  evt.preventDefault();
  const value = evt.target.message.value.trim();
  if (!value) {
    return;
  }
  const obj = createDataTask(value);
  saveData(obj);
init()
  evt.target.reset();
}

function saveData(value) {
  const allTasks = getData();
  allTasks.push(value);
  saveItems(allTasks);
}

function saveItems(allTasks) {
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
  listEl.innerHTML = markup;
  console.log("123")
    // listEl.insertAdjacentHTML('beforeend', markup)
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

function deleteMarkup(evt) {
  if (evt.target.nodeName !== "BUTTON") {
      return
  }
  const parent = evt.target.closest(".item")
  const idTask = parent.dataset.id;
  parent.remove();
  // console.log(idTask)

  const taskArr = getData();
  const newTaskArr = taskArr.filter((el) => el.id !== Number(idTask));
  saveItems(newTaskArr);
}