// @ts-check
import { test, expect } from '@playwright/test';
const {URL,name,email} = require('../test-data/Constants')
const {validUser,invalidUser} = require('../test-data/LoginData')


test('TC004: Check import data', async ({ page }) => {

  console.log('Name is: ',name);
  console.log('Email ID is: ',email);

  console.log('Valid user is: ',validUser.username)
  console.log('Valid password is: ',validUser.password)

  console.log('Invalid user is: ',invalidUser.username)
  console.log('Invalid password is: ',invalidUser.password)

});


