import { getCurrentUser, getUser, setUser, findById } from './utils.js';

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
    
    const user = getCurrentUser();
    const toDo = {
        id: Math.floor(Math.random() * 99999),
        message: message,
        completed: false
    };
    user.todo.push(toDo);
    setUser(user);
}

export function toggleToDo(id) {
    const user = getCurrentUser();
    const something = findById(user.todo, id);
    !something.completed;
}
