const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const driver = new Builder()
.forBrowser("chrome")
.build();

async function fileUploadForm(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath(`//input[@formcontrolname='file']`)).sendKeys(__dirname+"\\example.jpg");
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        Console.log(error);
    }
}
fileUploadForm();