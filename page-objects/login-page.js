 ip_locators = {
   "username_input": "#user-name",
   "password_input": "#password",
   "login_button": "#login-button",
   "inventory_container": "#inventory_container",
   "login_button": '[class="rightContent-0-2-241"]>div>div>span',
   "logInWithEmail": '[class="emailButton-0-2-413"]>[id="auth-login-modal"] ',
   "logingModuleVerification": '/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div[1]/span',
   "email_input": '/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[1]/div[1]/input',
   "pass_input": '/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div[1]/input',
   "submit": '/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/button'
 }
 
 class LoginPage {

  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed() {
    await page.waitForSelector(ip_locators.login_button)
    const loginbutton = await page.innerText(ip_locators.login_button);
    console.log(loginbutton);
    // await page.click(ip_locators.login_button);
   
  }

  async submitLogin() {
    await page.waitForSelector(ip_locators.login_button);
    await page.click(ip_locators.login_button)
    await page.click(ip_locators.logInWithEmail);
    await page.waitForSelector(ip_locators.logingModuleVerification);
    await page.fill(ip_locators.email_input, HONEY_USER);
    await page.fill(ip_locators.pass_input, HONEY_PASS);
    const useremail = await page.locator(ip_locators.email_input).inputValue();
    const userpass = await page.locator(ip_locators.pass_input).inputValue();
    console.log(useremail);
    console.log(userpass);
    await page.click(ip_locators.submit);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(ip_locators.inventory_container);
    const visible = await page.isVisible(ip_locators.inventory_container);
    return expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };