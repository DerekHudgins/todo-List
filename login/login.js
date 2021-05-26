import { loginUser } from '../local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    console.log(formData);
    loginUser(formData.get('username'), formData.get('password'));

});