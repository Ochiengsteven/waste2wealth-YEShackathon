/* eslint-disable no-alert */
import './style.css';
import { handleSignIn } from './modules/signIn.js';
import { landingClick, signInClick, signUpClick } from './modules/renderLogin.js';
import {
  pickUpClick, backpickClick, withdrawClick, backwithdrawClick,
} from './modules/pickup.js';
import arrow from './assets/arrow.png';
import back from './assets/back.png';
import question from './assets/question.png';
import settings from './assets/settings.png';
import reload from './assets/reload.png';
import notification from './assets/notification.png';
import star from './assets/star.png';
import earnings from './assets/earnings.png';
import gift from './assets/gift.png';
import next from './assets/next.png';
import rank from './assets/rank.png';
import map from './assets/map.jpg';
import gps from './assets/gps.png';
import black from './assets/black.png';
import location from './assets/location.png';
import date from './assets/date.png';

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
settingsIcon.classList.add('openMenu');
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

// render cards
const earningsIcon = new Image();
earningsIcon.src = earnings;
const giftIcon = new Image();
giftIcon.src = gift;
const nextIcon = new Image();
nextIcon.src = next;
const cards = [
  {
    img: earningsIcon.src,
    title: 'Earn',
    next: nextIcon.src,
    id: 'earn',
  },
  {
    img: giftIcon.src,
    title: 'Withdraw',
    next: nextIcon.src,
    id: 'withdraw-card',
  },
];

const cardsDiv = document.querySelector('.cards');
cards.forEach((card) => {
  cardsDiv.innerHTML += `<div class="card" id="${card.id}">
                            <div class="icon">
                              <img src=${card.img} alt="earnings" />
                              <h3>${card.title}</h3>
                            </div>
                            <div class="next">
                              <img src=${card.next} alt="next" />
                            </div>
                          </div>`;
});

// render levels
const rankIcon = new Image();
rankIcon.src = rank;
const levelsDiv = document.querySelector('.level');
levelsDiv.innerHTML = `<div class="icon">
                            <img src=${rankIcon.src} alt="star" />
                        </div>
                        <div>
                          <div class="infos">
                            <h3>Bronze</h3><p>(Level 1)</p>
                          </div>
                          <div>
                            <p>1000 points to Silver</p>
                            <progress id="progress-bar" value="2000" max="3000" style="height: 4px; background-color: green;"></progress>
                          </div>
                        </div>
                        <div class="next">
                          <img src=${nextIcon.src} alt="next" />
                        </div>`;

// render map
const mapDiv = document.querySelector('.map');
const mapImg = new Image();
mapImg.src = map;
mapDiv.appendChild(mapImg);

// render gps
const gpsDiv = document.querySelector('.navico-2');
const gpsImg = new Image();
gpsImg.src = gps;
gpsDiv.appendChild(gpsImg);

// render black
const blackDiv = document.querySelector('.navico-1');
const blackImg = new Image();
blackImg.src = black;
blackDiv.appendChild(blackImg);

const blackDiv2 = document.querySelector('.navico-4');
blackDiv2.appendChild(blackImg);

// render location and date
const locationDiv = document.querySelector('#location');
const dateDiv = document.querySelector('#date');
const locationImg = new Image();
locationImg.src = location;
locationDiv.appendChild(locationImg);
const dateImg = new Image();
dateImg.src = date;
dateDiv.appendChild(dateImg);

// render earnings navigations
blackDiv.addEventListener('click', backpickClick);
blackDiv2.addEventListener('click', backwithdrawClick);
const orderDiv = document.querySelector('#earn');
orderDiv.addEventListener('click', pickUpClick);

// settings
const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const dashboard = document.querySelector('a[href="#dashboard"]');
const history = document.querySelector('a[href="#history"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

function logOut() {
  mainMenu.style.top = '-100%';
  landingClick();
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
dashboard.addEventListener('click', close);
history.addEventListener('click', logOut);

// render withdraw
const withdrawDiv = document.querySelector('#withdraw-card');
withdrawDiv.addEventListener('click', withdrawClick);
