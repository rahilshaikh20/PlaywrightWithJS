// pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;

    // ✅ Define locators
    this.usernameInput = page.locator('[name="username"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async loginMethod(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }
}

module.exports = { LoginPage };
