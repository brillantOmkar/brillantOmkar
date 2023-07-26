import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test.describe(' Administrator functionality Verification', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('OPESA', 'OPESA@1234')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    console.log('Before each Test- Test Started **************')
  });


  test('Master - Vendor Master Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyVendorMaster()
    console.log('Vendor Master Verification- Test Ended **************')

  });

  test('Master - Customer Master Verification ', async ({ page }) => {

    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyCustomerMaster()
    console.log('Customer Master Verification- Test Ended **************')
  });

  test('Master - Warehouse Master Verification ', async ({ page }) => {

    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyWarehouseMaster()
    console.log('Warehouse Master Verification- Test Ended **************')
  });

  test('Master - SKU Master Verification ', async ({ page }) => {

    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifySKUMaster()
    console.log('SKU Master Verification- Test Ended **************')
  });

  test('Master - User Master Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyUserMaster()
    console.log('User Master Verification- Test Ended **************')
  });

  test('Master - Client Master Verification ', async ({ page }) => {

    const objAdminPage = new AdminPage(page)

    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyClientMaster()
    console.log('Client Master Verification- Test Ended **************')
  });

  test('Master - Company Master Verification ', async ({ page }) => {

    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyCompanyMaster()
    console.log('Company Master Verification- Test Ended **************')
  });

  test('Tools & Utilities - Import Designer Verification ', async ({ page }) => {
   
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyImportDesigner()
    console.log('Import Designer Verification- Test Ended **************')
  });

  test('Tools & Utilities - Query Builder Verification ', async ({ page }) => {
  
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyQueryBuilder()
    console.log('Query Builder Verification- Test Ended **************')
  });

  test('Tools & Utilities - Barcode Configuration Verification ', async ({ page }) => {
   
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyBarcodeConf()
    console.log('Barcode configuration Verification- Test Ended **************')
  });

  test('Tools & Utilities - Bisiness Rules Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyBusinessRules()
    console.log('Business Rules Verification- Test Ended **************')
  });

  test('Tools & Utilities- Third Party Configuration Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyThirdpartyConf()
    console.log('Third party Configuration Verification- Test Ended **************')
  });

  test('Tools & Utilities - Email Set up Verification ', async ({ page }) => {
   
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyEmailSetUp()
    console.log('Emai set up Verification- Test Ended **************')
  });

  test('Tools & Utilities - RFID Tagging Verification ', async ({ page }) => {
   
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyRFIDTagging()
    console.log('RFID Tagging Verification- Test Ended **************')
  });

  test('Tools & Utilities - Cycle Count Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyCycleCount()
    console.log('Cycle count Verification- Test Ended **************')
  });

  test('Printables - Report Setup Verification ', async ({ page }) => {
    const objAdminPage = new AdminPage(page)
    await objAdminPage.OpenAdminPage()
    await objAdminPage.VerifyReportSetup()
    console.log('Report Set Up Verification- Test Ended **************')
  });


});