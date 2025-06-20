
import { expect } from '@playwright/test';
import { BasePage } from './basePage.js';

export class FlowPage extends BasePage {
  constructor(page) {
    super(page);
    this.createButton = page.locator('button:has-text("Create Flow")');
    this.nameInput = page.locator('#flowName');
    this.stepsInput = page.locator('#flowSteps');
    this.descriptionInput = page.locator('#flowDescription');
    this.submitButton = page.locator('button:has-text("Submit")');
    this.flowList = page.locator('.flow-list'); // Update based on your DOM
    this.successMessage = page.locator('.toast-success'); // Inherited from BasePage
  }

  async goto() {
    await this.selectTab('Flow');
  }

  async createFlow(data) {
    await this.clickElement(this.createButton);
    await this.fillElement(this.nameInput, data.name);
    await this.fillElement(this.stepsInput, data.steps.toString());
    await this.fillElement(this.descriptionInput, data.description);
    await this.clickElement(this.submitButton);
    await this.assertSuccessMessage('Flow created successfully');
  }

  async verifyFlow(name) {
    await expect(this.flowList).toContainText(name);
  }
}



