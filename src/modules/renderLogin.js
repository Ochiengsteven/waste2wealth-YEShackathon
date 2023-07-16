export function landingClick() {
  const landingPage = document.getElementById('landing-page');
  const signInPage = document.getElementById('signin');
  const signUpPage = document.getElementById('signup');

  landingPage.style.display = 'block';
  signInPage.style.display = 'none';
  signUpPage.style.display = 'none';
}

export function signInClick() {
  const landingPage = document.getElementById('landing-page');
  const signInPage = document.getElementById('signin');
  const signUpPage = document.getElementById('signup');

  landingPage.style.display = 'none';
  signInPage.style.display = 'block';
  signUpPage.style.display = 'none';
}

export function signUpClick() {
  const landingPage = document.getElementById('landing-page');
  const signInPage = document.getElementById('signin');
  const signUpPage = document.getElementById('signup');

  landingPage.style.display = 'none';
  signInPage.style.display = 'none';
  signUpPage.style.display = 'block';
}
