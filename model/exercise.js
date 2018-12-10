const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const exerciseSchema = new Schema({
    userId: String,
    description: String,
    duration: String,
    date: Date
})

module.exports = mongoose.model('user', exerciseSchema)