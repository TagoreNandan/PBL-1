document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
  
    if (date && category && amount) {
      alert(`Expense recorded:\nDate: ${date}\nCategory: ${category}\nAmount: ${amount}`);
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  // Placeholder for connecting to a login system
  function redirectToLogin() {
    window.location.href = 'login.html'; // Replace with the actual login page URL
  }
  