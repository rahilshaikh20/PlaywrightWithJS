// @ts-check
import { test, expect } from '@playwright/test';
const {URL} = require('../utils/Constants')
const { LoginPage } = require('../pages/LoginPage');
const {validUser,invalidUser} = require('../test-data/LoginData')

test('TC003: Check Orange title and page locators', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto(URL); //Gets data from Constants
  await expect(page).toHaveTitle('OrangeHRM');
  //Get the common method from Login page
  await loginPage.loginMethod(validUser.username,validUser.password) //Gets data from LoginData

  await page.waitForTimeout(5000) // pauses for 5 seconds

   // Get the page title
  const pageTitle = await page.title();
  const pageNewURL =await page.url();

  console.log("Login page title is: ",pageTitle)
  console.log("Login page URL is: ",pageNewURL)

//  test.setTimeout(5000);
   
});


