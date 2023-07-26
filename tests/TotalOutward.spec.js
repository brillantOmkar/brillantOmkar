const { test, expect } = require('@playwright/test');
const {OutwardPage} = require('../pages/TotalOutwardPage');   //('../pages/login');


test('TotalOutwardPage', async ({ page }) => {

  test.setTimeout(140000); 

  const  objOutwardPage =new OutwardPage(page);

  await objOutwardPage.mygoto();
  await objOutwardPage.login('logistech','l@123456');
  await page.waitForTimeout(10000); 
  await objOutwardPage.OutwardMenu(); 
  await page.waitForTimeout(10000);  
  await objOutwardPage.Outward( '25-Jul-2023','WPLSO47', 'Dummy Client' ,'Lot_02' , '2', 'Test'); 
  await page.waitForTimeout(4000);
  await objOutwardPage.AllocationPlan();
  await objOutwardPage.picking();
  await objOutwardPage.QualityCheck('2','Product is ok');
  await page.waitForTimeout(2000);
  await objOutwardPage.Packing('2','23','4','4','121','234','test');
  await page.waitForTimeout(2000);
  await objOutwardPage.Dispatch('3523421', 'MH14 3452');
  await page.waitForTimeout(2000);

  })