const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    _id:  {type: mongoose.Schema.Types.ObjectId },
    image: { type: String },
    name: { type: String },
    favorite:{ type: Boolean },
    instructions: { type: String },
    ingredients:{ type: Array },
    category: {type: String },
})

module.exports = mongoose.model('recipes', recipeSchema);