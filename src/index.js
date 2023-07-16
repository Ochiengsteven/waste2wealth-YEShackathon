/* eslint-disable no-alert */
import './style.css';
import { handleSignIn } from './modules/signIn.js';
import { landingClick, signInClick, signUpClick } from './modules/renderLogin.js';
import arrow from './assets/arrow.png';
import back from './assets/back.png';
import question from './assets/question.png';
import settings from './assets/settings.png';
import reload from './assets/reload.png';
import notification from './assets/notification.png';
import star from './assets/star.png';
// import earnings from './assets/earnings.png';
// import gift from './assets/gift.png';

const arrowIcon = new Image();
arrowIcon.src = arrow;
const questionIcon = new Image();
questionIcon.src = question;
const questionDiv = document.querySelector('.faqs');
questionDiv.appendChild(questionIcon);

const reloadIcon = new Image();
reloadIcon.src = reload;

const notificationIcon = new Image();
notificationIcon.src = notification;

const settingsIcon = new Image();
settingsIcon.src = settings;
const settingsDiv = document.querySelector('.settings');
settingsDiv.appendChild(settingsIcon);

const joinbtn = document.querySelector('.join-btn');
joinbtn.appendChild(arrowIcon);

// add display pages functions
document.getElementById('signin-btn').addEventListener('click', signInClick);
document.getElementById('signup-btn').addEventListener('click', signUpClick);
document.querySelector('.join-btn').addEventListener('click', signUpClick);
document.getElementById('link-signup').addEventListener('click', signUpClick);
document.getElementById('link-signin').addEventListener('click', signInClick);

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

// go back to landing page
const backpageDiv1 = document.querySelector('#login-back');
const backp = document.createElement('p');
backp.innerHTML = 'Back';
const backIcon = new Image();
backIcon.src = back;
backpageDiv1.appendChild(backIcon);
backpageDiv1.appendChild(backp);

const backpageDiv2 = document.getElementById('signup-back');
backpageDiv2.appendChild(backIcon);
backpageDiv2.appendChild(backp);

backpageDiv1.addEventListener('click', landingClick);
backpageDiv2.addEventListener('click', landingClick);

// render welcome note
const welcomeDiv = document.querySelector('.welcome');
welcomeDiv.innerHTML = `<div class="welcome-note">
                         <p>Welcome</p>
                         <h3>Steven</h3>
                        </div>
                        <div class="icons-welcome"></div>`;
const iconsDiv = document.querySelector('.icons-welcome');
iconsDiv.appendChild(reloadIcon);
iconsDiv.appendChild(notificationIcon);

// render user points
const pointsDiv = document.querySelector('.pts-icon');
const starIcon = new Image();
starIcon.src = star;
pointsDiv.appendChild(starIcon);
pointsDiv.innerHTML += '<p>Points</p>';
