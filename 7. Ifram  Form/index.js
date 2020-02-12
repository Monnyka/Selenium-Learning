const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const driver = new Builder()
.forBrowser("chrome")
// .setFirefoxOptions(options)
.build();

async function iframeForm(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.manage().deleteAllCookies();
        await driver.switchTo().frame(0);
        await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Leon");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(
            Key.chord(
              Key.ARROW_DOWN,
              Key.ARROW_DOWN,
              Key.ARROW_DOWN,
              Key.ARROW_DOWN,
            )
          ).perform();
          await driver.actions().sendKeys(Key.TAB, ).perform();
          await driver.actions().sendKeys(Key.TAB, ).perform();

          //Drop down
          await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
          await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
          await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
          await driver.actions().sendKeys(Key.SPACE).perform();
          await driver.actions().sendKeys(Key.SPACE).perform();
          await driver.actions().sendKeys(Key.TAB).perform();
          await driver.actions().sendKeys(Key.chord("02", "20", "2020")).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB, "This is my secret answer")).perform();
         // await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
                
    } catch (error) {
        Console.log(error);
    }
}
iframeForm();