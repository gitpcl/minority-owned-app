const express = require("express")
const server = express()
const mongoose = require("mongoose")
const Places = require('./database/dbmodel')

// // Retrieve database
// const db = require("./database/db.js")

// Mongoose DB Config
mongoose.connect('mongodb+srv://hmosuperadmin:GPyaumW9JmGvAhl2@cluster0.erl3f.mongodb.net/hmoDB?retryWrites=true&w=majority', {

    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.once('open', () => console.log('DB is connected'))

// Configure public pasta
server.use(express.static("public"))

// enable re.body in the appliation
server.use(express.urlencoded({extended: true}))

// Utilizing template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configure paths for my application
// initial page
// req: requisition
// res: answer
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

    // // req.query: they are the query strings from the url
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: body of the form
    // console.log(req.query)

    // input data into the database
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
    //         women,
    //         type,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    // `
    // const values = [
    //     req.body.image,
    //     req.body.name,
    //     req.body.address,
    //     req.body.address2,
    //     req.body.city,
    //     req.body.state,
    //     req.body.cep,
    //     req.body.site,
    //     req.body.email,
    //     req.body.phone,
    //     req.body.social,
    //     req.body.women,
    //     req.body.type,
    //     req.body.items
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         console.log(err)
    //         return res.send("Registration failed!")
            
    //     }

    //     console.log("Successful Registration :D")
    //     console.log(this)

    //     return res.render("create-point.html", { saved: true})
    // }

    // db.run(query, values, afterInsertData)

    const dbPlace = req.body
    Places.create(dbPlace, (err, data) => {
        if(err) {
            // res.status(500).send(err)
            console.log(err)
        } else { 
            // res.status(201).send(data)

            return res.render("index.html")
        }
    })

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // empty search
        return res.render("search-results.html", { total: 0 })
    }

    // Get data from database
    // insert WHERE cep LIKE between places '%${search}%
    db.all(`SELECT * FROM places WHERE cep LIKE '%${search}%' OR type LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
            }

            const total = rows.length

            // show the html page with the data from the database
            return res.render("search-results.html", { places: rows, total })
    })

})

server.get("/partners", (req, res) => {

    // // req.query: they are the query strings from the url
    // console.log(req.query)

    return res.render("partners.html")
})

server.get("/terms-conditions", (req, res) => {

    // // req.query: they are the query strings from the url
    // console.log(req.query)

    return res.render("terms-conditions.html")
})

server.get("/privacy-policy", (req, res) => {

    // // req.query: they are the query strings from the url
    // console.log(req.query)

    return res.render("privacy-policy.html")
})

// Turn on server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`App server listening on PORT: ${PORT}`)
})
