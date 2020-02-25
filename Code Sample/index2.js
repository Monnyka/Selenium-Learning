const { openWebsite } = require('./1. Register/index.js/index.js')
const fs = require('fs');
const { Builder, By, Key, util } = require('selenium-webdriver')
const driver = new Builder().forBrowser("chrome").build();

driver.manage().window().maximize();
//driver.manage().window().setPosition(0,3000);

async function accessAdmin() {
    try {
        await driver.get('https://google.com')
        // await driver.findElement(By.xpath('//input[@formcontrolname="email"]')).sendKeys('pathmazing', Key.ENTER)
        // await driver.findElement(By.css(".white-text")).click();
        // await driver.findElement(By.xpath("//input[@formcontrolname='email']")).sendKeys("qa.org@pathmazing.com");
        // await driver.findElement(By.css(".login-btn")).click();
        
        //Take Screen Shot
        var filePath="\image\/"
        await driver.takeScreenshot().then(function (data) {
            var base64Data = data.replace(/^data:image\/png;base64,/, "")
            fs.writeFile(filePath+"Screenshot.png", base64Data, 'base64', function (err) {
                if (err) console.log(err);
            });
            });

    } catch (error) {
        console.log(error);
    }
}


accessAdmin();
