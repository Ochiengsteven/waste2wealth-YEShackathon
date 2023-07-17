export function pickUpClick() {
  const landingPage = document.getElementById('landing-page');
  const signInPage = document.getElementById('signin');
  const signUpPage = document.getElementById('signup');
  const accountPage = document.getElementById('account');
  const pickPage = document.getElementById('order');

  landingPage.style.display = 'none';
  signInPage.style.display = 'none';
  signUpPage.style.display = 'none';
  accountPage.style.display = 'none';
  pickPage.style.display = 'block';
}

export function backpickClick() {
  const landingPage = document.getElementById('landing-page');
  const signInPage = document.getElementById('signin');
  const signUpPage = document.getElementById('signup');
  const accountPage = document.getElementById('account');
  const pickPage = document.getElementById('order');

  landingPage.style.display = 'none';
  signInPage.style.display = 'none';
  signUpPage.style.display = 'none';
  accountPage.style.display = 'block';
  pickPage.style.display = 'none';
}