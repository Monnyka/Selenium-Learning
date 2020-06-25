const fs = require('fs');
const { Builder, By, Key } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const Excel = require('exceljs');


//const proxy = require("selenium-webdriver/proxy")
//const proxyServer = "190.152.0.130:55870";
//const options =new firefox.Options();
var userData = {
    name: 'Leon',
    password: '123123123',
    email: 'sampleemailUser@gmail.com'
};
var status = 'False'

// options.setPreference("browser.download.dir","C:\\Users\\PathmazingPC\\Desktop\\Selenium\\Download CSV");
// options.setPreference("browser.download.folderList",2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk","text/csv");

const driver = new Builder().forBrowser("firefox").build();
//.setFirefoxOptions(options)
//.setProxy(proxy.manual({http:proxyServer,https: proxyServer}))  

async function openWebsite() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.id("email")).sendKeys("smaeple@gmail");
        await driver.findElement(By.id("password")).sendKeys(userData.password);
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        console.log(error);
    }
    var titleMessageError = await driver.findElement(By.xpath("//p[contains(.,'Please provide a valid email!')]")).getText();
    if (titleMessageError == "Please provide a valid email!") {
        await takeScreenshot();
        await writeExcelFile(2, 3, 'Passed');
        await driver.navigate().refresh();
    }
}

async function takeScreenshot() {
    await driver.takeScreenshot().then(function (data) {
        var base64Data = data.replace(/^data:image\/png;base64,/, "")
        fs.writeFile("Screenshot.png", base64Data, 'base64', function (err) {
            if (err) console.log(err);
        });
    });
}

async function writeExcelFile(rowCase, colomnCase, status) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile("Data/Export_data.xlsx").then(function () {
        var woorksheet = workbook.getWorksheet("Test Data");
        if (status == "Passed") {
            woorksheet.getRow(rowCase).getCell(colomnCase).value = status;
            workbook.xlsx.writeFile("Data/Export_data.xlsx");
        }
        else {
            woorksheet.getRow(rowCase).getCell(colomnCase).value = status;
            workbook.xlsx.writeFile("Data/Export_data.xlsx");
        }
    })


    
    
    
    













}
openWebsite();
