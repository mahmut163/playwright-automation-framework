
// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                // Your test folder
  timeout: 30 * 1000,                // Max time per test (30 seconds)
  expect: {
    timeout: 5000,                   // Timeout for expect assertions (5 seconds)
  },
  retries: 1,                       // Retry once on failure (can increase for CI)
  reporter: [
    ['list'],                      // Console output
    ['html', { outputFolder: 'playwright-report', open: 'never' }],  // HTML report
  ],

  use: {
    baseURL: 'https://your-app-url.com',  // Replace with your app's base URL
    headless: true,                        // Set to false for debugging with UI
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,                  // Max time for actions like click, fill
    ignoreHTTPSErrors: true,               // Useful for self-signed certs
    screenshot: 'only-on-failure',         // Screenshots on test failures
    video: 'retain-on-failure',            // Record video only if test fails
    trace: 'retain-on-failure',            // Capture trace on failure for debugging
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Limit number of workers for parallel test execution (optional)
  workers: process.env.CI ? 2 : undefined,

  // Global setup script placeholder (e.g. start server, clean data)
  // globalSetup: require.resolve('./global-setup.js'),

  // Output folder for test artifacts
  outputDir: 'test-results/',
});

