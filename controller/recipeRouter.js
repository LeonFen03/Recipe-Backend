const express = require('express')
const recipeRouter = express.Router();
const mongoose = require('mongoose');
const recipesDB = require('../model/recipes');
const seedRecipes = require('../seeds/recipeSeeds.js');
const bodyParser = require('body-parser');
recipeRouter.use(express.json());

recipeRouter.use(express.json())
recipeRouter.use(express.urlencoded({ extended: true }))
recipeRouter.use(bodyParser.json());

require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
  

recipeRouter.get('/', (req,res,next) => {
    //** GRAB ALL RECIPES */
    recipesDB.find().then((Recipes) => {
        console.log('All Recipes Data');
        res.status(200).send(Recipes);
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send({ status:404, response:'Recipes Not found'});
    })
    
});

recipeRouter.get('/seeds', (req,res,next) => {
    //** CREATE ALL RECIPES */
    recipesDB.create(seedRecipes)
    .then(() => {
        console.log('Successful!');
        res.redirect('/recipes');
    })
    
});



recipeRouter.get('/clear', (req,res,next) => {
    //** Clear ALL RECIPES */
    recipesDB.deleteMany({})
    .then(() => {
        console.log('Successfully Deleted All Recipes!');
        res.redirect('/recipes');
    })
    
});


recipeRouter.get('/:id',(req,res,next) => {
    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    recipesDB.findById(`${recipeID}`)
    .then((recipe) => {
        if (recipe !== null) {
            res.status(200).send({ recipe, Error:false });
        } else {
            res.status(404).send({ Error:true });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(404).send({ Error:true });
    })

})
// Delete specific recipe
recipeRouter.delete('/:id', (req,res,next) => {
    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    recipesDB.findByIdAndDelete(`${recipeID}`)
    .then((recipe) => {
        res.redirect('/');
    })
    .catch((recipe) => {
        res.status(404).send({ message:'not found'})
    })

})

//Create specific recipe
recipeRouter.post('/create', (req,res,next) => {

    //**Grab created data */
    const recipeData = req.body;
    const id = new mongoose.Types.ObjectId();
    recipesDB.create({
        _id: id,
        ...recipeData,
    }).then((recipe) => {
        res.status(200).send({ recipe });
        console.log(recipe)
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send({ recipeStorage:'Recipe Not Created'});
    })



})

// Missing: We need update functionality for full CRUD functionality, I did it partially

// Make sure to install everything on the package json, and set up mongoose.



module.exports = recipeRouter;


