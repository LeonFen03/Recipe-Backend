const express = require('express')
const recipeRouter = express.Router();
const mongoose = require('mongoose');
const recipesDB = require('../model/recipes');
const seedRecipes = require('../seeds/recipeSeeds.js');
const favoriteRecipeRouter = require('./favoriteRecipeRouter');
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

recipeRouter.use('/favorites',favoriteRecipeRouter);

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
    .catch((err) => {
        console.log('Error clear')
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
    .catch((err) => {
        console.log('Error clear')
    })
});


recipeRouter.get('/:id',(req,res,next) => {
    const recipeID =  new mongoose.Types.ObjectId(req.params.id);
    recipesDB.findById(`${recipeID}`)
    .then((recipe) => {
        if (recipe !== null) {
            res.status(200).send({ recipes:recipe, Error:false });
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
        console.log(recipe)
        res.redirect('/recipes');
    })
    .catch((recipe) => {
        res.status.send({Error:true})
    })

})

//'mongodb://0.0.0.0:27017/recipes'
recipeRouter.put('/:id', (req,res,next) => {
    const recipeData = req.body;
    const { id } = req.params;
    recipesDB.findByIdAndUpdate(`${id}`,recipeData)
    .then((recipe) => {
        res.status(203).send(recipe)
    })
    .catch((err) => {
        console.log(err) 
        res.status(500).send({ recipeStorage:'Recipe Not Created'});
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
        res.redirect('/recipes')

    })
    .catch((err) => {
        console.log(err)
        res.status(404).send({ recipeStorage:'Recipe Not Created'});
    })



})




module.exports = recipeRouter;


