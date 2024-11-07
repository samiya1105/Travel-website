// Handle the form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Placeholder: Check credentials
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  let isValid = true;
  let errorMessage = "";

  // Validate username
  if (!usernameRegex.test(username)) {
    isValid = false;
    errorMessage += "Username must be 4-16 alphanumeric characters.\n";
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    isValid = false;
    errorMessage += "Password must be 8-20 characters, include at least one uppercase letter, one lowercase letter, one number, and one special character.\n";
  }

  // Display error messages or success message
  if (isValid) {
    alert("Login successful!");
     window.location.href = "home.html";
  } else {
    alert(errorMessage);
  }
});
