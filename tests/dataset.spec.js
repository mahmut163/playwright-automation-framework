
import { test, expect } from '@playwright/test';
import { config } from '../config/config.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DatasetPage } from '../pages/DatasetPage.js';
import { logger } from '../utils/logger.js';
import { loadTestData } from '../utils/dataHelper.js';

const datasetTestData = loadTestData('testdata.json');

let page;
let datasetPage;

test.beforeAll(async ({ browser }) => {
  logger.info('Logging in...');
  page = await browser.newPage();
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login(config.username, config.password);
  logger.success('Login successful');
  datasetPage = new DatasetPage(page);
  await datasetPage.goto();
});

for (const data of datasetTestData) {
  test(`Create and verify dataset: ${data.name}`, async () => {
    logger.info(`Creating dataset: ${data.name}`);
    await datasetPage.createDataset(data);
    await datasetPage.verifyDatasetExists(data.name); // ✅ using verify method
    logger.success(`Dataset '${data.name}' verified`);
  });
}

