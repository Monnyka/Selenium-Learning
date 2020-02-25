const Excel = require('exceljs');

async function writeExcel(){
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Test Data");

    worksheet.columns = [
        {header: 'Testcase ID', key: 'id', width: 12},
        {header: 'Testcase Scenario', key: 'testcase', width: 60}, 
        {header: 'Pass/Fail', key: 'success', width: 15,}
       ];
    
       //worksheet.addRow({id: 1, name: "Testcase: Log in to the web admin", dob: new Date(1970, 1, 1)});
       worksheet.addRow({id: 1, testcase: "Testcase: Log in to the web admin", success: "Passed"});

       //Save file and data
       await workbook.xlsx.writeFile('Data/Export_data.xlsx');
       console.log("Successfully exported the data to excel file.");

       
       //Read Data From Excel File
       workbook.xlsx.readFile("Data/Export_data.xlsx")
    .then(function() {
        var worksheet = workbook.getWorksheet('Test Data');
        var cell = worksheet.getCell('B2').value;
        console.log(cell);
    });

}

writeExcel();