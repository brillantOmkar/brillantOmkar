
const { test, expect } = require('@playwright/test');

const {InwardPage} = require('../pages/TotalInwardDDT');   //('../pages/login');


test('TotalInwardDDT', async ({ page }) => {

  test.setTimeout(210000);
  
  const objInwardPage =new InwardPage(page);
  const jsonData = await objInwardPage.getdata();
  console.log("In this class ",jsonData)
  
  await objInwardPage.mygoto();
  await objInwardPage.login('logistech','l@123456');
  await page.waitForTimeout(12000); 
  await objInwardPage.InwardPO('Purchase Order');
  await objInwardPage.Inventory('Lot_All');
  await objInwardPage.Inventory('Cloud_02');
  await objInwardPage.InwardPO('Purchase Order');   
  await objInwardPage.Inward('Purchase Order', 'WPLS130'); //Sales Return  .Transfer In  .Purchase Order
  //await objInwardPage.Paramterised()
  await objInwardPage.SKUaddition('4', '1');
  await objInwardPage.pickdate('12','InwardOrder', 'Expdate', '1' , '1');    // Date , LottableStage , Lottable , index , count, number
  await objInwardPage.pickdate('19','InwardOrder', 'Mfgdate', '2' , '3');
  await page.waitForTimeout(1000);
  await objInwardPage.BatchLottable('Inwardorder','453');  //Stage,Value
  await objInwardPage.POActionSave();
  await objInwardPage.SKUaddition('4', '2');            //Qty, Index
  await objInwardPage.POActionSave();
  await objInwardPage.FinalSAVEBTN('Purchase Order');
  await objInwardPage.PurchaseOrderReport();
  await objInwardPage.InwardPO('Purchase Order');
  await objInwardPage.RecevingDot();
  await objInwardPage.Receving('Yes','No','1','2');      //Pallet.Partail.index.Qty.count
  await objInwardPage.ActionSaveGRN();
  await objInwardPage.Receving('Yes','No','2','3',); 
  await objInwardPage.pickdate('4','GRN','Mfgdate','1','1');
  await objInwardPage.ActionSaveGRN();
  await objInwardPage.FinalSaveGRN();
  await objInwardPage.RecevingReport();
  await objInwardPage.InwardPO('Purchase Order'); 
  //if all QC accpet then just ('Accept') if some reject ('Reject','Accepted Qty')
  await objInwardPage.QualityCheckDot();
  await objInwardPage.QualityCheck('Accept','1','2');  //'Reject','1','2','20(AcceptedQty)'
  await objInwardPage.ActionSaveQC();
  await objInwardPage.QualityCheck('Accept','2','3');
  await objInwardPage.ActionSaveQC();
  await objInwardPage.FinalSaveQC();
  await objInwardPage.InwardPO('Purchase Order'); 
  //if want to edit location at put away enter Yes next location ('Yes','Loc1') if not edit ('No')
  await objInwardPage.PutInDot();
  await objInwardPage.PutAway('1','2','Yes','L2');  //['1','2','Yes','L2']/['No']
  await objInwardPage.PutAway('2','3','Yes','L2');    
  await objInwardPage.PutAwaySave();
  await objInwardPage.Inventory('Lot_All');
  await objInwardPage.Inventory('Cloud_02');



  })