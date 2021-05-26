import { createUser } from '../local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    createUser(formData.get('username'), formData.get('password'));
    window.location = '../todo';

});