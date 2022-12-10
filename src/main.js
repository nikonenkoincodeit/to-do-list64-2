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
console.log(value)
}