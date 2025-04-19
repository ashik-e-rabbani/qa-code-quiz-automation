  // playwright.config.js
  const { defineConfig } = require('@playwright/test');

  module.exports = defineConfig({
    testDir: './tests',
    use: {
      headless: true,
      baseURL: 'http://localhost:8080',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      // video: 'on',
    },
    timeout: 50000,
    reporter: [['html', { open: 'never' }]],
    projects: [
      {
        name: 'chromium',
        use: {
          browserName: 'chromium',
          launchOptions: {
            slowMo: 100
          }
        }
      }
    ]
  });
