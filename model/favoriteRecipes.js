const mongoose = require('mongoose');

const savedRecipeSchema = mongoose.Schema({
    _id:  {type: mongoose.Schema.Types.ObjectId },
    image: { type: String },
    name: { type: String },
    instructions: { type: String },
    ingredients:{ type: Array },
    category: {type: String },
})

module.exports = mongoose.model('savedRecipes', savedRecipeSchema);