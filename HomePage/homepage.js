// Getting logged in user info  
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//Targeting the span with id "username" for having the logged in user name in Home Page
document.getElementById('username').textContent = loggedInUser.username;
// Adding event listener for logout button to clear the loggedInUser from localStorage and redirect to login page
document.getElementById('logoutbtn').addEventListener('click', ()=>{
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully');
    window.location.href = '../Login/login.html';
});