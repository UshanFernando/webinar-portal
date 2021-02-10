const getToken = () => { 
    return localStorage.getItem('token');
}

const isAuthenticated = () => {
    if (getToken() == null) {
        return false;
    } else {
        return true;
    }
}

const logout = () => {
    if (isAuthenticated()) {
        localStorage.removeItem('token');
        console.log("User Logged Out")
    }
}
module.exports = {
    getToken,
    isAuthenticated,
    logout
}