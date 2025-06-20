
import { BasePage } from './basePage.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(username, password) {
    await this.fillElement(this.emailField, username);
    await this.fillElement(this.passwordField, password);
    await this.clickElement(this.loginButton);
    await this.assertSuccessMessage('Logged in successfully');
  }
}
