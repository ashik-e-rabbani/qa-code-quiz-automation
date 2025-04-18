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
    usersAPI:{
      serverURL:'http://localhost:9999',
      getMessage:'Backend API',
      creationtMessage:'Account Created',
      existingMessage:'Account Already Exists',
      updateMessage:'Account Updated',
      deleteMessage:'Account Deleted',
      newUser: {
        username: 'ashik456',
        name: 'Ashik R',
        password: 'Firstp@8s',
        favouriteFruit: 'Mango',
        favouriteMovie: 'The boy in the stripped pajamas',
        favouriteNumber: 1,
      },
      updatedUser: {
        name: 'Ashik Rabbani',
        password: 'updatedP@8s',
        favouriteFruit: 'Silybin',
        favouriteMovie: 'Golpo holeo Sotti',
        favouriteNumber: '007',
      }
    }
  };
  