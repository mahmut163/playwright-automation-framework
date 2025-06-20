
import { BasePage } from './basePage.js';

export class AnalysisPage extends BasePage {
  constructor(page) {
    super(page);
    this.createBtn = page.locator('#create-analysis');
    this.titleInput = page.locator('#analysis-title');
    this.categorySelect = page.locator('#analysis-category');
    this.submitBtn = page.locator('button[type="submit"]');
    this.analysisList = page.locator('.analysis-list');
  }

  async goto() {
    await this.selectTab('Analysis');
  }

  async createAnalysis(data) {
    await this.clickElement(this.createBtn);
    await this.fillElement(this.titleInput, data.title);
    await this.categorySelect.selectOption(data.category);
    await this.clickElement(this.submitBtn);
    await this.assertSuccessMessage('Analysis created');
  }

  async verifyAnalysis(title) {
    const visible = await this.isElementVisible(this.analysisList.locator(`text=${title}`));
    expect(visible).toBeTruthy();
  }
}

