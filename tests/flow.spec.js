
import { test } from '@playwright/test';
import { config } from '../config/config.js';
import { LoginPage } from '../pages/LoginPage.js';
import { FlowPage } from '../pages/FlowPage.js';
import { logger } from '../utils/logger.js';
import { loadTestData } from '../utils/dataHelper.js';

const flowTestData = loadTestData('flowData.json');

let page;
let flowPage;

test.beforeAll(async ({ browser }) => {
  logger.info('Logging in...');
  page = await browser.newPage();
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login(config.username, config.password);
  logger.success('Login successful');
  flowPage = new FlowPage(page);
  await flowPage.goto();
});

for (const data of flowTestData) {
  test(`Create and verify flow: ${data.name}`, async () => {
    logger.info(`Creating flow: ${data.name}`);
    await flowPage.createFlow(data);
    await flowPage.verifyFlow(data.name);
    logger.success(`Flow '${data.name}' created and verified.`);
  });
}
