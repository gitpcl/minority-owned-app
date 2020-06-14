// Import the dependency for sqlite3
const sqlite3 = require("sqlite3").verbose()

// Create the object that will execute operations in the database
const db = new sqlite3.Database("src/database/database.db")

// Export Object db
module.exports = db

//Utilize the database object for our operations
// db.serialize(() => {

    // // With SQL commands:
    // // 1. Criate a table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         city TEXT,
    //         state TEXT,
    //         cep TEXT,
    //         site TEXT,
    //         email TEXT,
    //         phone TEXT,
    //         social TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2. Insert data in the table
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         city,
    //         state,
    //         cep,
    //         site,
    //         email,
    //         phone,
    //         social,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "http://burgerco.com.br/wp-content/uploads/2013/07/IMG_8229-588x392.jpg",
    //     "Ate Kitchen",
    //     "Times Blvd.",
    //     "2445",
    //     "Houston",
    //     "Texas",
    //     "77005",
    //     "http://www.bocagecatering.com/",
    //     "",
    //     "346-804-7208",
    //     "ate_boutique_kitchen",
    //     "Black Americans (African Decent)"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // // 3. Check data in the table
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estao os seus registros: ")
    //     console.log(rows)
    // })

    // 4. Delete data from the table
    // if remove WHERE id = ? it removes everything
    // db.run(`DELETE FROM places WHERE id = ?`, [25], function(err) { 
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")

    // }) 

    // 5. Check if data was deleted
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estao os seus registros: ")
    //     console.log(rows)
    // })

// })