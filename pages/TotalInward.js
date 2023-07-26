const { expect } = require('@playwright/test');

exports.InwardPage = class InwardPage {

  constructor(page) {
    this.page = page;
    this.USERNAME = page.locator('#username');
    this.PASSWORD = page.locator('#password');
    this.LOGINBTN =  page.locator('//input[@value=\'Login\']');
    
    this.WAREHOUSE = page.locator('#ddlwarehouse');
    this.INWARDMENU = page.locator('//a[@onclick="wmsNavigatePage(\'Inward\');"]');
    this.ADDNEW = page.locator('//div[@class=\'wms-srv-grid-holder\']//span[contains(text(),\'Add New\')]');
    this.ORDERDATE = page.locator('#txtPoReceiptDate');
    this.DELIVERYDATE = page.locator('#txtPoDeliveryDate');
    this.REFERNCENO = page.locator('#wms-srv-order-popup #txtPoCustomerRefNo') 
    this.VENDOR = page.locator('//a[@onclick=\'openVendorListPopup();return false;\']/i');
    this.VENDORSELECT = page.locator('//body[1]/form[1]/div[1]/div[2]/div[2]/div[3]/div[19]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]/i[1]');
    this.SKUSearch = page.locator('//i[@onclick=\'openPurchaseProductListPopup()\']');
    this.SKUtext = page.locator('#txtSo_ProdSearchpopup');
    this.SKUsearchfinal = page.locator('//a[@onclick=\'openPurchaseProductListPopup();return false;\']');
    this.SKUactionsave = page.locator('//a[@class=\'wms-srv-icononly btnAddToProductListField\']');
    this.REQQTY = page.locator('#wms-srv-order-popup #addNew_RequestedQty');
    this.ActionSave = page.locator('//button[@onclick=\'savePODetails();\']');
    this.FinalSave = page.locator('#btnPOSave');
    this.recevingdot = page.locator('//body[1]/form[1]/div[1]/div[2]/div[2]/div[3]/div[20]/div[3]/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[2]/div[2]');
    this.GRNSKUsearch = page.locator('//div[@class=\'wms-srv-grid-row wmsFrmAddRow grnheadboxdetail\']/div[2]/i');
    this.GRNActionclick = page.locator('//div[@class=\'wms-srv-grid-cell\']/i');
    this.GRNPalletsearch = page.locator('//div[@class=\'wms-srv-grid-row wmsFrmAddRow grnheadboxdetail\']/div[3]/i');
    this.GRNPalletAction = page.locator('//div[@id=\'tlbgrnPalletMirriorList\']/div[2]/div[2]/i');
    this.GRNQTY = page.locator('#txtgrnqty');
    this.GRNLottable = page.locator('//input[@class=\'wmsLottableInput \']');
    this.GRNActionSave = page.locator('//div[@class=\'wms-srv-grid-action\']/button[@onclick=\'saveGrnDetails(objgrn);\']');
    this.GRNFinalSave = page.locator('#btnGRNSave');

    this.Reportmenu = page.locator('//a[@onclick="wmsNavigatePage(\'Report\');"]');
    this.PurchaseOrderR = page.locator('//div[text()=\'Purchase Order Report\']');
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
    this.PutawaySave = page.locator('#btnsubmit');

    this.InventoryMenu = page.locator('//a[@onclick="wmsNavigatePage(\'Inventory\');"]');
    this.Inventorysearch = page.locator('#txtSearchSkuInventry');
    this.InventorysearchBtn = page.locator('//a[@onclick=\'inventryskusearch();return false;\']/i');
    this.InventoryAvailable = page.locator('//div[@id=\'tblinventrylistgrid\']/div[2]/div[7]/a');
    this.Inventoryclose = page.locator('#wms-srv-availableinventorydetails-popup-close');
    this.DashboardMenu = page.locator('//a[@onclick="wmsNavigatePage(\'Dashboard\');"]');


}

  async mygoto() {
    await this.page.goto('http://38.242.245.55/EasyCloudWMS/Public/login.html');
  }

  async login(username,password) {
    await this.USERNAME.fill(username);
    await this.PASSWORD.fill(password);
    await this.LOGINBTN.click ();    
    
  }

  async InwardPO(){
    await this.INWARDMENU.click();
    //await this.page.waitForTimeout(10000); 
    await this.WAREHOUSE.selectOption('Logistech');
  }

  async Inward( Refernceno, SKU , QTY){    //POdate, Deliverydate, 
  
    await this.ADDNEW.click();
    //await this.ORDERDATE.fill(POdate);
    //await this.DELIVERYDATE.fill(Deliverydate);
    await this.REFERNCENO.fill(Refernceno);
    await this.VENDOR.click();
    await this.VENDORSELECT.click();
    await this.SKUSearch.click();
    await this.SKUtext.fill(SKU);
    await this.SKUsearchfinal.click();
    await this.page.waitForTimeout(5000);
    await this.SKUactionsave.click();
    await this.REQQTY.fill(QTY);
    await this.ActionSave.click();
    await this.FinalSave.click();
  }

  async PurchaseOrderReport(){
    await this.Reportmenu.click();
    await this.PurchaseOrderR.click();
    await this.page.waitForTimeout(5000);
     await this.closedReport.click();

  }

  async Receving(QTY, GRNlottable){
    await this.INWARDMENU.click();
    await this.page.waitForTimeout(5000);
    await this.recevingdot.click();
    await this.GRNSKUsearch.click();
    await this.GRNActionclick.click();
    await this.GRNPalletsearch.click();
    await this.GRNPalletAction.click();
    await this.GRNQTY.fill(QTY);
    await this.page.waitForTimeout(2000);
    await this.GRNLottable.fill(GRNlottable);
    await this.page.waitForTimeout(2000);
    await this.GRNActionSave.click();
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

  async QualityCheck(QCAccqty){
    await this.INWARDMENU.click();
    await this.page.waitForTimeout(5000);
    await this.Recevingsection.click();
    await this.QCdot.click();
    await this.QCdot2.click();
    await this.QCSKUsearch.click();
    await this.QCSKUAction.click();
    await this.QCAcceptedQty.fill(QCAccqty);
    await this.QCreason.selectOption('Product is ok');
    await this.QCActionsave.click();
    await this.QCFinalSave.click();
  }

  async PutAway (){
    await this.Qualitysection.click();
    await this.PutawayDot.click();
    await this.putawayDot2.click();
    await this.PutawaySave.click();
  }

  async Inventory (InvSKU){
    await this.InventoryMenu.click();
    await this.Inventorysearch.fill(InvSKU);
    await this.page.waitForTimeout(1000);
    await this.InventorysearchBtn.click();
    await this.page.waitForTimeout(1000);
    await this.InventoryAvailable.click();
    await this.page.waitForTimeout(4000);
    await this.Inventoryclose.click();
    await this.DashboardMenu.click();
    await this.page.waitForTimeout(5000);

  }
  

 
};