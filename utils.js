const CURRENT = 'CURRENT';
export function findById(someArr, id) {
    for (let item of someArr) {
        if (item.id === id) {
            return item;
        }
    }
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(user.username, stringyUser);
}

export function getUser(username) {
    const stringyUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem(CURRENT);
    const user = getUser(currentUser);
    return user;
}
