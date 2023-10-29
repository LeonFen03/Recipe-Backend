const express = require('express')
const favoriteRecipeRouter = express.Router();
const mongoose = require('mongoose');
const favoriteRecipesDB = require('../model/favoriteRecipes');
const bodyParser = require('body-parser');

favoriteRecipeRouter.use(express.json());
favoriteRecipeRouter.use(express.json())
favoriteRecipeRouter.use(express.urlencoded({ extended: true }))
favoriteRecipeRouter.use(bodyParser.json());


favoriteRecipeRouter.get('/', (req,res,next) => {
    
    favoriteRecipesDB.find().then((Recipes) => {
        res.status(200).send(Recipes);
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send({ status:404, response:'Recipes Not found'});
    })
    
});


favoriteRecipeRouter.get('/clear', (req,res,next) => {
    favoriteRecipesDB.deleteMany({})
    .then(() => {
        console.log('Successfully Deleted All Recipes!');
        res.redirect('/recipes/favorites');
    })
    
});


favoriteRecipeRouter.get('/:id',(req,res,next) => {
    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    favoriteRecipesDB.findById(`${recipeID}`)
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

favoriteRecipeRouter.delete('/:id', (req,res,next) => {
    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    favoriteRecipesDB.findByIdAndDelete(`${recipeID}`)
    .then((recipe) => {
        res.status(200).send({ Error:false, })
    })
    .catch((err) => {
        res.status(404).send({ Error:true });
    })

})

favoriteRecipeRouter.post('/save', (req,res,next) => {
    favoriteRecipesDB.create({
        ...req.body,
    })
    .then((recipe) => {
        res.status(200).send({ recipe });
    })
    .catch((err) => {
        res.status(404).send({ recipeStorage:'Recipe Not Saved'});
    })



})

module.exports = favoriteRecipeRouter;


