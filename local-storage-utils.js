import { getCurrentUser, getUser, setUser } from './utils.js';

const CURRENT = 'CURRENT';
export function createUser(username, password) {
    if (localStorage.getItem(username)) {
        alert('this username already exists');
    } else {
        const user = {
            username: username,
            password: password,
            todo: []
        };
        setUser(user);
        loginUser(username, password);
        console.log(user, 'user');
    }
}

export function loginUser(username, password) {
    
    const user = getUser(username);
    
    if (user) {
        if (user.password === password) {
            localStorage.setItem(CURRENT, username);
            
            // window.location = '../todo';
        } else {
            alert('username and/or password is incorrect');
        }
    } else {
        alert('username doesn\'t exist');
    }
}

export function logout() {
    localStorage.setItem(CURRENT, []);
}

export function createToDo(message) {
    
    const currentUser = getCurrentUser();
    const user = getUser(currentUser.username);
    
    const toDo = {
        id: Math.floor(Math.random() * 99999),
        message: message,
        completed: false
    };

    user.todo.push(toDo);
}

export function toggleToDo() {

}
