const express = require("express")
const server = express()
const mongoose = require("mongoose")
const Places = require('./database/dbmodel')

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

    const dbPlace = req.body
    Places.create(dbPlace, (err, data) => {
        if(err) {
            console.log(err)
        } else { 
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

    const query = { $or: [{ cep: search }, { type: search }] }

    Places.find( query, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            return res.render("search-results.html", { places: data, total: data.length })
        }
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
