const {Builder, By, Key, util}= require('selenium-webdriver')
const driver = new Builder().forBrowser("chrome").build();

 async function accessAdmin(){
    driver.manage().window().maximize();
    driver.manage().deleteAllCookies();

    await driver.get(URL='https://google.com/')
    await driver.findElement(By.className('gLFyf gsfi')).sendKeys('pathmazing', Key.ENTER)

}

accessAdmin();