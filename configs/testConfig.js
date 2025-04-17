require('dotenv').config();
module.exports = {
    baseURL: 'http://localhost:8080',
    loginPage: {
      headingText: 'qa.code-quiz.dev',
      loginButton: 'Login',
      errorMessage: 'If you do not have an account, contact an admin',
      usernameField: 'input[name="username"]',
      passwordField: 'input[name="password"]',
    },
    homePage: {
      welcomeText: 'Hello SomeName',
      logoutButton: 'LOGOUT',
      nameLabel: 'Name',
      nameValue: 'SomeName',
      favFruitLabel: 'Favourite Fruit',
      favFruitValue: 'some fruit',
      favMovieLabel: 'Favourite Movie',
      favMovieValue: 'The Room',
      favNumLabel: 'Favourite Number',
      favNumValue: 'BN<1234>',
    },
    credentials: {
      username: process.env.USERNAME || 'defaultUser',
      password: process.env.PASSWORD || 'defaultPass',
    },
  };
  