// @ts-check
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page

        // Login functionality
        this.username_textbox = page.locator('#username')
        this.password_textbox = page.locator('#password')
        this.login_button = page.getByRole('button', { name: 'Login' })

        // Logout functionality
        this.profile_image = page.getByRole('button', { name: 'Profile' })
        this.logoutlink = page.getByRole('link', { name: 'Logout' })


    }

    async gotoLoginPage() {
        await this.page.goto('http://173.212.244.46/BWMSWebApp2.2/WMSApp.html');
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        // await this.page.locator('#ddlPageObject').selectOption({ index: 2 })

    }



    async gotologout() {
        await this.profile_image.click()
        await this.logoutlink.click()

    }


}