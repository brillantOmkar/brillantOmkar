import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LabelPrintPage } from '../pages/LabelPrintPage';

test.describe('Phase 1-Label Printing Verification', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('OPESA', 'OPESA@1234')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')
    console.log('Before each Test- Test Started **************')
  });

  test('LOCATION Label  verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.LocationLabelPage()
    console.log('Location label Verification- Test Ended **************')
  });

  test('SKU Label  verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.SKULabelPage()
    console.log('SKU label Verification- Test Ended **************')
  });

  test('BOX verification', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.BoxLabelPage()
    console.log('BOX label Verification- Test Ended **************')

  });
});

test.describe('Phase 2 -Label Printing Verification', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('OPESA', 'OPESA@1234')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')
    console.log('Before each Test- Test Started **************')
  });


  test('CRATE verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.CrateLabelPage()
    console.log('CRATE Label Verification- Test Ended **************')
  });

  test('CONTAINER verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.ContainerLabelPage()
    console.log('Container label Verification- Test Ended **************')
  });
});

test.describe('Phase 3 -Label Printing Verification', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('OPESA', 'OPESA@1234')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')
    console.log('Before each Test- Test Started **************')
  });


  test('STORE PALLET verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.StorePalletLabelPage()
    console.log('Store Pallet label Verification- Test Ended **************')
  });

  test('CARTON verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.CartonLabelPage()
    console.log('CARTON label Verification- Test Ended **************')
  });

  test('Shipping PalletLabel  verification ', async ({ page }) => {
    const objLabelPrintPage = new LabelPrintPage(page)
    await objLabelPrintPage.gotoOpenLabelPage()
    await objLabelPrintPage.ShippingPalletLabelPage()
    console.log('Shipping Pallet  label Verification- Test Ended **************')
  });

});