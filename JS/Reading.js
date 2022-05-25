const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('./Config/credenciales.json');
const { get } = require('./Config/google.routes');

var fs = require('fs');


let googleId = "1C_4PrZgSpc3kuVupTiGNriU3ZJcMr0LzSq3AOTIahmw";

async function accederGoogleSheet(){

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    await documento.loadCells('H2');
    await documento.loadCells('H3');
    await documento.loadCells('H4');
    await documento.loadCells('H5');
    await documento.loadCells('J2');
    await documento.loadCells('J3');
    await documento.loadCells('J4');
    await documento.loadCells('J5');



    const sheet = documento.sheetsByIndex[0];
    let compras = [];
    let stock = [];
    //sheet.getCell(2,8)
    //const registros = await sheet.getRows();
    compras.push(sheet.getCellByA1('H2').value);
    compras.push(sheet.getCellByA1('H3').value);
    compras.push(sheet.getCellByA1('H4').value);
    compras.push(sheet.getCellByA1('H5').value);
    stock.push(sheet.getCellByA1('J2').value);
    stock.push(sheet.getCellByA1('J3').value);
    stock.push(sheet.getCellByA1('J4').value);
    stock.push(sheet.getCellByA1('J5').value);
    /*console.log(sheet.getCellByA1('H2').value,"Pollo");
    console.log(sheet.getCellByA1('H3').value,"Pollo");
    console.log(sheet.getCellByA1('H4').value,"Pollo");
    console.log(sheet.getCellByA1('H5').value,"Pollo");
    console.log(sheet.getCellByA1('J2').value,"Pulpo");
    console.log(sheet.getCellByA1('J3').value,"Pulpo");
    console.log(sheet.getCellByA1('J4').value,"Pulpo");
    console.log(sheet.getCellByA1('J5').value,"Pulpo");*/
    //console.log(registros);
    
    console.log(compras.length);
    console.log(stock.length);

    var strong = String(compras[0]);
    var strong1 = String(compras[1]);
    var strong2 = String(compras[2]);
    var strong3 = String(compras[3]);

    /*for(let i = 0; i<4 ; i++){

    
        console.log(strong);*/
    var stream = fs.createWriteStream("./Data/compras.txt");
    stream.once('open', function(err) {
        stream.write(strong+'\n');
        stream.write(strong1+'\n');
        stream.write(strong2+'\n');
        stream.write(strong3);
        stream.end();
    });

    var strong4 = String(stock[0]);
    var strong5 = String(stock[1]);
    var strong6 = String(stock[2]);
    var strong7 = String(stock[3]);

    var stream2 = fs.createWriteStream("./Data/stock.txt");
    stream2.once('open', function(err) {
        stream2.write(strong4+'\n');
        stream2.write(strong5+'\n');
        stream2.write(strong6+'\n');
        stream2.write(strong7);
        stream2.end();

    });
        /*fs.writeFile("Values.txt", strong ,function(err){
            if (err) {
                return console.log(err);
            }
        
            console.log("Se creó el archivo");
        });*/
    }
    
    

    




accederGoogleSheet();

module.exports = {
    accederGoogleSheet: accederGoogleSheet,
}