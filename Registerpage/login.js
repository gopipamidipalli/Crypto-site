const registerForm = document.getElementById('register-form');

// Handle the registration form submission
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const username = registerForm.elements['username'].value;
  const email = registerForm.elements['email'].value;
  const password = registerForm.elements['password'].value;

  // Create a user object
  const user = {
    username,
    email,
    password
  };

  try {
    // Store the user object in local storage
    localStorage.setItem(username, JSON.stringify(user));

   // Also store the current user globally
   localStorage.setItem('currentUser', username);

    // Display a success message
    alert('Registration successful!');
    
    // Redirect to the registration success page
    window.location.href = '../outerpage.html';
  } catch (error) {
    alert('Error saving data. Please try again later.');
  }
});









































