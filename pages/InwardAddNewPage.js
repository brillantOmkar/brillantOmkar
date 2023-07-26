exports.InwardAddNewPage = class InwardAddNewPage {

    constructor(page) {

        this.page = page
        this.custFilter = page.locator('#ddlcustomer');
        this.whFilter = page.locator('#ddlwarehouse');
        this.inwardMenu = page.locator('a[onclick="wmsNavigatePage(\'Inward\');"]'); 
        
        this.inwardAddNewBtn = page.locator('//div[@class=\'wms-srv-grid-holder\']//span[contains(text(),\'Add New\')]');
        this.inwardRefNo = page.locator('//div[@id=\'wms-srv-order-popup\']//input[@id=\'txtPoCustomerRefNo\']');
        this.inwardVendorSelect = page.locator('a[onclick="openVendorListPopup();return false;"]');
        this.inwardVendor = page.locator('a[onclick="addToVendorField(85, \'Dummy Vendor\');return false;"]');
        this.inwardSKUSelect = page.locator('i[onclick="openPurchaseProductListPopup()"]');
        this.inwardSKUSearch = page.locator('#txtSo_ProdSearchpopup');
        this.inwardSKUSearchBtn = page.locator('a[onclick="openPurchaseProductListPopup();return false;"]');
        this.inwardSKUSearchSelect = page.locator('//a[@class=\'wms-srv-icononly btnAddToProductListField\']');
        this.inwardRequestQty = page.locator('//div[@id=\'tlbPoOrderDetailsGrid\']//input[@id=\'addNew_RequestedQty\']');
        this.POExpiryDate = page.locator('//input[@placeholder="Lottable-1"]');
        this.POBatchNo = page.locator('//input[@placeholder="Lottable-2"]');
        this.POSaveSKU = page.locator('button[onclick="savePODetails();"]');
        this.POOrderNo =page.locator('//div[@id=\'wms-srv-order-popup\']//span[@id=\'spnPoOid\']');
        this.POorderDate = page.locator('//div[@id=\'wms-srv-order-popup\']//input[@id=\'txtPoReceiptDate\']')
        this.POFinalSave = page.locator('#btnPOSave');
    }


    async inward(){
        await this.inwardMenu.click();
        await this.whFilter.selectOption('Logistech');
        await this.page.waitForTimeout(5000);
    }

    async inwardPOAddNew(){
        
        await this.inwardAddNewBtn.click();
        await this.inwardRefNo.fill('PO1707_3MOB')
        await this.inwardVendorSelect.click();
        await this.inwardVendor.click();
        await this.inwardSKUSelect.click();
        await this.inwardSKUSearch.fill('L1');
        await this.inwardSKUSearchBtn.click();
        await this.page.waitForTimeout(2000);
        await this.inwardSKUSearchSelect.click();
        await this.inwardRequestQty.fill('100');
        await this.POExpiryDate.fill('25/05/2025');
        await this.POBatchNo.fill('122');
        await this.POSaveSKU.click();
      //  await this.POFinalSave.click();


    }

}