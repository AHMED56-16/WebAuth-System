document.querySelector(".loginForm").addEventListener("submit", (event)=> {
    event.preventDefault();

    // Getting form values
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Getting all users from LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with same email and password as current user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save logged-in user info to LocalStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        // Redirect to home page
        window.location.href = '../HomePage/homepage.html';
    } else {
        alert('Invalid email or password');
    }
});
