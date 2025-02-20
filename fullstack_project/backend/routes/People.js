const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

//Try to use 'localhost:4000/Person/People' in your postman!
router.get('/People', async (req, res) => {
    try {
        const people = await Person.find();
        res.json(people);
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: err.message });
    }
});

//Now try to post using the route 'localhost:4000/Person/'   ;-)
router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body);
        const savedPerson = await person.save();
        res.status(200).json(savedPerson);
    } catch (err) {
        res.status(400).json({ code: 400, message: err.message });
    }
});

module.exports = router;
