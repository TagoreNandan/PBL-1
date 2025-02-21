// Dummy credentials for testing purposes
const validUsername = "user";
const validPassword = "password";

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    alert('Login successful!');
    window.location.href = 'index.html'; // Replace with the main page URL
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
});
