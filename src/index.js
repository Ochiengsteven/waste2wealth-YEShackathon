/* eslint-disable no-alert */
import './style.css';
import { handleSignIn } from './modules/signIn.js';
import arrow from './assets/arrow.png';

const arrowIcon = new Image();
arrowIcon.src = arrow;
const joinbtn = document.querySelector('.join-btn');
joinbtn.appendChild(arrowIcon);

document.getElementById('signin-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Clear any existing error messages and error styling
  const errorMessages = document.getElementsByClassName('error-message');
  while (errorMessages.length > 0) {
    errorMessages[0].remove();
  }
  document.getElementById('password').classList.remove('error');

  handleSignIn();
});

let users = [];

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate form fields
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Get existing users from local storage or initialize an empty array
  users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    alert('This email is already registered.');
    return;
  }

  // Create user object
  const user = {
    name,
    email,
    password,
  };

  // Add the new user to the array
  users.push(user);

  // Save the updated user array to local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';

  alert('Registration successful!');
});
