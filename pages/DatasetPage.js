
import { BasePage } from './basePage.js';

export class DatasetPage extends BasePage {
  constructor(page) {
    super(page);
    this.newDatasetBtn = page.locator('#create-dataset');
    this.nameInput = page.locator('#dataset-name');
    this.descInput = page.locator('#dataset-description');
    this.typeSelect = page.locator('#dataset-type');
    this.submitBtn = page.locator('button[type="submit"]');
    this.datasetList = page.locator('.dataset-list');
  }

  async goto() {
    await this.navigate('/datasets');
  }

  async createDataset(data) {
    await this.clickElement(this.newDatasetBtn);
    await this.fillElement(this.nameInput, data.name);
    await this.fillElement(this.descInput, data.description);
    await this.typeSelect.selectOption(data.type);
    await this.clickElement(this.submitBtn);
    await this.assertSuccessMessage('Dataset created');
  }

  async verifyDatasetExists(name) {
    const visible = await this.isElementVisible(this.datasetList.locator(`text=${name}`));
    expect(visible).toBeTruthy();
  }
}
