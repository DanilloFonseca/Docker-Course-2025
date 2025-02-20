const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
    name: String,
    password: String
},
{
    timestamps: true
})

module.exports = mongoose.model('Person', PersonSchema)