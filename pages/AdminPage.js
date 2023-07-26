// @ts-check
exports.AdminPage = class AdminPage {

    constructor(page) {

        this.page = page
        // Menu Link
        this.administrator_Menu_link = page.locator('a').filter({ hasText: 'Administrator' })
        // Masters
        this.user_master_link = page.locator('//a[normalize-space()=\'User Master\']')
        this.customer_master_link = page.locator('//a[normalize-space()=\'Customer Master\']')
        this.warehouse_master_link = page.locator('//a[normalize-space()=\'Warehouse Master\']')
        this.SKU_master_link = page.locator('//a[normalize-space()=\'SKU Master\']')
        this.vendor_master_link = page.locator('//a[normalize-space()=\'Vendor Master\']')
        this.Client_master_link = page.locator('//a[normalize-space()=\'Client Master\']')
        this.Company_master_link = page.locator('//a[normalize-space()=\'Company Master\']')
        this.home_master_link = page.locator('//a[@onclick="wmsNavigatePage(\'Dashboard\');"]')
        // Tools & Utilities
        this.Import_designer_link = page.locator('//a[normalize-space()=\'Import Designer\']')
        this.Query_Builder_link = page.locator('//a[normalize-space()=\'Query Builder\']')
        this.Barcode_configuration_link = page.locator('//a[normalize-space()=\'Barcode Configuration\']')
        this.Business_Rule_link = page.locator('//a[normalize-space()=\'Business Rule\']')
        this.Third_party_Configuration_link = page.locator('//a[normalize-space()=\'Third Party Configuration\']')
        this.Email_setup_link = page.locator('//a[normalize-space()=\'Email Setup\']')
        this.RFID_Tagging_link = page.locator('//a[normalize-space()=\'RFID Tagging\']')
        // this.Cycle_Count_link = page.locator('//a[normalize-space()=\'Cycle Count\']')
        this.Cycle_Count_link_one = page.locator('a[onclick="loadAdminPages(\'pnlCycleCount\');"]')
        // Printables
        this.Report_Setup_link = page.locator('//a[normalize-space()=\'Report Setup\']')

        //Verification links -Master
        this.Customer_List_title = page.locator('//div[normalize-space()=\'Customer List\']')
        this.User_List_title = page.locator('//div[normalize-space()=\'User List\']')
        this.Warehouse_List_title = page.locator('//div[normalize-space()=\'Warehouse List\']')
        this.SKU_List_title = page.locator('//div[normalize-space()=\'SKU List\']')
        this.Vendor_information_List_title = page.locator('//div[normalize-space()=\'Vendor Information List\']')
        this.Client_List_title = page.locator('//div[normalize-space()=\Client List\']')
        this.Company_List_title = page.locator('//div[normalize-space()=\'Company List\']')
        //Verification links Tools  & Utilities

        this.Import_designer_List_title = page.locator('//div[normalize-space()=\'Import Designer List\']')
        this.My_query_list_title = page.locator('//span[normalize-space()=\'My Query List\']')
        this.Barcode_Format_setup_title = page.locator('//div[@class=\'wms-srv-grid-holder\']//div[@class=\'wms-srv-grid-title\'][normalize-space()=\'Barcode Format Setup\']')
        this.Business_Rule_list_title = page.locator('//div[normalize-space()=\'Business Rule List\']')
        this.Brilliantwms_API_List_title = page.locator('//div[normalize-space()=\'BrilliantWMS API List\']')
        this.Email_setup_title = page.locator('//span[normalize-space()=\'Email Notification Setup\']')
        this.RFID_Tagging_Code_list = page.locator('.wms-srv-grid-title')
        this.Cycle_Count_link = page.locator('//div[@class=\'wms-srv-grid-title\'][normalize-space()=\'Cycle Count List\']')

        this.Report_setup_list = page.locator('.wms-srv-grid-title')



    }


    async OpenAdminPage() {

        await this.administrator_Menu_link.click()

    }


    async VerifyUserMaster() {
        await this.user_master_link.click()
        // to fix overlapping of Tool TIP
        await this.page.mouse.move(900, 900)
        await this.page.mouse.down();

        //Functionality Here

        await this.home_master_link.click()


    }

    async VerifyCustomerMaster() {
        await this.customer_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifyWarehouseMaster() {
        await this.warehouse_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifySKUMaster() {
        await this.SKU_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifyVendorMaster() {
        await this.vendor_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifyClientMaster() {
        await this.Client_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifyCompanyMaster() {
        await this.Company_master_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

    async VerifyImportDesigner() {
        await this.Import_designer_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyQueryBuilder() {
        await this.Query_Builder_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyBarcodeConf() {
        await this.Barcode_configuration_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyBusinessRules() {
        await this.Business_Rule_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyThirdpartyConf() {
        await this.Third_party_Configuration_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyEmailSetUp() {
        await this.Email_setup_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyRFIDTagging() {
        await this.RFID_Tagging_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyCycleCount() {
        await this.Cycle_Count_link_one.click()

        //Functionality Here

        await this.home_master_link.click()
    }


    async VerifyReportSetup() {
        await this.Report_Setup_link.click()

        //Functionality Here

        await this.home_master_link.click()
    }

}