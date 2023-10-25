const express = require('express')
const recipeRouter = express.Router();
const mongoose = require('mongoose');
const recipesDB = require('../model/recipes');
const bodyParser = require('body-parser');
recipeRouter.use(express.json())
recipeRouter.use(express.urlencoded({ extended: true }))
recipeRouter.use(bodyParser.json());
recipeRouter.use(bodyParser.urlencoded({ extended: true }));

recipeRouter.get('/', (req,res,next) => {

    //** GRAB ALL RECIPES */

    recipesDB.find().then((Recipes) => {
        console.log('Working')
        res.status(200).send(Recipes);
    })
    .catch((err) => {
        res.status(404).send({ status:404, response:'Recipes Not found'});
    })
    
});


recipeRouter.get('/:id',(req,res,next) => {

    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    recipesDB.findById(`${recipeID}`)
    .then((resolvedQuiz) => {
        if (resolvedQuiz !== null) {
            res.status(200).send({ FullQuizData:resolvedQuiz, Error:false });
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
        res.status(200).send({ recipe});
        console.log(recipe)
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send({ quizStorage:'Recipe Not Created'});
    })



})

// Missing: We need update functionality for full CRUD functionality, I did it partially

// Make sure to install everything on the package json, and set up mongoose.



module.exports = recipeRouter;


