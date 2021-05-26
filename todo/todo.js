import { logout, toggleToDo, createToDo } from '../local-storage-utils.js';
import { getCurrentUser, getUser } from '../utils.js';



const logoutButton = document.querySelector('#logout');
const toDoText = document.querySelector('input');
const createToDoButton = document.querySelector('#create-to-do');
const ul = document.querySelector('ul');


const user = getCurrentUser();


logoutButton.addEventListener('click', () => {

    logout();
});

createToDoButton.addEventListener('click', () => {
 
    createToDo(toDoText.value);

    renderToDo();
    console.log(renderToDo());
});

renderToDo();

function renderToDo() {
    user.todo.forEach(todo => {
        const li = document.createElement('li');
        const message = todo.message;
        li.textContent = message;
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        };
        li.addEventListener('click', () => {
            toggleToDo(todo.id);
        })
        ul.append(li);
    })
}


