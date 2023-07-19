<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👤 Author](#author)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 Waste2Wealth - Turning Trash to Cash <a name="about-project"></a>

**Waste2Wealth** is a web application designed to address the growing issue of plastic waste and sustainable energy while providing an innovative solution to incentivize households to participate in waste collection. The collected plastic are used to make fuel briquettes and toilet structures. The app aims to empower communities to actively contribute to a cleaner energy, environment and sustainable waste management.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Sustainability Impact: <a name="sustainability-impact"></a>
Waste2Wealth promotes environmental sustainability by actively engaging individuals in plastic waste management. By incentivizing waste collection and recycling, the app helps reduce plastic pollution, protect natural resources, and contribute to a cleaner, greener planet.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Open</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML5</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS3</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics">JAVASCRIPT</a></li>
    <li><a href="https://webpack.js.org/guides/getting-started/#basic-setup">WEBPACK</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Sell Your Plastic:** Waste2Wealth allows users to conveniently sell their plastic waste from households. Users can schedule their waste collection by pressing the "Sell" button and recording their location, with collections taking place every Thursday.
- **Earn Credits:**As users contribute to waste collection, they earn credits based on the weight of the plastic they sell. Each kilogram of plastic earns 20 credits, which can be redeemed once the user accumulates 500 credits (worth Kshs 500).
- **Secure Account Management:**Users can create an account to access the platform's features. The app employs local storage to store user data securely, ensuring a seamless and personalized experience
- **Support and Account Management:** Waste2Wealth offers an "Account" section where users can seek assistance, edit account details, and access relevant information about the app and its mission.

## 🧞 Project Structure

Inside of your Waste2Wealth project, you'll see the following folders and files:

```
/
├── dist/
│   ├── index.html
│   └── main.js
├── src/
│   ├── modules/
│   │   └── pickup.js
│   │   └── renderLogin.js
│   │   └── signIn.js
│   ├── assets/
│   └── index.html
│   └── index.js
│   └── style.css
└──  eslintrc.json
└── .gitignore
└── .hintrc.json
└── .stylelintrc.json
└── package.json.
└── README.md
└── webpack.config.js
```

Look for bundled `index,html`  file in the `dist/` directory. Launch the code using the live server to see the demo.

There's nothing special about `src/components/`, but that's where I wrote the source code.

Any static assets, like images, can be placed in the `src/assets/` directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

>this is the link to my live demo of the Waste2Wealth app [here](https://64b7ccbd22628000b8767684--celadon-kleicha-f0a66b.netlify.app/#signup)

## 📸 Screenshots <a name="screenshots"></a>

<!-- Row 1 -->
<div style="display: flex; justify-content: space-between; max-height: 300px;">
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/landing-page.png" alt="landing" width="300" />
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/login.png" alt="login" width="300" />
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/account.png" alt="account" width="300" />
</div>

<!-- Row 2 -->
<div style="display: flex; justify-content: center; max-height: 300px;">
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/withdraw.png" alt="withdraw" width="300" />
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/order-pick.png" alt="order" width="300" />
    <img src="https://github.com/Ochiengsteven/Waste2Wealth/blob/account/src/assets/screenshots/nav-show.png" alt="nav-show" width="300" />
</div>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- A web browser to view output e.g [Google Chrome](https://www.google.com/chrome/).
- An IDE e.g [Visual studio code](https://code.visualstudio.com/).
- `node` should be installed in your local machine, [node website](https://nodejs.org/en/download/).
- Install the `npm` package manager use this [to install both node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- [A terminal](https://code.visualstudio.com/docs/terminal/basics).

### Setup

Clone this repository to your desired folder or download the Zip folder:

```
https://github.com/Ochiengsteven/waste2wealth-YEShackathon
.git
```

- Navigate to the location of the folder in your machine:

**``you@your-Pc-name:~$ cd waste2wealth-YEShackathon
``**

### Install

To install all dependencies, run:

```
npm install
```

### Usage

To run the project, follow these instructions:

- After Cloning this repo to your local machine.
- Open the `./dist/index.html` in your browser.

### Run tests

To run tests, run the following command:

- Track HTML linter errors run:
```
npx hint .
```
- Track CSS linter errors run:
```
npx stylelint "**/*.{css,scss}"
```
- Track JavaScript linter errors run:
```
npx eslint .
```

### Deployment <a name="deployment"></a>

You can deploy this project using: [Netlify](https://www.netlify.com/),
- I used Netlify to deploy my website. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👤 Author <a name="author"></a>

👤 **Ochieng steven**

- GitHub: [@Ochiengsteven](https://github.com/Ochiengsteven)
- LinkedIn: [steven ochieng](https://www.linkedin.com/in/steven-ochieng-a43125179/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **add the account details editing feature**
- [ ] **Improve the general UX**
- [ ] **Add statistics for withdrawals and earnings.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>


Give a ⭐️ if you like this project and how I managed to build it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **Can I fork and reuse the repository**

  - Yes please, feel free.

- **Can I improve the repository, and my changes will be accepted if they are good?**

  - Yes please, nice ideas are welcome, please.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/Ochiengsteven/Waste2Wealth/blob/account/license.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
