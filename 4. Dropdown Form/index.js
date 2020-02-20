const {Builder, By, Key} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

async function dropdownForm(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        //One
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
        //Two
       await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="3: 'audi'"]`)).click();
       await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
    
       //three
       await driver.findElement(By.xpath(`//nb-select[@formcontrolname='select3']/button`)).click();
       await driver.findElement(By.xpath("//nb-option[@value='3']")).click();

       //four
       await driver.findElement(By.xpath(`//select[@formcontrolname='select4']/option[@value="volvo"]`)).click();
    
       //Button
       await driver.findElement(By.xpath(`//button[@id="submit"]`)).click();

    

    } catch (error) {
        Console.log(error);
    }
}
dropdownForm();
