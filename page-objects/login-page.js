 locators = {
   "username_input": "#user-name",
   "password_input": "#password",
   "login_button": "#login-button",
   "inventory_container": "#inventory_container",
   "loginLocator": '[class="main-0-2-81"]>div>div>div>div>div>div>div>span',
   "loginpage": '[class="main-0-2-81"]>div>main>div>div>div>h1'
 }
 
 class LoginPage {

  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed() {
    const login = await page.innerText(locators.loginpage);
    await page.waitForTimeout(1000);
    // expect(login).to.equal("We search for the internet’s best coupons");
  }

  async login () {
    // await page.waitForSelector(locators.loginLocator);
    await page.click(locators.loginLocator);
  }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'standard_user');
    await page.fill(locators.password_input,'secret_sauce');
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.inventory_container);
    const visible = await page.isVisible(locators.inventory_container);
    return expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };