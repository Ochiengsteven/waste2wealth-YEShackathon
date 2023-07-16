/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
function handleSignIn() {
  // Get form values
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  // Validate form fields
  if (email.trim() === '') {
    displayErrorMessage('Please fill in the email field.');
    return;
  }

  if (password.trim() === '') {
    displayErrorMessage('Please fill in the password field.');
    return;
  }

  // Get existing users from local storage or initialize an empty array
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find user by email
  const user = users.find((u) => u.email === email);

  if (!user) {
    // Case: Email does not exist in local storage
    displayErrorMessage('Please sign up to continue.');
    return;
  }

  if (user.password === password) {
    // Case: Correct email and password combination
    // Redirect to dashboard section
    window.location.href = '#dashboard';
  } else {
    // Case: Incorrect password
    displayErrorMessage('Wong password!');
    document.getElementById('password').classList.add('error');
  }
}

function displayErrorMessage(message) {
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = message;
  const signInForm = document.getElementById('signin-form');

  // Clear any existing error messages and error styling
  const existingErrorDiv = signInForm.querySelector('.error-message');
  if (existingErrorDiv) {
    existingErrorDiv.remove();
  }
  document.getElementById('password').classList.remove('error');

  signInForm.insertBefore(errorDiv, signInForm.lastElementChild);
}

export { handleSignIn };
