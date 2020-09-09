const mongoose = require('mongoose')

const placesSchema = mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    cep: String,
    site: String,
    email: String,
    phone: String,
    social: String,
    women: String,
    type: String,
    items: String,
})

module.exports = mongoose.model('Places', placesSchema)