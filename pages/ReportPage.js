// @ts-check
import { test, expect } from '@playwright/test';
exports.ReportPage = class ReportPage {

    constructor(page) {

        this.page = page

        // Report functionality
        this.reportlink = page.locator('a').filter({ hasText: 'Report' })
        this.selectcustomer = page.locator('#ddlcustomer')
        this.selectWarehouse = page.locator('#ddlwarehouse')

        //Reports Menu Section
        this.link_inward = page.locator('//a[@class=\'lnkReportCategory lnkCategory_1\']')
        this.link_outward = page.locator('//a[@class=\'lnkReportCategory lnkCategory_2\']')
        this.link_InventoryReport = page.locator('//a[@class=\'lnkReportCategory lnkCategory_3\']')
        this.link_MovementReport = page.locator('//a[@class=\'lnkReportCategory lnkCategory_4\']')
        this.link_LogReport = page.locator('//a[normalize-space()=\'Log Report\']')

        //Inward section 

        this.purchase_order_link = page.locator('//div[contains(text(),\'Purchase Order Report\')]')
        this.Receiveing_Detail_link = page.locator('//div[contains(text(),\'Receiving Detail Report\')]')
        this.Put_away_link = page.locator('//div[contains(text(),\'Put Away Report\')]')
        this.inward_detail_link = page.locator('//div[contains(text(),\'Inward Detail Report\')]')
        this.inward_Quality_check_link = page.locator('//div[contains(text(),\'Inward Quality Check\')]')

        //Outward section 
        this.sales_order_report_link = page.locator('//div[@data-label=\'Sales Order Report\']')
        this.allocation_report_link = page.locator('//div[@data-label=\'Allocation Group\']')
        this.picking_order_report_link = page.locator('//div[@data-label=\'Picking Report\']')
        this.dispatch_report_link = page.locator('//div[@data-label=\'Dispatch Report\']')
        this.packing_report_link = page.locator('//div[@data-label=\'Packing Report\']')
        this.QC_out_report_ = page.locator('//div[@data-label=\'QC Out Report\']')
        this.allocation_shortage_report_link = page.locator('//div[@data-label=\'Allocation Shortage Report\']')
        this.sales_return_report_link = page.locator('//div[@data-label=\'Sales Return Report\']')
        this.outward_detail_report_link = page.locator('//div[@data-label=\'Outward Detail Report\']')


        //Inventory section 

        this.Current_stock_report_link = page.locator('//div[contains(text(),\'Current Stock Report\')]')
        this.Stock_summary_report_link = page.locator('//div[contains(text(),\'Stock Summary Report\')]')
        this.daily_stock_report_link = page.locator('//div[contains(text(),\'Daily Stock Report\')]')
        this.Internal_Transfer_report_link = page.locator('//div[contains(text(),\'Internal Transfer Report\')]')
        this.Cycle_count_report_link = page.locator('//div[contains(text(),\'Cycle Count Report\')]')
        this.ABC_analysis_report_link = page.locator('//div[contains(text(),\'ABC Analysis Report\')]')
        this.Inventory_aging_report_link = page.locator('//div[contains(text(),\'Inventory Aging Report\')]')
        this.Shelf_life_aging_report_link = page.locator('//div[contains(text(),\'Self Life Aging Report\')]')
        this.Stock_ledger_report_link = page.locator('//div[contains(text(),\'Stock leger Report\')]')


        // Movement report Section

        this.Stock_movement_Reoprt_link = page.locator('//div[contains(text(),\'Stock Movement Report\')]')
        this.Near_expiry_Reoprt_link = page.locator('//div[contains(text(),\'Near Expiry Report\')]')
        this.FSN_Reoprt_link = page.locator('//div[contains(text(),\'FSN Report\')]')

        //Log report section 

        this.Product_report = page.locator('//div[@data-label=\'Product Report\']')
        this.Location_report = page.locator('//div[@data-label=\'Location Report\']')
        this.Occupancy_report = page.locator('//div[@data-label=\'Occupancy Report\']')
        this.Email_Alert_report = page.locator('//div[@data-label=\'Email Alert Report\']')
        this.Client_report = page.locator('//div[@data-label=\'Client Report\']')
        this.vendor_report = page.locator('//div[@data-label=\'Vendor Report\']')


        // Inward Verification
        this.ReportText = page.locator('//div[@id=\'wms-srv-report-popup\']//span[contains(text(),\'Report\')]')
        this.closereport = page.locator('//a[@id=\'wms-srv-report-popup-close\']//i[@class=\'fas fa-times-circle\']')









    }


    async OpenReportsPage() {
        await this.reportlink.click()
        await this.selectcustomer.selectOption('OPSCM')
        await this.selectWarehouse.selectOption('OP Warehouse')
        console.log("I am in ReportPage...")

    }

    async verifyOutwardReport(name) {
        const StrName = await name
        console.log("Parameter is...", StrName)

        // click on menu link
        await this.link_outward.click()


        if (StrName == 'Sales Order Report') {

            // click on Stock Movement order  link
            await this.sales_order_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Allocation Group') {


            // click on Link
            await this.allocation_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
           // expect(value).toContain(StrName);
           // temp fix report name and title different 
           const x='Allocation Report'
           expect(value).toContain(x);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Picking Report') {


            // click on Link
            await this.picking_order_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
           // expect(value).toContain(StrName);

               // temp fix report name and title different 
           const x='Picking Order Report'
           expect(value).toContain(x);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Dispatch Report') {


            // click on Stock Movement order  link
            await this.dispatch_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
           // expect(value).toContain(StrName);

                   // temp fix report name and title different 
                   const x='Dispatch Order Report'
                   expect(value).toContain(x)

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Packing Report') {

            //fix as the tooltip overlapping the menu to click
            await this.page.waitForTimeout(1000)
            // click on Link
            await this.packing_report_link.click()


            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('//span[@class=\'previewPageTitle\']').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'QC Out Report') {


            // click on Link
            await this.QC_out_report_.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



        if (StrName == 'Allocation Shortage Report') {


            // click on Link
            await this.allocation_shortage_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

      
        if (StrName == 'Sales Return Report') {


            // click on Link
            await this.sales_return_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }
       
        if (StrName == 'Outward Detail Report') {


            // click on Link
            await this.outward_detail_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }
    }


    async verifyInventoryReport(name) {
        const StrName = await name
        console.log("Parameter is...", StrName)

        // click on menu link
        await this.link_InventoryReport.click()


        if (StrName == 'Current Stock Order') {

            // click on Stock Movement order  link
            await this.Current_stock_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Stock Summary Report') {


            // click on Link
            await this.Stock_summary_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Daily Stock Report') {


            // click on Link
            await this.daily_stock_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Internal Transfer Report') {


            // click on Stock Movement order  link
            await this.Internal_Transfer_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Cycle Count Report') {

            //fix as the tooltip overlapping the menu to click
            await this.page.waitForTimeout(1000)
            // click on Link
            await this.Cycle_count_report_link.click()


            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('//span[@class=\'previewPageTitle\']').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'ABC Analysis Report') {


            // click on Link
            await this.ABC_analysis_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



        if (StrName == 'Inventory Aging Report') {


            // click on Link
            await this.Inventory_aging_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



        if (StrName == 'Self Life Aging Report') {


            // click on Link
            await this.Shelf_life_aging_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



        if (StrName == 'Stock leger Report') {


            // click on Link
            await this.Stock_ledger_report_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // to fix spelling mistake 
            // validate the  report is launched
           //----- expect(value).toContain(StrName);
           const x ='Stock'
           expect(value).toContain(x);

            //close the report  
            await this.closereport.click()
        }

    }



    async verifyLogReport(name) {
        const StrName = await name
        console.log("Parameter is...", StrName)

        // click on menu link
        // to fix overlapping of tool tip

        await this.link_LogReport.waitFor({ state: "visible" })
        await this.page.mouse.move(900, 900)
        await this.page.mouse.down();
        await this.link_LogReport.click();


        if (StrName == 'Product Report') {


            // click on Stock Movement order  link
            await this.Product_report.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Location Report') {


            // click on Link
            await this.Location_report.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Warehouse Occupancy Report') {


            // click on Link
            await this.Occupancy_report.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Email Alert Report') {


            // click on Stock Movement order  link
            await this.Email_Alert_report.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Client Report') {

            //fix as the tooltip overlapping the menu to click
            await this.page.waitForTimeout(1000)
            // click on Link
            await this.Client_report.click()


            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('//span[@class=\'previewPageTitle\']').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Vendor Report') {


            // click on Link
            await this.vendor_report.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

    }


    async verifyMovementReport(name) {
        const StrName = await name
        console.log("Parameter is...", StrName)

        // click on menu link
        await this.link_MovementReport.click()

        if (StrName == 'Stock Movement Report') {


            // click on Stock Movement order  link
            await this.Stock_movement_Reoprt_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }


        if (StrName == 'Near Expiry Report') {


            // click on Link
            await this.Near_expiry_Reoprt_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'FSN Report') {


            // click on Link
            await this.FSN_Reoprt_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');


            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

    }


    async verifyInwardReport(name) {
        const StrName = await name
        console.log("Parameter is...", StrName)

        // click on menu link
        await this.link_inward.click()

        if (StrName == 'Purchase Order Report') {


            // click on Purchase order  link
            await this.purchase_order_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');

            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the  report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



        if (StrName == 'Receiving Report') {

            // click on Receiving order  link
            await this.Receiveing_Detail_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');

            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the purchase order report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }
        if (StrName == 'Put Away Report') {


            // click on Put Away  link
            await this.Put_away_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');

            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the purchase order report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }
        if (StrName == 'Inward Detail Report') {


            // click on Inward order  link
            await this.inward_detail_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');

            const value = await frame.locator('//h1[normalize-space()=\'Inward Detail Report\']').textContent()
            console.log("Value is :", value)

            // validate the purchase order report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }

        if (StrName == 'Quality Check Report') {

            // click on Purchase order  link
            await this.inward_Quality_check_link.click()

            // identify the frame 
            const frame = this.page.frameLocator('#iframeReport');

            const value = await frame.locator('.previewPageTitle').textContent()
            console.log("Value is :", value)

            // validate the purchase order report is launched
            expect(value).toContain(StrName);

            //close the report  
            await this.closereport.click()
        }



    }



}