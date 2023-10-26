const recipesDB = require('../model/recipes')
const express = require('express');
const mongoose = require('mongoose');

// Will put seed data into your localdatabase


// Insert all seed data in this array utilizing this format

 let seedRecipes =  [
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

// seedRecipes = [
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Dragonfire Chili.png', 
//     name: 'Dragonfire Chili', 
//     instructions: "Brown beef with onions and garlic. Add tomatoes, beans, and spices. Simmer until flavors meld." 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: "/images/Goblins Guacamole.png", 
//     name: "Goblins Guacamole", 
//     instructions: "Mash ripe avocados. Mix in lime juice, chopped tomatoes, onions, cilantro, and season to taste." 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: "/images/Mystic Mushroom Soup.png", 
//     name: "Mystic Mushroom Soup", 
//     instructions: "Sauté mushrooms and onions. Add broth and simmer. Blend until smooth, and season." 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: "/images/Paladins Potato Salad.png", 
//     name: "Paladins Potato Salad", 
//     instructions: "Boil potatoes until tender. Mix with mayo, mustard, onions, and celery. Chill before serving." 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Eldritch Elf Pasta.png', 
//     name: 'Eldritch Elf Pasta', 
//     instructions: 'Cook pasta. Sauté garlic and add tomatoes and basil. Mix with pasta and top with parmesan.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Banshees Bruschetta.png', 
//     name: 'Banshees Bruschetta', 
//     instructions: 'Toast bread slices. Top with tomato, basil, garlic, and olive oil mixture.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Rangers Risotto.png', 
//     name: 'Rangers Risotto', 
//     instructions: 'Cook Arborio rice with broth, stirring constantly. Add sautéed mushrooms, cheese, and butter.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Dwarfs Dumplings.png', 
//     name: 'Dwarfs Dumplings', 
//     instructions: 'Prepare dough and fill with meat mixture. Boil until cooked through.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Sorcerers Spinach Pie.png', 
//     name: "Sorcerers Spinach Pie", 
//     instructions: 'Mix spinach with feta, onions, and eggs. Lay in phyllo dough and bake until golden.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Bards Beef Bourguignon.png', 
//     name: 'Bards Beef Bourguignon', 
//     instructions: 'Brown beef. Add wine, broth, onions, and mushrooms. Simmer until beef is tender.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Warlocks Waffles.png', 
//     name: 'Warlocks Waffles', 
//     instructions: 'Mix flour, milk, eggs, and baking powder. Pour into waffle iron and cook until golden.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Treasure Chest Tacos.png', 
//     name: 'Treasure Chest Tacos', 
//     instructions: 'Cook beef with taco seasoning. Serve in taco shells with lettuce, cheese, and salsa.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Clerics Caesar Salad.png', 
//     name: 'Clerics Caesar Salad', 
//     instructions: 'Toss romaine lettuce with Caesar dressing. Top with croutons and parmesan.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Rogues Ratatouille.png', 
//     name: 'Rogues Ratatouille', 
//     instructions: "Sauté eggplant, zucchini, and peppers. Add tomatoes and seasonings. Simmer until vegetables are tender." 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Necromancers Noodles.png', 
//     name: 'Necromancers Noodles', 
//     instructions: 'Boil noodles. Stir fry with vegetables, protein, and sauce of choice.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Beholders Brownies.png', 
//     name: 'Beholders Brownies', 
//     instructions: 'Mix cocoa, flour, sugar, eggs, and butter. Bake until set and let cool before cutting.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Ghouls Grilled Cheese.png', 
//     name: 'Ghouls Grilled Cheese', 
//     instructions: 'Place cheese between two slices of bread. Butter outside and grill until golden.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Fairys Fried Rice.png', 
//     name: 'Fairys Fried Rice', 
//     instructions: 'Stir fry cooked rice with vegetables, protein, and soy sauce.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Mermaids Muffins.png', 
//     name: 'Mermaids Muffins', 
//     instructions: 'Mix flour, sugar, baking powder, eggs, and milk. Pour into muffin tins and bake until golden.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Vampires Vanilla Pudding.webp', 
//     name: 'Vampires Vanilla Pudding', 
//     instructions: 'Whisk milk, sugar, and vanilla. Heat until thickened. Chill before serving.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Orcs Omelette.png', 
//     name: 'Orcs Omelette', 
//     instructions: 'Whisk eggs and pour into a hot pan. Add fillings and fold in half when set.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Lichs Lemon Pie.png', 
//     name: 'Lichs Lemon Pie', 
//     instructions: 'Mix lemon juice, sugar, and eggs. Pour into crust and bake. Top with meringue and brown.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Trolls Tiramisu.png', 
//     name: 'Trolls Tiramisu', 
//     instructions: 'Layer coffee-soaked ladyfingers with mascarpone mixture. Chill and dust with cocoa.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Wizards Wraps.png', 
//     name: 'Wizards Wraps', 
//     instructions: 'Fill tortilla with choice of fillings. Roll up and serve with side of choice.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Pixies Pancakes.png', 
//     name: 'Pixies Pancakes', 
//     instructions: 'Mix flour, milk, eggs, and baking powder. Pour onto hot griddle and flip when bubbly.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Sphinxs Spaghetti Carbonara.png', 
//     name: 'Sphinxs Spaghetti Carbonara', 
//     instructions: 'Cook pasta. Mix with eggs, cheese, pancetta, and black pepper.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Centaurs Cheesecake.png', 
//     name: 'Centaurs Cheesecake', 
//     instructions: 'Blend cream cheese, sugar, eggs, and vanilla. Pour into crust and bake. Chill before serving.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Minotaurs Meatloaf.png', 
//     name: 'Minotaurs Meatloaf', 
//     instructions: 'Mix ground meat with breadcrumbs, egg, and seasonings. Shape and bake. Top with sauce of choice.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Krakens Key Lime Pie.png', 
//     name: 'Krakens Key Lime Pie', 
//     instructions: 'Mix lime juice, condensed milk, and eggs. Pour into crust and bake. Chill before serving.' 
//   },
//   { 
//     id: new mongoose.Types.ObjectId(), 
//     image: '/images/Phoenixs Pho.png', 
//     name: 'Phoenixs Pho', 
//     instructions: 'Simmer broth with spices. Serve with rice noodles, protein, and fresh herbs.' 
//   }
// ];

seedRecipes = [
  { id: new mongoose.Types.ObjectId(), image: '/images/Dragonfire Chili.png', name: 'Dragonfire Chili', instructions: "Brown beef with onions and garlic. Add tomatoes, beans, and spices. Simmer until flavors meld.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Goblins Guacamole.png", name: "Goblins Guacamole", instructions: "Mash ripe avocados. Mix in lime juice, chopped tomatoes, onions, cilantro, and season to taste.", category: 'appetizer' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Mystic Mushroom Soup.png", name: "Mystic Mushroom Soup", instructions: "Sauté mushrooms and onions. Add broth and simmer. Blend until smooth, and season.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Paladins Potato Salad.png", name: "Paladins Potato Salad", instructions: "Boil potatoes until tender. Mix with mayo, mustard, onions, and celery. Chill before serving.", category: 'side' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Eldritch Elf Pasta.png', name: 'Eldritch Elf Pasta', instructions: 'Cook pasta. Sauté garlic and add tomatoes and basil. Mix with pasta and top with parmesan.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Banshees Bruschetta.png', name: 'Banshees Bruschetta', instructions: 'Toast bread slices. Top with tomato, basil, garlic, and olive oil mixture.', category: 'appetizer' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Rangers Risotto.png', name: 'Rangers Risotto', instructions: 'Cook Arborio rice with broth, stirring constantly. Add sautéed mushrooms, cheese, and butter.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Dwarfs Dumplings.png', name: 'Dwarfs Dumplings', instructions: 'Prepare dough and fill with meat mixture. Boil until cooked through.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Sorcerers Spinach Pie.png', name: "Sorcerers Spinach Pie", instructions: 'Mix spinach with feta, onions, and eggs. Lay in phyllo dough and bake until golden.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Bards Beef Bourguignon.png', name: 'Bards Beef Bourguignon', instructions: 'Brown beef. Add wine, broth, onions, and mushrooms. Simmer until beef is tender.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Warlocks Waffles.png', name: 'Warlocks Waffles', instructions: 'Mix flour, milk, eggs, and baking powder. Pour into waffle iron and cook until golden.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Treasure Chest Tacos.png', name: 'Treasure Chest Tacos', instructions: 'Cook beef with taco seasoning. Serve in taco shells with lettuce, cheese, and salsa.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Clerics Caesar Salad.png', name: 'Clerics Caesar Salad', instructions: 'Toss romaine lettuce with Caesar dressing. Top with croutons and parmesan.', category: 'side' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Rogues Ratatouille.png', name: 'Rogues Ratatouille', instructions: "Sauté eggplant, zucchini, and peppers. Add tomatoes and seasonings. Simmer until vegetables are tender.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Necromancers Noodles.png', name: 'Necromancers Noodles', instructions: 'Boil noodles. Stir fry with vegetables, protein, and sauce of choice.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Beholders Brownies.png', name: 'Beholders Brownies', instructions: 'Mix cocoa, flour, sugar, eggs, and butter. Bake until set and let cool before cutting.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Ghouls Grilled Cheese.png', name: 'Ghouls Grilled Cheese', instructions: 'Place cheese between two slices of bread. Butter outside and grill until golden.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Fairys Fried Rice.png', name: 'Fairys Fried Rice', instructions: 'Stir fry cooked rice with vegetables, protein, and soy sauce.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Mermaids Muffins.png', name: 'Mermaids Muffins', instructions: 'Mix flour, sugar, baking powder, eggs, and milk. Pour into muffin tins and bake until golden.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Vampires Vanilla Pudding.webp', name: 'Vampires Vanilla Pudding', instructions: 'Whisk milk, sugar, and vanilla. Heat until thickened. Chill before serving.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Orcs Omelette.png', name: 'Orcs Omelette', instructions: 'Whisk eggs and pour into a hot pan. Add fillings and fold in half when set.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Lichs Lemon Pie.png', name: 'Lichs Lemon Pie', instructions: 'Mix lemon juice, sugar, and eggs. Pour into crust and bake. Top with meringue and brown.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Trolls Tiramisu.png', name: 'Trolls Tiramisu', instructions: 'Layer coffee-soaked ladyfingers with mascarpone mixture. Chill and dust with cocoa.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Wizards Wraps.png', name: 'Wizards Wraps', instructions: 'Fill tortilla with choice of fillings. Roll up and serve with side of choice.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Pixies Pancakes.png', name: 'Pixies Pancakes', instructions: 'Mix flour, milk, eggs, and baking powder. Pour onto hot griddle and flip when bubbly.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Sphinxs Spaghetti Carbonara.png', name: 'Sphinxs Spaghetti Carbonara', instructions: 'Cook spaghetti. Sauté bacon and mix with pasta and eggs. Add cheese and pepper.', category: 'dinner' },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Centaurs Cheesecake.png', 
    name: 'Centaurs Cheesecake', 
    instructions: 'Blend cream cheese, sugar, eggs, and vanilla. Pour into crust and bake. Chill before serving.',
    category:'dessert'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Minotaurs Meatloaf.png', 
    name: 'Minotaurs Meatloaf', 
    instructions: 'Mix ground meat with breadcrumbs, egg, and seasonings. Shape and bake. Top with sauce of choice.' ,
    category:'dinner'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Krakens Key Lime Pie.png', 
    name: 'Krakens Key Lime Pie', 
    instructions: 'Mix lime juice, condensed milk, and eggs. Pour into crust and bake. Chill before serving.',
    category:'dessert'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Phoenixs Pho.png', 
    name: 'Phoenixs Pho', 
    instructions: 'Simmer broth with spices. Serve with rice noodles, protein, and fresh herbs.',
    category:'dinner'
  }
]




module.exports = seedRecipes;