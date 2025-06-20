
import { test, expect } from '@playwright/test';
import { config } from '../config/config.js';
import { LoginPage } from '../pages/LoginPage.js';
import { AnalysisPage } from '../pages/AnalysisPage.js';
import { logger } from '../utils/logger.js';
import { loadTestData } from '../utils/dataHelper.js';

const analysisTestData = loadTestData('analysisData.json');

let page;
let analysisPage;

test.beforeAll(async ({ browser }) => {
  logger.info('Logging in...');
  page = await browser.newPage();
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login(config.username, config.password);
  logger.success('Login successful');
  analysisPage = new AnalysisPage(page);
  await analysisPage.goto();
});

for (const data of analysisTestData) {
  test(`Create and verify analysis: ${data.title}`, async () => {
    logger.info(`Creating analysis: ${data.title}`);
    await analysisPage.createAnalysis(data);
    await analysisPage.verifyAnalysis(data.title); // ✅ verification method
    logger.success(`Analysis '${data.title}' verified`);
  });
}

