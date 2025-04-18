  async function login(page, username, password) {
      await page.locator('input[placeholder="Enter Username"]').fill(username ?? '');
      await page.locator('input[placeholder="password"]').fill(password ?? '');
      await page.getByText('Login').click();
    }

    async function getUserInfo(page, label) {
      const container = page.locator('.sc-htpNat.ilgFCs', { hasText: label });
      return container.locator('div').nth(1); // get second div inside
    }
    
    module.exports = { login,getUserInfo };
    