  const { test, expect } = require('@playwright/test');
  const conf = require('../../configs/testConfig');
  const { login, getUserInfo } = require('../utils/helper');


  test.describe('Home page and User info isolated Tests @homePage @smoke', async () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await login(page, conf.credentials.username, conf.credentials.password);
      await expect(page.getByText('LOGOUT')).toBeVisible();
    });


    test('Check welcome text is showing', async ({ page }) => {
      await expect(page.getByText(conf.homePage.welcomeText)).toBeVisible();
    });

    test('Check user info NAME is correct', async ({ page }) => {
      const name = await getUserInfo(page, conf.homePage.nameLabel);
      await expect(name).toHaveText(conf.homePage.nameValue);
    });

    test('Check user info FRUIT is correct', async ({ page }) => {
      const favFruit = await getUserInfo(page, conf.homePage.favFruitLabel);
      await expect(favFruit).toHaveText(conf.homePage.favFruitValue);
    });
    
    test('Check user info MOVIE is correct', async ({ page }) => {
      const favMovie = await getUserInfo(page, conf.homePage.favMovieLabel);
      await expect(favMovie).toHaveText(conf.homePage.favMovieValue);
    });

    test('Check user info FAVORITE NUMBER is correct', async ({ page }) => {
      const favNumber = await getUserInfo(page, conf.homePage.favNumLabel);
      await expect(favNumber).toHaveText(conf.homePage.favNumValue);
    });


    test('Check Logout is successful', async ({ page }) => {
      await page.getByText(conf.homePage.logoutButton).click();
      await expect(page.getByText('Login')).toBeVisible();

    });
  });

