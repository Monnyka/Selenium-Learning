const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser("chrome").build();

async function radioButtonRegister(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElements(By.css("#title")).sendKeys("dasd")
        await driver.findElement(By.css('#description')).sendKeys("Create public event from webCreate public event from webCreate public event from web");
        await driver.findElement(By.css('div:nth-child(1) > label > span.custom-control-indicator')).click();
        
    } catch (error) {
        console.log(error);
    }
}
radioButtonRegister();