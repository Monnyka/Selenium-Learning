const {Builder, By, Key} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const driver = new Builder()
.forBrowser("firefox")
.build();

async function checkboxForm(){
    try {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
        (await driver).findElement(By.xpath("//*[@id='name']")).sendKeys("My Nameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        (await driver).findElement(By.xpath("//*[@id='comment']")).sendKeys("My Commentttttttttttttttttttt");
        (await driver).findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        (await driver).findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        Console.log(error);
    }
}
checkboxForm();