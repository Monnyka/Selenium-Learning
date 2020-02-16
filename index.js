<<<<<<< HEAD
const {Builder, By, Key, util}= require('selenium-webdriver')
const driver = new Builder().forBrowser("chrome").build();
=======
const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
>>>>>>> c16839f77a97c7a77c630cd7bb4c6259c42320fd

const driver = new Builder()
.forBrowser("chrome")
// .setFirefoxOptions(options)
.build();

 async function accessAdmin(){
    await driver.manage().window().maximize();
    await driver.manage().deleteAllCookies();
    await driver.get(URL='https://google.com/')
    await driver.findElement(By.className('gLFyf gsfi')).sendKeys('pathmazing', Key.ENTER)
}
accessAdmin();