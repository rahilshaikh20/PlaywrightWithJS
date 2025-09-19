import { test, expect } from '@playwright/test';
import { URL, name, email } from '../test-data/Constants';
import { validUser, invalidUser } from '../test-data/LoginData';

test('TC006: Sample TS test', async ({ page }) => {

  console.log('Name is: ',name);
  console.log('Email ID is: ',email);

  console.log('Valid user is: ',validUser.username)
  console.log('Valid password is: ',validUser.password)

  console.log('Invalid user is: ',invalidUser.username)
  console.log('Invalid password is: ',invalidUser.password)

  console.log("**** Test Concluded !!****")

});

