const { Builder, By, Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();


async function datepickerForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Feb 5, 2020");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Feb 5, 2020 - Feb 29, 2020");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        Console.log(error);
    }
}

datepickerForm();