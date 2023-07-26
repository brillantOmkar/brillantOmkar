// @ts-check

const { expect } = require("@playwright/test")

exports.LabelPrintPage = class LabelPrintPage {

    constructor(page) {

        this.page = page

        this.administrator_Menu_link = page.locator('a').filter({ hasText: 'Label' })

        this.BoxLable = page.locator('#btnLabelPrintBOX')
        this.CrateLable = page.locator('#btnLabelPrintCrate')
        this.ContainerLable = page.locator('#btnLabelPrintContainer')
        this.StorePalleteLable = page.locator('#btnLabelPrintStorePallet')
        this.cartonLable = page.locator('#btnLabelPrintCarton')
        this.ShippingPalleteLable = page.locator('#btnLabelPrintShippingPallet')
        this.LocationLable = page.locator('#btnLabelPrintLocation')
        this.SKULable = page.locator('#btnLabelPrintSku')

        // verification of POPUPs
        this.BoxTitle = page.locator('//div[contains(text(),\'BOX Label\')]')
        this.CrateTitle = page.locator('//div[contains(text(),\'Crate Label\')]')
        this.ContainerTitle = page.locator('//div[contains(text(),\'Container Label\')]')
        this.StorePalleteTitle = page.locator('//div[contains(text(),\'Store Pallet Label\')]')

        this.cartonTitle = page.locator('//div[contains(text(),\'Carton Label\')]')
        this.ShippingPalleteTitle = page.locator('//div[contains(text(),\'Shipping Pallet Label\')]')
        this.LocationTitle = page.locator('//div[contains(text(),\'Location List\')]')
        this.SKUTitle = page.locator('//div[contains(text(),\'SKU List\')]')

        // Close of POPUPs

        this.CratePOPCLOSE = page.locator('//a[@id=\'wms-srv-Crate-popup-close\']')
        this.ContainerPOPCLOSE = page.locator('//a[@id=\'wms-srv-Container-popup-close\']')
        this.StorePalletPOPCLOSE = page.locator('//a[@id=\'wms-srv-storePalletLabel-popup-close\']')
        this.cartonPOPCLOSE = page.locator('//a[@id=\'wms-srv-carton-popup-close\']')
        this.ShippingPalletPOPCLOSE = page.locator('//a[@id=\'wms-srv-shippingPalletLabel-popup-close\']')



        this.LocationPOPCLOSE = page.locator('//a[@id=\'wms-srv-location-popup-close\']')
        this.BoxPOPCLOSE = page.locator('//a[@id=\'wms-srv-BOX-popup-close\']')
        this.SKUPOPCLOSE = page.locator('//a[@id=\'wms-srv-sku-popup-close\']')

    }

    async gotoOpenLabelPage() {

        await this.administrator_Menu_link.click()


    }


    async BoxLabelPage() {

        await this.BoxLable.click()

        //Functionality Here start
        //Functionality Here  end

        const title = await this.BoxTitle.textContent()
        expect(title).toContain('BOX Label')

        await this.page.waitForTimeout(2000)
        await this.BoxPOPCLOSE.click()

    }


    async CrateLabelPage() {

        await this.CrateLable.click()
        //Functionality Here start
        //Functionality Here  end
        const title = await this.CrateTitle.textContent()
        expect(title).toContain('Crate Label')

        await this.page.waitForTimeout(2500)
        await this.CratePOPCLOSE.click()

    }



    async ContainerLabelPage() {

        await this.ContainerLable.click()

        //Functionality Here start
        //Functionality Here  end

        const title = await this.ContainerTitle.textContent()
        expect(title).toContain('Container Label')

        await this.page.waitForTimeout(2000)
        await this.ContainerPOPCLOSE.click()


    }


    async StorePalletLabelPage() {

        // to fix overlapping of Tool TIP
        await this.page.mouse.move(900, 900)
        await this.page.mouse.down();

        await this.StorePalleteLable.click()

        //Functionality Here start
        //Functionality Here  end

        const title = await this.StorePalleteTitle.textContent()
        expect(title).toContain('Store Pallet Label')
        await this.page.waitForTimeout(2000)
        await this.StorePalletPOPCLOSE.click()

    }


    async CartonLabelPage() {

        await this.cartonLable.click()
        //Functionality Here start
        //Functionality Here  end
        const title = await this.cartonTitle.textContent()
        expect(title).toContain('Carton Label')
        await this.page.waitForTimeout(2000)
        await this.cartonPOPCLOSE.click()


    }


    async ShippingPalletLabelPage() {

        await this.ShippingPalleteLable.click()
        //Functionality Here start
        //Functionality Here  end
        const title = await this.ShippingPalleteTitle.textContent()
        expect(title).toContain('Shipping Pallet Label')
        await this.page.waitForTimeout(2000)
        await this.ShippingPalletPOPCLOSE.click()

    }

    async LocationLabelPage() {

        await this.LocationLable.click()
        //Functionality Here start
        //Functionality Here  end
        const title = await this.LocationTitle.textContent()

        expect(title).toContain('Location List')
        await this.page.waitForTimeout(2000)
        await this.LocationPOPCLOSE.click()

    }


    async SKULabelPage() {

        await this.SKULable.click()
        //Functionality Here start
        //Functionality Here  end
        const title = await this.SKUTitle.textContent()
        expect(title).toContain('SKU List')
        await this.page.waitForTimeout(2000)
        await this.SKUPOPCLOSE.click()



    }



}