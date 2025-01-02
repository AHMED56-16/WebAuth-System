document.querySelector(".signupForm").addEventListener("submit", (event)=> {
    event.preventDefault();
    
    // Getting form values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Password should be at least 8 characters
    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    // Checking if user already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
        return;
    }else if (users.some(user => user.email === email)) {
        alert("Choose another email.");
        return;
    }
    
    // Adding new user to local storage
    let newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Storing the logged in user as well
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    
    // Redirecting to the Home page
    window.location.href = "../HomePage/homepage.html";
});
