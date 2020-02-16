const { Builder, By } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function dataTable() {
    let results = [];
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/tables/smart-table");

        let numberofPages = 6;
        for (let i = 0; i < numberofPages; i++) {
            let rows = await driver.findElements(By.xpath("//tbody//tr"));
            for (const row of rows) {
                let rowData = await row.getText();
                let user = rowData.split(/\n/);
                results.push({
                    id: user[0],
                    firstname: user[1],
                    lastname: user[2],
                    username: user[3],
                    email: user[4],
                    age: user[5]
                });
            }

            if (i !== numberofPages - 1) {
                await driver.findElement(By.css(".page-link-next")).click();
            }

        }
        console.table(results);
    } catch (error) {
        console.log(error);
    }
}
dataTable();