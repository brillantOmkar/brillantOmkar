import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ReportPage } from '../pages/ReportPage';

test.describe(' Reports Verification', () => {

  test('Inventory Reports Verification', async ({ page }) => {

    const objLogin = new LoginPage(page)
    const objReportPage = new ReportPage(page)


    await objLogin.gotoLoginPage()
    await objLogin.login('OPESA', 'OPESA@1234')

    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    await objReportPage.OpenReportsPage()
    await objReportPage.verifyInventoryReport('Current Stock Order')
    await objReportPage.verifyInventoryReport('Stock Summary Report')
    await objReportPage.verifyInventoryReport('Daily Stock Report')
    await objReportPage.verifyInventoryReport('Internal Transfer Report')
    await objReportPage.verifyInventoryReport('Cycle count Report')
    await objReportPage.verifyInventoryReport('ABC Analysis Report')
    await objReportPage.verifyInventoryReport('Inventory Aging Report')
    await objReportPage.verifyInventoryReport('Self Life Aging Report')
    await objReportPage.verifyInventoryReport('Stock leger Report')


    await page.waitForTimeout(1000)

  });



  test('Outward Reports Verification', async ({ page }) => {

    const objLogin = new LoginPage(page)
    const objReportPage = new ReportPage(page)


    await objLogin.gotoLoginPage()
    await objLogin.login('OPESA', 'OPESA@1234')

    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    await objReportPage.OpenReportsPage()
    await objReportPage.verifyOutwardReport('Sales Order Report')
    await objReportPage.verifyOutwardReport('Allocation Group')
    await objReportPage.verifyOutwardReport('Picking Report')
    await objReportPage.verifyOutwardReport('Dispatch Report')
    await objReportPage.verifyOutwardReport('Packing Report')
    await objReportPage.verifyOutwardReport('QC Out Report')
    await objReportPage.verifyOutwardReport('Allocation Shortage Report')
    await objReportPage.verifyOutwardReport('Sales Return Report')
    await objReportPage.verifyOutwardReport('Outward Detail Report')


    await page.waitForTimeout(1000)

  });


 


  test('Location Reports Verification', async ({ page }) => {


    const objLogin = new LoginPage(page)
    const objReportPage = new ReportPage(page)


    await objLogin.gotoLoginPage()
    await objLogin.login('OPESA', 'OPESA@1234')

    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    await objReportPage.OpenReportsPage()
    await objReportPage.verifyLogReport('Client Report')
    await objReportPage.verifyLogReport('Product Report')
    await objReportPage.verifyLogReport('Location Report')
    await objReportPage.verifyLogReport('Warehouse Occupancy Report')
    await objReportPage.verifyLogReport('Email Alert Report')
    await objReportPage.verifyLogReport('Vendor Report')


    await page.waitForTimeout(1000)

  });

  test('Inward Reports Verification', async ({ page }) => {

    const objLogin = new LoginPage(page)
    const objReportPage = new ReportPage(page)


    await objLogin.gotoLoginPage()
    await objLogin.login('OPESA', 'OPESA@1234')

    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    await objReportPage.OpenReportsPage()

    await objReportPage.verifyInwardReport('Purchase Order Report')
    await objReportPage.verifyInwardReport('Receiving Report')
    await objReportPage.verifyInwardReport('Put Away Report')
    await objReportPage.verifyInwardReport('Quality Check Report')
    await objReportPage.verifyInwardReport('Inward Detail Report')


    await page.waitForTimeout(1000)


  });

  test('Movement Reports Verification', async ({ page }) => {

    const objLogin = new LoginPage(page)
    const objReportPage = new ReportPage(page)


    await objLogin.gotoLoginPage()
    await objLogin.login('OPESA', 'OPESA@1234')

    await page.waitForLoadState('domcontentloaded')
    await page.waitForSelector('#divCPHolder_Form > div.container-fluid > div > div > div > div')

    await objReportPage.OpenReportsPage()
    await objReportPage.verifyMovementReport('Stock Movement Report')
    await objReportPage.verifyMovementReport('Near Expiry Report')
    await objReportPage.verifyMovementReport('FSN Report')
    await page.waitForTimeout(2000)


  });

});
