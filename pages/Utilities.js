// @ts-check
import fs from 'fs'

exports.Utilities = class Utilities {

    constructor(page) {

        this.page = page
        this.jsonData = ''


    }
    async getdata() {

        const filename = 'testdata.json'
        const folder = 'D:\\EasyWMS\\test-data\\'

        const filePath = folder.concat(filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        this.jsonData = JSON.parse(fileContents);
        // console.log(this.jsonData)

        console.log("1",this.jsonData['username']);
        console.log("1",this.jsonData['password']);
        console.log("1",this.jsonData['username1']);
        console.log("1",this.jsonData['password1']);
        console.log("1",this.jsonData['testId']);
        console.log("1",this.jsonData['Myname']);

        return( this.jsonData)


    }
}
