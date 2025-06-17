const { test, expect, } = require('@playwright/test');
const conf = require('../../configs/testConfig');
const { login, getUserInfo } = require('../utils/helper');


test('E2E tests in One Flow @e2e @regression', async ({page}) => {
  await page.goto('/');

  await test.step('Check portal heading is available', async () => {
    await expect(page.getByText(conf.loginPage.headingText)).toBeVisible();
  });

  await test.step('Login button is visible', async () => {
    await expect(page.getByText('Login')).toBeVisible();
  });

  await test.step.skip('Username field has proper type', async () => {
    const inputPass = await page.locator(conf.loginPage.usernameField);
    await expect(inputPass).toHaveAttribute('type', 'text');
  });

  await test.step.skip('Password field has proper type', async () => {
    const inputPass = await page.locator(conf.loginPage.passwordField);
    await expect(inputPass).toHaveAttribute('type', 'password');
  });

  await test.step('Loging with Invalid credentials (Valid User/Wrong Password)', async () => {
    await login(page, conf.credentials.username, 'mrWrongPass');
  });

  await test.step('Loging with Invalid credentials (Wrong User/Wrong Password)', async () => {
    await login(page, 'mrWrongUser', 'mrWrongPass');
    await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();
  
    await expect(page.getByText('Login')).toBeVisible();
  });

  await test.step('Loging with Invalid credentials (No User/ Valid Password)', async () => {
    await login(page, '', conf.credentials.password);
    await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();
    await expect(page.getByText('Login')).toBeVisible();
  });

  await test.step('Loging with Invalid credentials (Valid User/ No Password)', async () => {
    await login(page, conf.credentials.username, '');
    await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();
    await expect(page.getByText('Login')).toBeVisible();
  });

  await test.step('Make sure Login is successfull', async () => {
    await login(page, conf.credentials.username, conf.credentials.password);
    await expect(page.getByText('Hello SomeName')).toBeVisible();
    await expect(page.getByText('LOGOUT')).toBeVisible();
  });

  await test.step('Check welcome text is showing', async () => {
    await expect(page.getByText(conf.homePage.welcomeText)).toBeVisible();
  });

  await test.step('Check user info NAME is correct', async () => {
    const name = await getUserInfo(page, conf.homePage.nameLabel);
    await expect(name).toHaveText(conf.homePage.nameValue);
  });

  await test.step('Check user info FRUIT is correct', async () => {
    const favFruit = await getUserInfo(page, conf.homePage.favFruitLabel);
    await expect(favFruit).toHaveText(conf.homePage.favFruitValue);
  });
  
  await test.step('Check user info MOVIE is correct', async () => {
    const favMovie = await getUserInfo(page, conf.homePage.favMovieLabel);
    await expect(favMovie).toHaveText(conf.homePage.favMovieValue);
  });

  await test.step('Check user info FAVORITE NUMBER is correct', async () => {
    const favNumber = await getUserInfo(page, conf.homePage.favNumLabel);
    await expect(favNumber).toHaveText(conf.homePage.favNumValue);
  });


  await test.step('Check Logout is successful', async () => {
    await page.getByText(conf.homePage.logoutButton).click();
    await expect(page.getByText('Login')).toBeVisible();

  });
});

