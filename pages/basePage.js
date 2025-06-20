
import { expect } from '@playwright/test';

const PAGE_LOAD_TIMEOUT = 10000;

export class BasePage {
  constructor(page) {
    this.page = page;
    this.url = '/';
    this.loadingSpinner = page.locator('.loading-spinner');
    this.successMessage = page.locator('.toast-success');
    this.errorMessage = page.locator('.toast-error');
  }

  async navigate(path = this.url) {
    console.log(`Navigating to: ${this.page.baseURL}${path}`);
    await this.page.goto(path, { timeout: PAGE_LOAD_TIMEOUT, waitUntil: 'domcontentloaded' });
    await this.waitForPageLoad();
  }

  async waitForPageLoad() {
    await expect(this.loadingSpinner).toBeHidden({ timeout: PAGE_LOAD_TIMEOUT }).catch(() => {});
    await this.page.waitForLoadState('networkidle', { timeout: PAGE_LOAD_TIMEOUT }).catch(() => {});
  }

  async clickElement(locator) {
    await expect(locator).toBeVisible();
    await locator.click();
    await this.waitForPageLoad();
  }

  async fillElement(locator, value) {
    await expect(locator).toBeVisible();
    await locator.fill(value);
  }

  async isElementVisible(locator) {
    return await locator.isVisible();
  }

  async assertSuccessMessage(messageText) {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(messageText);
    await expect(this.successMessage).toBeHidden({ timeout: 10000 });
  }

  async assertErrorMessage(messageText) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(messageText);
  }

  async selectTab(tabName) {
    const tabLocator = this.page.locator(`role=tab[name="${tabName}"]`);
    await this.clickElement(tabLocator);
    console.log(`Navigated to tab: ${tabName}`);
  }
}
