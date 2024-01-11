const moogoose = require('mongoose')
const mongoose = require("mongoose");

const authorSchema = new moogoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)