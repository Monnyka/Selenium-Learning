const { openWebsite } = require('./1. Register/index2.js/index.js')
const fs = require('fs');
const { Builder, By, Key, util } = require('selenium-webdriver')
const driver = new Builder().forBrowser("chrome").build();

async function accessAdmin() {
    try {
        await driver.get(URL = 'https://google.com/khmer')
        // await driver.findElement(By.xpath('//input[@formcontrolname="email"]')).sendKeys('pathmazing', Key.ENTER)
        // await driver.findElement(By.css(".white-text")).click();
        // await driver.findElement(By.xpath("//input[@formcontrolname='email']")).sendKeys("qa.org@pathmazing.com");
        // await driver.findElement(By.css(".login-btn")).click();
        

        //Take Screen Shot
        await driver.takeScreenshot().then(function (data) {
            var base64Data = data.replace(/^data:image\/png;base64,/, "")
            fs.writeFile("Testcase 1 out.png", base64Data, 'base64', function (err) {
                if (err) console.log(err);
            });
            });

        await driver.close();
    } catch (error) {
        console.log(error);
    }
}

accessAdmin();
