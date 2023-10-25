const express = require('express');
const app = express();
const recipeRouter = require('./controller/recipeRouter');
const bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }))
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
// parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/recipes', recipeRouter);


app.get('/', (req,res,next) => {
    res.status(200).send({});
})

app.listen(process.env.PORT, () => {
    console.log('Live');

}) 
