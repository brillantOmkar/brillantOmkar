const { expect } = require('@playwright/test');

exports.OutwardPage = class OutwardPage {

  constructor(page) {
    this.page = page;
    this.USERNAME = page.locator('#username');
    this.PASSWORD = page.locator('#password');
    this.LOGINBTN =  page.locator('//input[@value=\'Login\']');
    
    this.WAREHOUSE = page.locator('#ddlwarehouse');
    this.OUTWARDMenu = page.locator('//a[@onclick="wmsNavigatePage(\'Outward\');"]');

    this.ADDNEW = page.locator('(//button[@title=\'Add New\'])[1]');
    this.Deliverydate = page.locator('#txtSo_DeliveryDate');
    this.REFERNCENO = page.locator('#txtSo_CustomerPoNo');
    this.ClientSearch = page.locator('//a[@onclick="openClientListPopup();return false;"]/i');
    this.Clientsearchtextbox = page.locator('#txtclientsearch');  //Dummy Client
    this.Clientsearchsymbol = page.locator('//div[@class=\'wms-srv-productsearch\']/a[@onclick=\'searchClient();return false;\']');
    this.ClientActionsave = page.locator('//div[@id=\'pnlSalesOrderClientList\']/div[2]/div[3]/div/a');
    this.BillAddressSearch = page.locator('//a[@onclick=\'openBillToListPopup();return false;\']');
    this.BillAdressActionSave = page.locator('//div[@id=\'pnlSalesOrderBillToList\']/div[2]/div[3]/div/a');
    this.ShipAddressSearch = page.locator('//a[@onclick=\'openShipToListPopup();return false;\']/i');
    this.ShipAddressActionSave = page.locator('//div[@id=\'pnlSalesOrderShipToList\']/div[2]/div[3]/div/a');
    this.AddSKUBtn = page.locator('//div[@id=\'pnlWmsDetail\']/div[1]/button/span[text()=\'Add SKU\']');
    this.SKUsearchtextbox = page.locator('#txtSo_ProdSearchpopup');
    this.SKUsearchsymbol = page.locator('//a[@onclick=\'loadSalesProductListPopup();return false;\']');
    this.SKUActionSave = page.locator('//div[@id=\'pnlSalesOrderProductList\']/div[2]/div[13]/div/a');
    this.SKUFinalSave = page.locator('//div[@class=\'pnlBtnAddSkuHolder\']/button/span');
    this.REQQTY = page.locator('#txtSo_RequestedQty_0');
    this.Remark = page.locator('#txtSo_Remark');
    this.OutwardActionSave = page.locator('//div[@id=\'wmsSkuDetailsSalesOrderGrid\']/div[2]/div[9]/div/button/i');
    this.OutwardFinalSave = page.locator('#btnCloseCreateSalesOrderForm');

    this.selectSOorder = page.locator('//div[@id=\'tlbOutWardGridSO\']/div[2]/div[1]/input');
    this.AllocationPlanBtn = page.locator('//div[@id=\'purchaseOrderGrid\']/div/div[1]/button[3]');
    this.CreateBatchBtn = page.locator('#btnCreatedirectBatch');

    this.Pickingdot = page.locator('//div[@id=\'tlbBatchListGrid\']/div[2]/div[6]/div/div/div[2]/div[1]');
    this.SavepickingBtn = page.locator('#btnSavePickupDetailsAll');

    this.pickingsection = page.locator('#dashPickingcount');
    this.QualityCheckOrderdot = page.locator('//div[@id=\'tblgetPickingList\']/div[2]/div[8]/div/div/div/div[2]');
    this.QualityCheckOrderdot2 = page.locator('//div[@id=\'batchListQC\']/div[2]/div[5]/div/div/div[2]/div[2]');
    this.QCSKUsearch = page.locator('//a[@onclick=\'openQCProductListPopup()\']');
    this.QCSKUAction = page.locator('//a[@class=\'wms-srv-icononly btnAddToProductListField\']');
    this.QCAcceptQTY = page.locator('#txtAcptQty');
    this.QCReasoncode = page.locator('#ddlResonCodeQC');  //Product is ok
    this.QCActionSave = page.locator('//div[@id=\'AppendsaveButton\']/div/a');
    this.QCFinalsave = page.locator('#btnSave');

    this.QualityChecksection = page.locator('#dashQualityCheckcount');
    this.Packingdot = page.locator('//div[@id=\'tblgetQCList\']/div[2]/div[7]/div/div/div[2]/div[2]');
    this.Packingdot2 = page.locator('//div[@id=\'packingSalesOrderGrid\']/div[2]/div[4]/div/div/div[2]/div[2]');
    this.PackingLOCSearch = page.locator('//a[@onclick=\'operPackingLOcation();return false;\']/i');
    this.PackingLOCActionSave = page.locator('//div[@id=\'packinglocationList\']/div[2]/div[3]/div/a');
    this.Cartonsearch = page.locator('//a[@onclick=\'openPackingShippingPalletList();return false;\']/i');
    this.CartonSelect = page.locator('//div[@id=\'packingStagingPalletList\']/div[2]/div[3]/div/a');
    this.PackingSKUsearch = page.locator('//a[@onclick=\'openPackingSkuList();return false;\']/i');
    this.PackingSKUselect = page.locator('//div[@id=\'packingSkuList\']/div[2]/div[5]/div/a');
    this.PackingQTY = page.locator('#txtPackingQty_Packing');
    this.PNumberofPackage = page.locator('#txtNoOfPackage_Packing');
    this.Pwidth = page.locator('#txtWidth_Packing');
    this.PHeight = page.locator('#txtHeight_Packing');
    this.PLength = page.locator('#txtLength_Packing');
    this.PWeight = page.locator('#txtWeight_Packing');
    this.PNotes = page.locator('#txtNotes_Packing');
    this.PActionSave = page.locator('//div[@id=\'dvActionSave\']/a');
    this.PFinalSave = page.locator('#packingSave');

    this.Packingsection = page.locator('#dashStagingcount');
    this.Dispatchdot = page.locator('//div[@id=\'tblgetPackingList\']/div[2]/div[8]/div/div/div[2]/div[2]');
    this.Dispatchdot2 = page.locator('//div[@id=\'pnlWmsHead\']/div[2]/div[6]/div/div/div[2]/div[2]');
    this.LRno = page.locator('#txtlrno');
    this.VechileNo = page.locator('#txtvehicleno');
    this.DispatchSave = page.locator('#btnDispatchSave');
    this.Dispatchsection = page.locator('#dashPassedBatchcount');

    this.Reportmenu = page.locator('//a[@onclick="wmsNavigatePage(\'Report\');"]');
    this.PurchaseOrderR = page.locator('//div[text()=\'Purchase Order Report\']');
    this.RecevingR = page.locator('//div[text()=\'Receiving Detail Report\']');
    this.RecevingdetailR = page.locator('//div[@id=\'gettopfiveorderGRNRPT\']/div[2]/div[8]');
    this.InwardQCR = page.locator('//div[text()=\'Inward Quality Check\']');
    this.InwardPutawayR = page.locator('//div[text()=\'Put Away Report\']');
    this.closedReport = page.locator('#wms-srv-report-popup-close');



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

  async OutwardMenu(){
    await this.OUTWARDMenu.click();
    //await this.page.waitForTimeout(10000); 
    await this.WAREHOUSE.selectOption('Logistech');
  }

  async Outward( Delivdate,Refernceno, Client , SKU , QTY , remark){    //POdate, Deliverydate, 
  
    await this.ADDNEW.click();
    await this.Deliverydate.fill(Delivdate);
    await this.REFERNCENO.fill(Refernceno);
    await this.ClientSearch.click();
    await this.Clientsearchtextbox.fill(Client);
    await this.Clientsearchsymbol.click();
    await this.ClientActionsave.click();
    await this.page.waitForTimeout(1000);
    await this.BillAddressSearch.click();
    await this.BillAdressActionSave.click();
    await this.page.waitForTimeout(1000);
    await this.ShipAddressSearch.click();
    await this.ShipAddressActionSave.click();
    await this.page.waitForTimeout(1000);
    await this.AddSKUBtn.click();
    await this.page.waitForTimeout(3000);
    await this.SKUsearchtextbox.fill(SKU);
    await this.SKUsearchsymbol.click();
    await this.page.waitForTimeout(2000);
    await this.SKUActionSave.click();
    await this.SKUFinalSave.click();
    await this.page.waitForTimeout(1000);
    await this.REQQTY.type(QTY);
    await this.page.waitForTimeout(2000);
    await this.Remark.fill(remark);
    await this.page.waitForTimeout(2000);
    await this.OutwardActionSave.click();
    await this.page.waitForTimeout(4000);
    await this.OutwardFinalSave.click();


  }

  async AllocationPlan(){
    await this.selectSOorder.check();
    await this.page.waitForTimeout(2000);
    await this.AllocationPlanBtn.click();
    await this.page.waitForTimeout(2000);
    await this.CreateBatchBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async picking(){
    await this.Pickingdot.click();
    await this.page.waitForTimeout(2000);
    await this.SavepickingBtn.click();
  }

  async QualityCheck(AcceQTY, Reason){
    await this.pickingsection.click();
    await this.page.waitForTimeout(2000);
    await this.QualityCheckOrderdot.click();
    await this.page.waitForTimeout(1000);
    await this.QualityCheckOrderdot2.click();
    await this.QCSKUsearch.click();
    await this.QCSKUAction.click();
    //await this.QCAcceptQTY.fill(AcceQTY);
    await this.page.waitForTimeout(1000);
    await this.QCReasoncode.selectOption(Reason);
    await this.QCActionSave.click();
    await this.page.waitForTimeout(2000);
    await this.QCFinalsave.click();


  }

  async Packing(PackingQTY, NumberP, width , Height, Length, Weight ,Notes){

    await this.QualityChecksection.click();
    await this.page.waitForTimeout(2000);
    await this.Packingdot.click();
    await this.Packingdot2.click();
    await this.PackingLOCSearch.click();
    await this.PackingLOCActionSave.click();
    await this.page.waitForTimeout(1000);
    await this.Cartonsearch.click();
    await this.CartonSelect.click();
    await this.page.waitForTimeout(1000);
    await this.PackingSKUsearch.click();
    await this.PackingSKUselect.click();
    await this.page.waitForTimeout(1000);
    await this.PackingQTY.fill(PackingQTY);
    await this.PNumberofPackage.fill(NumberP);
    await this.Pwidth.fill(width);
    await this.PHeight.fill(Height);
    await this.PLength.fill(Length);
    await this.PWeight.fill(Weight);
    await this.PNotes.fill(Notes);
    await this.PActionSave.click();
    await this.page.waitForTimeout(4000);
    await this.PFinalSave.click();
  }

  async Dispatch(LR, VecNO){
   await this.Packingsection.click();
   await this.Dispatchdot.click();
   await this.Dispatchdot2.click();
   await this.LRno.fill(LR);
   await this.page.waitForTimeout(1000);
   await this.VechileNo.fill(VecNO);
   await this.page.waitForTimeout(1000);
   await this.DispatchSave.click();
   await this.page.waitForTimeout(2000);
   await this.Dispatchsection.click();
   await this.page.waitForTimeout(2000);

  }

  async Inventory (InvenSKU){
    await this.InventoryMenu.click();
    await this.Inventorysearch.fill(InvenSKU);
    await this.InventorysearchBtn.click();
    await this.InventoryAvailable.click();
    await this.page.waitForTimeout(2000);
    await this.page
  }

};