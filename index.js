const express = require('express');
const app = express();
const recipeRouter = require('./controller/recipeRouter');
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.urlencoded({ extended: true }))
require('dotenv').config()
app.use(express.json())
// parse urlencoded request body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.use('/recipes', recipeRouter);


app.get('/', (req,res,next) => {
    res.status(200).send({});
})

app.listen(process.env.PORT, () => {
    console.log('Live');
}) 
