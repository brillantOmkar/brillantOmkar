
const { test, expect } = require('@playwright/test');
const {InwardPage} = require('../pages/TotalInward');   //('../pages/login');


test('TotalInward', async ({ page }) => {

  test.setTimeout(140000);

  const  objInwardPage =new InwardPage(page);

  await objInwardPage.mygoto();
  await objInwardPage.login('logistech','l@123456');
  await page.waitForTimeout(12000); 
  await objInwardPage.InwardPO(); 
  await page.waitForTimeout(5000);  
  await objInwardPage.Inward( 'WPLS23', 'Lot_02', '1'); 
  await objInwardPage.PurchaseOrderReport();
  await objInwardPage.Receving('1','12/05/2023');
  await objInwardPage.RecevingReport();
  await objInwardPage.QualityCheck('1');
  await objInwardPage.PutAway();
  await objInwardPage.Inventory('Lot_02');


  })