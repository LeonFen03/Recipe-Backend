const express = require('express');
const app = express();
const recipeRouter = require('./controller/recipeRouter');
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.urlencoded({ extended: true }))
require('dotenv').config()
app.use(express.json())
app.use(bodyParser.json());
// parse urlencoded request body

app.use(cors());

app.use('/recipes', recipeRouter);


app.get('/', (req,res,next) => {
    res.status(200).send({});
})

app.listen(process.env.PORT, () => {
    console.log('Live');
}) 
