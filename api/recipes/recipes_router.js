const express = require('express');
const Recipes = require('./recipes_model.js') 
const db = require('../../data/db-config.js')

const router = express.Router();

router.get('/', (req,res) => {
    Recipes.find(req.body)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({message: "failed to get recipe"})
    })
})

module.exports = router;