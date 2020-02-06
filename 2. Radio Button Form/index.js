const {Builder, By, Key} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const driver = new Builder()
.forBrowser("firefox")
// .setFirefoxOptions(options)
.build();

async function radioButtonRegister(){
    try {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        (await driver).findElement(By.css("#title")).sendKeys("P-ShirtP-ShirtP-ShirtP-ShirtP-ShirtP-ShirtP-Shirt");
        (await driver).findElement(By.css('#description')).sendKeys("Create public event from webCreate public event from webCreate public event from web");
        (await driver).findElement(By.css('div:nth-child(1) > label > span.custom-control-indicator')).click();
        (await driver).findElement(By.css('#submit')).click();
    
    } catch (error) {
        Console.log(error);
    }
}
radioButtonRegister();