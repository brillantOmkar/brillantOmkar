// @ts-check
exports.InwardPage = class InwardPage {

    constructor(page) {

        this.page = page
      
       // Inbound functionality
        this.inward_Link =page.locator('a').filter({ hasText: 'Inward' }).click();
        this.inward_order_type = page.locator('#ddlPageObject')
        this.cust_type = page.locator('#ddlcustomer');
        this.warehouse_type = page.locator('#ddlwarehouse');
        this.inwardAddNewBtn = page.getByRole('button', { name: ' Add New'})
        this.inwardRefNo = page.locator('#txtPoCustomerRefNo');
        this.inwardVendorSelect = page.locator('a[onclick="openVendorListPopup();return false;"]');
        this.inwardVendor = page.locator('a[onclick="addToVendorField(85, \'Dummy Vendor\');return false;"]');
        this.inwardSKUSelect = page.locator('i[onclick="openPurchaseProductListPopup()"]');
        this.inwardSKUSearch = page.locator('#txtSo_ProdSearchpopup');
        this.inwardSKUSearchBtn = page.locator('a[onclick="openPurchaseProductListPopup();return false;"]');
        this.inwardSKUSearchSelect = page.locator('//a[@class=\'wms-srv-icononly btnAddToProductListField\']')
        this.inwardRequestQty = page.locator('#addNew_RequestedQty');
        this.POExpiryDate = page.locator('//input[@placeholder="Lottable-1"]');
        this.POBatchNo = page.locator('//input[@placeholder="Lottable-2"]');
        this.POSaveSKU = page.locator('button[onclick="savePODetails();"]');
        this.POOrderNo =page.locator('//div[@id=\'wms-srv-order-popup\']//span[@id=\'spnPoOid\']');
        this.POorderDate = page.locator('//div[@id=\'wms-srv-order-popup\']//input[@id=\'txtPoReceiptDate\']')
        this.POFinalSave = page.locator('#btnPOSave');
    }

   
    
    async createInboundOrder(ordertype) {

        await this.page.locator('#ddlPageObject').selectOption({ index: 1 })
        
      
    }

   
}