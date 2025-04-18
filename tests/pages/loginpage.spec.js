const { test, expect } = require('@playwright/test');
const conf = require('../../configs/testConfig');
const { login } = require('../utils/helper');


test.describe('Login Page Tests @loginPage @smoke', async () => {

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('Check portal heading is available', async ({page}) => {
  await expect(page.getByText(conf.loginPage.headingText)).toBeVisible();
});

test('Login button is visible', async ({page}) => {
  await expect(page.getByText('Login')).toBeVisible();
});

test.skip('Username field has proper type', async ({page}) => {
  const inputPass = await page.locator(conf.loginPage.usernameField);
  await expect(inputPass).toHaveAttribute('type', 'text');
});

test.skip('Password field has proper type', async ({page}) => {
  const inputPass = await page.locator(conf.loginPage.passwordField);
  await expect(inputPass).toHaveAttribute('type', 'password');
});

/* 
Note : The portal doesn't provide distinct error messages for different invalid login scenarios. 
Instead, it returns the same generic error message for all types of invalid credentials.
*/

test('Loging with Invalid credentials (Valid User/Wrong Password)', async ({page}) => {
  await login(page, conf.credentials.username, 'mrWrongPass');
});

  test('Loging with Invalid credentials (Wrong User/Wrong Password)', async  ({page}) => {
  await login(page, 'mrWrongUser', 'mrWrongPass');
  await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();

  await expect(page.getByText('Login')).toBeVisible();
});

test('Loging with Invalid credentials (No User/ Valid Password)', async  ({page}) => {
  await login(page, '', conf.credentials.password);
  await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();
  await expect(page.getByText('Login')).toBeVisible();
});

test('Loging with Invalid credentials (Valid User/ No Password)', async  ({page}) => {
  await login(page, conf.credentials.username, '');
  await expect(page.getByText(conf.loginPage.errorMessage)).toBeVisible();
  await expect(page.getByText('Login')).toBeVisible();
});

test('Loging with Valid credentials (Valid User/ Valid Password)', async ({page}) => {
  await login(page, conf.credentials.username, conf.credentials.password);
  await expect(page.getByText(conf.homePage.welcomeText)).toBeVisible();
  await expect(page.getByText('LOGOUT')).toBeVisible();
});

});




