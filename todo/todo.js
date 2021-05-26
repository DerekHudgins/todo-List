import { logout, toggleToDo, createToDo } from '../local-storage-utils.js';
import { getCurrentUser } from '../utils.js';



const logoutButton = document.querySelector('#logout');
const toDoText = document.querySelector('input');
const createToDoButton = document.querySelector('#create-to-do');
const ul = document.querySelector('ul');


const user = getCurrentUser();


logoutButton.addEventListener('click', () => {

    logout();
});

// console.log(user);


function renderToDo() {
    // ul.textContent = '';
    user.todo.forEach(todo => {
        const li = document.createElement('li');
        const message = todo.message;
        li.textContent = message;
        // console.log(todo.completed);
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            toggleToDo(todo.id);
            window.location = '';
        });
        ul.append(li);
    });
}

createToDoButton.addEventListener('click', () => {
    ul.textContent = '';
    createToDo(toDoText.value);

    renderToDo();
    window.location = './';
});

renderToDo();