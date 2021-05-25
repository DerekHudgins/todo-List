export function findById(someArr, id) {
    for (let item of someArr) {
        if (item.id === id) {
            return item;
        }
    }
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.set(user.username, stringyUser);
}

export function getUser(username) {
    const stringyUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function getCurrentUser() {
    const user = getUser(username);
    const currentUser = localStorage.getItem(CURRENT);
}
