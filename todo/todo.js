import { logout, createToDo } from '../local-storage-utils.js';



const logoutButton = document.querySelector('#logout');
const toDoText = document.querySelector('input');
const createToDoButton = document.querySelector('#create-to-do');


logoutButton.addEventListener('click', () => {

    logout();
});

createToDoButton.addEventListener('click', () => {



    createToDo(toDoText.value);   
    
    
});
