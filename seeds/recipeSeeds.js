const recipesDB = require('../model/recipes')
const mongoose = require('mongoose')
// Will put seed data into your localdatabase


// Insert all seed data in this array utilizing this format

 const seedRecipes =  [
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Spaghetti Bolognese', instructions: 'Cook the pasta. Sauté onions and garlic, add ground beef, tomatoes, and spices. Simmer and serve over pasta.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken Alfredo', instructions: 'Cook fettuccine pasta. Sauté chicken, add cream and Parmesan cheese, and simmer. Mix with pasta.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Tacos', instructions: 'Cook ground beef with taco seasoning. Serve in taco shells with toppings of choice.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Caesar Salad', instructions: 'Toss romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Grilled Cheese', instructions: 'Butter bread, add cheese, and grill until golden brown and cheese is melted.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Macaroni and Cheese', instructions: 'Cook macaroni pasta. Make a cheese sauce with butter, flour, milk, and cheese, then mix with pasta.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken Noodle Soup', instructions: 'Sauté carrots, celery, and onions, add broth and chicken, simmer. Add noodles and cook until done.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Beef Stir Fry', instructions: 'Sauté sliced beef and vegetables in oil, add soy sauce and serve with rice.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Pancakes', instructions: 'Mix pancake batter and cook on a griddle until golden brown. Serve with syrup.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'BLT Sandwich', instructions: 'Cook bacon. Assemble sandwich with bacon, lettuce, tomato, and mayo.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken Parmesan', instructions: 'Bread and fry chicken cutlets. Top with marinara sauce and cheese, bake until bubbly.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Egg Salad Sandwich', instructions: 'Boil eggs, chop, and mix with mayo and mustard. Serve on bread.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Spaghetti Carbonara', instructions: 'Cook spaghetti. Sauté bacon and garlic, add eggs and cheese, mix with pasta.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Fried Rice', instructions: 'Sauté leftover rice with veggies, egg, and soy sauce.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Hamburgers', instructions: 'Grill burgers, serve on buns with toppings of choice.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Grilled Salmon', instructions: 'Season salmon and grill until cooked through. Serve with lemon.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Margherita Pizza', instructions: 'Top pizza dough with tomato sauce, fresh mozzarella, and basil. Bake until crust is golden.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken Fajitas', instructions: 'Sauté sliced chicken, peppers, and onions. Serve with tortillas and toppings.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'French Toast', instructions: 'Dip bread in egg mixture and cook until golden brown. Serve with syrup.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken Tenders', instructions: 'Bread and fry chicken strips. Serve with dipping sauce.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Meatloaf', instructions: 'Mix ground beef, breadcrumbs, egg, and spices. Bake and serve with ketchup.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Vegetarian Chili', instructions: 'Sauté onions, peppers, and beans, add tomatoes and spices, simmer.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Chicken and Rice', instructions: 'Cook chicken and veggies in broth, add rice and simmer until done.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Pasta Primavera', instructions: 'Cook pasta, sauté assorted vegetables, mix with a light sauce and pasta.' },
    { id: new mongoose.Types.ObjectId(), image:'', name: 'Shrimp Scampi', instructions: 'Sauté shrimp in garlic butter, add lemon juice and parsley, serve over pasta.' },
  ];

module.exports = seedRecipes;