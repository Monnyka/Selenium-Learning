const fs = require('fs');
const { Builder, By, Key } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

//const proxy = require("selenium-webdriver/proxy")
//const proxyServer = "190.152.0.130:55870";
//const options =new firefox.Options();
var userData = { name: 'Leon', password: '123123123', email: 'sampleemailUser@gmail.com' };

// options.setPreference("browser.download.dir","C:\\Users\\PathmazingPC\\Desktop\\Selenium\\Download CSV");
// options.setPreference("browser.download.folderList",2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk","text/csv");

const driver = new Builder()
    .forBrowser("firefox")
    //.setFirefoxOptions(options)
    //.setProxy(proxy.manual({http:proxyServer,https: proxyServer}))  
    .build();

async function openWebsite() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.id("email")).sendKeys("smaeple@gmail");
        await driver.findElement(By.id("password")).sendKeys(userData.password);
        await driver.findElement(By.id("submit")).click();

        var titleMessageError = await driver.findElement(By.xpath("//p[contains(.,'Please provide a valid email!')]")).getText();
        if (titleMessageError == "Please provide a valid email!") {
            takeScreenshot();
        }

    } catch (error) {
        console.log(error);
    }
}
openWebsite();

async function takeScreenshot(){
    
    await driver.takeScreenshot().then(function (data) {
        var base64Data = data.replace(/^data:image\/png;base64,/, "")
        fs.writeFile("Screenshot.png", base64Data, 'base64', function (err) {
            if (err) console.log(err);
        });
        });
}