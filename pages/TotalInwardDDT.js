import fs from 'fs'

const { test, expect } = require('@playwright/test');


exports.InwardPage = class InwardPage {
  
  constructor(page) {

    
    this.page = page;
    this.jsonData = ''

    this.USERNAME = page.locator('#username');
    this.PASSWORD = page.locator('#password');
    this.LOGINBTN =  page.locator('//input[@value=\'Login\']');
    
    this.WAREHOUSE = page.locator('#ddlwarehouse');
    this.INWARDMENU = page.locator('//a[@onclick="wmsNavigatePage(\'Inward\');"]');
    this.InwardOrderType = page.locator('#ddlPageObject');
    this.ADDNEW = page.locator('//div[@class=\'wms-srv-grid-holder\']//span[contains(text(),\'Add New\')]');
    this.ORDERDATE = page.locator('#txtPoReceiptDate');
    this.DELIVERYDATE = page.locator('#txtPoDeliveryDate');
    this.REFERNCENO = page.locator('#wms-srv-order-popup #txtPoCustomerRefNo') 
    this.VENDOR = page.locator('//a[@onclick=\'openVendorListPopup();return false;\']/i');
    this.VENDORSELECT = page.locator('//body[1]/form[1]/div[1]/div[2]/div[2]/div[3]/div[19]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]/i[1]');
    this.CLIENT = page.locator('//a[@onclick=\'openVendorListPopup();return false;\']/i');
    this.CLIENTSELECT = page.locator('//div[@id=\'wms-srv-Vendor-list-popup\']/div[2]/div/div[3]/div/div/div/div/div/div[2]/div[3]/div/a');
    this.SKUSearch = page.locator('//i[@onclick=\'openPurchaseProductListPopup()\']');
    this.SKUtext = page.locator('#txtSo_ProdSearchpopup');
    this.SKUsearchfinal = page.locator('//a[@onclick=\'openPurchaseProductListPopup();return false;\']');
    this.SKUactionsave = page.locator('//a[@class=\'wms-srv-icononly btnAddToProductListField\']');
    this.REQQTY = page.locator('#wms-srv-order-popup #addNew_RequestedQty');
    this.SecondPOLottable = page.locator('//div[@id=\'tlbPoOrderDetailsGrid\']/div[2]/div[8]/div/input[2]');
    this.PickNextMonth = page.locator('//span[text()=\'Next\']');
    this.PickPrevMonth = page.locator('//span[text()=\'Prev\']');
    this.ActionSave = page.locator('//button[@onclick=\'savePODetails();\']');
    this.FinalSave = page.locator('#btnPOSave');
    this.InwardClosedPopup = page.locator('#wms-srv-order-popup-close');

    this.recevingdot = page.locator('//body[1]/form[1]/div[1]/div[2]/div[2]/div[3]/div[20]/div[3]/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[2]/div[2]');
    this.GRNSKUsearch = page.locator('//div[@class=\'wms-srv-grid-row wmsFrmAddRow grnheadboxdetail\']/div[2]/i');
    
    this.GRNPalletsearch = page.locator('//div[@class=\'wms-srv-grid-row wmsFrmAddRow grnheadboxdetail\']/div[3]/i');
    this.GRNPalletAction = page.locator('//div[@id=\'tlbgrnPalletMirriorList\']/div[2]/div[2]/i');
    this.GRNQTY = page.locator('#txtgrnqty');
    this.SecondGRNLottable = page.locator('//div[@id=\'tblgrndetail\']/div[2]/div[7]/div/input[2]');
    this.GRNLottable = page.locator('//input[@class=\'wmsLottableInput \']');
    this.GRNActionSave = page.locator('//div[@class=\'wms-srv-grid-action\']/button[@onclick=\'saveGrnDetails(objgrn);\']');
    this.GRNFinalSave = page.locator('#btnGRNSave');
    

    this.Reportmenu = page.locator('//a[@onclick="wmsNavigatePage(\'Report\');"]');
    this.PurchaseOrderR = page.locator('//div[text()=\'Purchase Order Report\']');
    this.PuchaseOrderR_Reference = page.locator('//div[@id=\'txtGridPurchaseOrderobjrexta\']/div/div[2]/div[@id=\'gettopfiveorderobjrexta\']/div[2]/div[2]');
    this.RecevingR = page.locator('//div[text()=\'Receiving Detail Report\']');
    this.RecevingdetailR = page.locator('//div[@id=\'gettopfiveorderGRNRPT\']/div[2]/div[8]');
    this.InwardQCR = page.locator('//div[text()=\'Inward Quality Check\']');
    this.InwardPutawayR = page.locator('//div[text()=\'Put Away Report\']');
    this.closedReport = page.locator('#wms-srv-report-popup-close');

    this.Recevingsection = page.locator('//div[text()=\'Receiving\']');
    this.QCdot = page.locator('//body[1]/form[1]/div[1]/div[2]/div[2]/div[3]/div[20]/div[3]/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[2]/div[3]');
    this.QCdot2 = page.locator('//div[@id=\'gridqcList\']/div[2]/div[6]/div/div/div/div[@class=\'wms-srv-dot wms-srv-red\']');
    this.QCSKUsearch = page.locator('//div[@class=\'wms-srv-grid-row wmsFrmAddRow qcheadboxdetail\']/div/i[@title=\'Search\']');
    this.QCSKUAction = page.locator('//div[@id=\'pnlQCProductList\']/div[2]/div[8]/i');
    this.QCAcceptedQty = page.locator('#txtacceptedqty');
    this.QCreason = page.locator('#ddlreason'); //Product is ok
    this.QCActionsave = page.locator('button[onclick="saveQCDetails(objQC);"]');
    this.QCFinalSave = page.locator('#qcsavebnt');

    this.Qualitysection = page.locator('#dashQualityCheck');
    this.PutawayDot = page.locator('//div[@id=\'tlbInboundGrid\']/div[2]/div[5]/div/div/div[2]/div[4]');
    this.putawayDot2 = page.locator('//div[@id=\'Putwaygrid\']/div[2]/div[6]/div/div/div[2]/div[2]');
    this.LOCSearchBtn = page.locator('//div[@id=\'tblputingrid\']/div[2]/div[2]/i');
    this.LOCsearchTextbox = page.locator('#txtputinlocfilter');
    this.LOCTextboxsearchBtn = page.locator('//i[@onclick=\'openfilterloclist()\']');
    this.LOCselect = page.locator('//div[@id=\'putinloclist\']/div[2]/div[3]/div/button');
    this.PutawaySave = page.locator('#btnsubmit');

    this.InventoryMenu = page.locator('//a[@onclick="wmsNavigatePage(\'Inventory\');"]');
    this.Inventorysearch = page.locator('#txtSearchSkuInventry');
    this.InventorysearchBtn = page.locator('//a[@onclick=\'inventryskusearch();return false;\']/i');
    this.InventoryAvailable = page.locator('//div[@id=\'tblinventrylistgrid\']/div[2]/div[7]/a');
    this.Inventoryclose = page.locator('#wms-srv-availableinventorydetails-popup-close');
    this.DashboardMenu = page.locator('//a[@onclick="wmsNavigatePage(\'Dashboard\');"]');


}



/*this.SKUtext.fill(this.jsonData[Inward_SKU]);
const computerData = [{
    SKUname = this.jsonData
}]*/

async getdata() {

  const filename = 'testdata.json'
  const folder = 'C:\\EasyWMS\\test-data\\'

  const filePath = folder.concat(filename);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  this.jsonData = JSON.parse(fileContents);
  // console.log(this.jsonData)

  
  console.log("1",this.jsonData['Inward_SKU']);

  return( this.jsonData)

    }

    

   

    /*async Paramterised (){
      const computerData = [{
        SKUname : "Lot_02",
        Quantity : "2"
       },
       {
        SKUname : "Lot_03",
        Quantity : "2"
       }]
       computerData.forEach(data => {
      test (`testing with ${data.SKUname}`, async({page}) => {
         await this.SKUSearch.click();
          await this.SKUtext.fill(data.SKUname);
          await this.SKUsearchfinal.click();
          await this.page.waitForTimeout(2000);
          await this.SKUactionsave.click();
          await this.REQQTY.fill(data.Quantity);
          await this.ActionSave.click();
      })
    })
    }*/


    async pickdate (Date , LottableStage , Lottable , index , count){
      const Year = "2023";
      const Month = "August";
      const date = Date;

      const StrName = await LottableStage
      
      
            console.log("Lottable inserted in stage:", StrName)
              if (index == 1){
              if (StrName == 'InwardOrder'  ) {
                await this.page.locator(`//div[@id=\'tlbPoOrderDetailsGrid\']/div[2]/div[8]/div/input[${count}]`).click();
              }
              if(StrName == 'GRN'){
                await this.page.locator(`//div[@id=\'tblgrndetail\']/div[2]/div[7]/div/input[${count}]`).click();
              }
              }
              if (index == 2){
                if (StrName == 'InwardOrder'  ) {
                  await this.page.locator(`//div[@id=\'tlbPoOrderDetailsGrid\']/div[2]/div[8]/div/input[${count}]`).click();
                }
                if(StrName == 'GRN'){
                  await this.page.locator(`//div[@id=\'tblgrndetail\']/div[2]/div[7]/div/input[${count}]`).click();
                }
              }
                
               while (true){
               const CurrentYear = await this.page.locator('//span[@class=\'ui-datepicker-year\']').textContent();
               const CurrentMonth = await this.page.locator('//span[@class=\'ui-datepicker-month\']').textContent();
        
  
               if (CurrentYear== Year && CurrentMonth == Month){
                 break;
               }
              }
            
      const StrName1 = await Lottable 
      console.log("My Lottable is "+ Lottable)
                    if (StrName1 == 'Expdate'  ) {
                    await this.PickNextMonth.click();
                    await this.page.locator(`//a[@class=\'ui-state-default\'][text()='${date}']`).click();
                    }
                    if (StrName1 == 'Mfgdate'  ) {
                      await this.PickPrevMonth.click();
                      await this.page.locator(`//a[@class=\'ui-state-default\'][text()='${date}']`).click();
                    }
                    
      //await this.page.locator(`//a[@class=\'ui-state-default\'][text()='${date}']`).click();
      
      
  }
  
  async BatchLottable(LottableStage , number){
    const StrName = await LottableStage
  
   if (StrName == 'Inwardorder'){
    console.log('Before fill batchno');
    await this.SecondPOLottable.type(number);
    console.log('After fill batchno');
     }  ////div[@id=\'tlbPoOrderDetailsGrid\']/div[2]/div[8]/div/input[2]
     if (StrName == 'GRN' ){
    await this.SecondGRNLottable.type(number);
     }  ////div[@id=\'tblgrndetail\']/div[2]/div[7]/div/input[2]

  }

  async mygoto() {
    await this.page.goto('http://38.242.245.55/EasyCloudWMS/Public/login.html');
  }

  async login(username,password) {
    await this.USERNAME.fill(username);
    await this.PASSWORD.fill(password);
    await this.LOGINBTN.click ();    
    
  }

  async InwardPO(Inwardtype){
    await this.INWARDMENU.click();
    //await this.page.waitForTimeout(10000); 
    await this.WAREHOUSE.selectOption('Logistech');
    await this.page.waitForTimeout(5000);
    await this.InwardOrderType.selectOption(Inwardtype);
    
  
  }

  async Inward( Inwardordertype, Refernceno  ){    //POdate, Deliverydate, 
    
    const StrName = await Inwardordertype
        console.log("Inward order type is...", StrName)
     const incre = this.jsonData['Inward_SKU1'];
        // click on menu link
        if (StrName == 'Purchase Order') {
          await this.InwardOrderType.selectOption(Inwardordertype);
          await this.page.waitForTimeout(2000);
          await this.ADDNEW.click();
          //await this.ORDERDATE.fill(POdate);
          //await this.DELIVERYDATE.fill(Deliverydate);
          await this.REFERNCENO.fill(Refernceno);
          await this.VENDOR.click();
          await this.VENDORSELECT.click();
          
          }

         if (StrName == 'Sales Return') {
          await this.InwardOrderType.selectOption(Inwardordertype);
          await this.page.waitForTimeout(2000);
          await this.ADDNEW.click();
          //await this.ORDERDATE.fill(POdate);
          //await this.DELIVERYDATE.fill(Deliverydate);
          await this.REFERNCENO.fill(Refernceno);
          await this.CLIENT.click();
          await this.CLIENTSELECT.click();
          
    
        }
  }

  async SKUaddition (QTY, index){
            const value1=this.jsonData['Inward_SKU1']
            const value2=this.jsonData['Inward_SKU2']
            await this.SKUSearch.click();
            if (index == 1){
            await this.SKUtext.fill(value1);
            }
            if (index == 2){
                await this.SKUtext.fill(value2);
                }
            await this.SKUsearchfinal.click();
            await this.page.waitForTimeout(2000);
            await this.SKUactionsave.click();
            await this.REQQTY.fill(QTY);
            
            
         }

    async POActionSave(){
      
      await this.ActionSave.click();
      await this.page.waitForTimeout(3000);
    }     

  async FinalSAVEBTN (Inwardordertype){
    const StrName = await Inwardordertype; 
    if(StrName == 'Purchase Order'){
      await this.page.waitForTimeout(2000);
      await this.FinalSave.click();
    }
    if(StrName == 'Sales Return'){
      await this.page.waitForTimeout(2000);
      await this.InwardClosedPopup.click();
    }
    
  }


  
  async PurchaseOrderReport(){
    await this.Reportmenu.click();
    await this.PurchaseOrderR.click();
    await this.page.waitForTimeout(5000);
     await this.closedReport.click();

  }

async RecevingDot(){
    await this.recevingdot.click();
}

  async Receving(Pallet, Partail, index, count, GRNqty){ 
    
    await this.GRNSKUsearch.click();

       if (index == 1){
       await this.page.locator(`//div[@id=\'skuForGrnSearchGrid\']/div[${count}]/div[8]/i`).click();
       }
       if (index == 2){
       await this.page.locator(`//div[@id=\'skuForGrnSearchGrid\']/div[${count}]/div[8]/i`).click();
       }
   
    const StrName = await Pallet
    console.log("User want to use of pallet:", StrName)
    const StrName1 = await Partail
      if (StrName == 'Yes') {
       await this.GRNPalletsearch.click();
       await this.GRNPalletAction.click();
       await this.page.waitForTimeout(2000);
       }
         if (StrName == 'No') {
       }

    if(StrName1 == 'Yes'){
      await this.GRNQTY.fill('');
      await this.GRNQTY.fill(GRNqty);
      
     } if (StrName1 == 'No'){
       
     }
  }
async ActionSaveGRN(){
  await this.page.waitForTimeout(2000);
  await this.GRNActionSave.click();
}
async FinalSaveGRN(){
  
  await this.page.waitForTimeout(2000);
  await this.GRNFinalSave.click();
}
  async RecevingReport(){
    await this.Reportmenu.click();
    await this.RecevingR.click();
    await this.page.waitForTimeout(5000);
    //await this.RecevingdetailR.click();
    //await this.page.waitForTimeout(5000);
     await this.closedReport.click();

  }

  async QualityCheckDot (){
    await this.Recevingsection.click();
    await this.QCdot.click();
    await this.QCdot2.click();
  }

  async QualityCheck(QualityCheck, index, count, AcceptedQty){

    await this.QCSKUsearch.click();
    if (index == 1){
      await this.page.locator(`//div[@id=\'pnlQCProductList\']/div[${count}]/div[8]/i`).click();
      }
      if (index == 2){
        await this.page.locator(`//div[@id=\'pnlQCProductList\']/div[${count}]/div[8]/i`).click();
          }
      
    const StrName = await QualityCheck
    console.log("Quality check is:", StrName)
    
    if (StrName == 'Accept') {
      await this.QCreason.selectOption('Product is ok');
      
    }
    if (StrName == 'Reject') {
      await this.QCAcceptedQty.fill('');
      await this.QCAcceptedQty.type(AcceptedQty);
      await this.QCreason.selectOption('Product is damaged'); 
    }
    
  }

  async ActionSaveQC(){
    await this.QCActionsave.click();
  }

  async FinalSaveQC(){
    await this.QCFinalSave.click();
  }

  async PutInDot (){
    await this.Qualitysection.click();
    await this.PutawayDot.click();
    await this.putawayDot2.click();
  }

  async PutAway (index, count, LOCEdit , LOC){

    const StrName = await LOCEdit
    console.log("User wants to edit location:", StrName)

    
    if (StrName == 'Yes', index, count) {
      if (index == 1){
        await this.page.locator(`//div[@id=\'tblputingrid\']/div[${count}]/div[2]/i`).click();
        }
        if (index == 2){
          await this.page.locator(`//div[@id=\'tblputingrid\']/div[${count}]/div[2]/i`).click();
      }
      
     
     await this.LOCsearchTextbox.fill(LOC);
     await this.LOCTextboxsearchBtn.click();
     await this.LOCselect.click();
     
    }
    if (StrName == 'No') {
     
      
      
     }
    
    
  }

  async PutAwaySave(){
    await this.page.waitForTimeout(2000);
    await this.PutawaySave.click();
  }

  async Inventory (InvSKU){
    await this.InventoryMenu.click();
    await this.Inventorysearch.fill(InvSKU);
    await this.page.waitForTimeout(1000);
    await this.InventorysearchBtn.click();
    await this.page.waitForTimeout(1000);
    const Balance = await this.page.locator('//div[@id=\'tblinventrylistgrid\']/div[2]/div[7]/a').textContent();
    console.log(InvSKU+ " has available balance is "+Balance);
    await this.InventoryAvailable.click();
    await this.page.waitForTimeout(1000);
    await this.Inventoryclose.click();
    await this.DashboardMenu.click();
    await this.page.waitForTimeout(1000);

  }
  

 
};