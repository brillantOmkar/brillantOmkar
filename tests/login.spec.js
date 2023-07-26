// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'

test('test', async ({ page }) => {

  const objLogin = new LoginPage(page)

  await objLogin.gotoLoginPage()
  await objLogin.login('OPESA', 'OPESA@1234')

  
  await objLogin.gotologout()
     
});