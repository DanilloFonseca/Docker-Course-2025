const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000

mongoose.connect('mongodb://mongodb').then(() => {
    console.log('=======================================')
    console.log('MongoDB is Conncted!')
    console.log('=======================================')
}).catch(err => {
    console.log('=======================================')
    console.log(err)
    console.log('=======================================')
    process.exit(1)
})

const peopleRoutes = require('./routes/People')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/Person', peopleRoutes)


app.listen(PORT, () => {
    console.log('=======================================')
    console.log('NodeJS & Express Started!')
    console.log('=======================================')
})