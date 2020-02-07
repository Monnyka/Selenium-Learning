const {Builder, By, Key} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const driver = new Builder()
.forBrowser("firefox")
// .setFirefoxOptions(options)
.build();

async function radioButtonRegister(){
    try {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0);
        await (await driver).findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Leon");

    } catch (error) {
        Console.log(error);
    }
}
radioButtonRegister();