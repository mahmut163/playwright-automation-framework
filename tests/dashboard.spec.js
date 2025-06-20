
import { test, expect } from '@playwright/test';
import { config } from '../config/config.js';
import { LoginPage } from '../pages/LoginPage.js';
import { BasePage } from '../pages/basePage.js';
import { logger } from '../utils/logger.js';

let page;
let basePage;

test.beforeAll(async ({ browser }) => {
  logger.info('Logging in...');
  page = await browser.newPage();
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login(config.username, config.password);
  logger.success('Login successful');
  basePage = new BasePage(page);
});

test('Dashboard tab opens and main content is visible', async () => {
  logger.info('Opening Dashboard tab...');
  await basePage.selectTab('Dashboard'); // ✅ BasePage helper

  const dashboardHeading = page.locator('h1'); // Adjust selector based on actual UI
  const isVisible = await basePage.isElementVisible(dashboardHeading); // ✅ BasePage helper

  expect(isVisible).toBeTruthy();
  logger.success('Dashboard tab opened and heading verified');
});
