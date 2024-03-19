const mysql= require("mysql");

const conecta = mysql.createConnection({
 host: "localhost",
 user: "roo,",
 password: "" ,
 database: "portfolio_db"


});

conecta.connect((err) => {
    if(err) {

       console.log(`Erro ao conectar ao banco: ${err}`)

    }

    console.log('conectado ao banco !');



})

module.exports = conecta;

