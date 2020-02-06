const {Builder, By, Key} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

//const proxy = require("selenium-webdriver/proxy")
//const proxyServer = "190.152.0.130:55870";
const options =new firefox.Options();

// options.setPreference("browser.download.dir","C:\\Users\\PathmazingPC\\Desktop\\Selenium\\Download CSV");
// options.setPreference("browser.download.folderList",2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk","text/csv");

const driver = new Builder()
.forBrowser("firefox")
.setFirefoxOptions(options)
//.setProxy(proxy.manual({http:proxyServer,https: proxyServer}))  
.build();

async function openWebsite(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.id("email")).sendKeys("sampleemail@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("123456");
        await driver.findElement(By.id("submit")).click();

    } catch (error) {
        Console.log(error);
    }
}
openWebsite()