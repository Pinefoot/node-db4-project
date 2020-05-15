
const db = require('../data/db-config.js');

module.exports = {
    
    findById,
    getRecipes,
    getShoppingList,
    getInstructions

    // findIngredients,
    
}

function getRecipes(){
    return db('recipes')
}

function findById(id){
    return db('recipes').where({id}).first()
}

function getShoppingList(recipeID){
    return db('recipe_ingredients')
    .select('ingredients.name', 'recipe_ingredients.quantity_ingredients_in_recipe')
    .join('recipes', 'recipes.id', '=', 'recipe_ingredients.recipeID')
    .join('ingredients', "recipe_ingredients.ingredientID", 'ingredients.id' )
    .where({recipeID})

}

function getInstructions(id){
    return db('recipes')
    .select('recipes.name', 'recipes.instructions')
    
    .where({id})
}


// function findIngredients(){
//     return db('ingredients')
//     .select('recipes.name', 'ingredients.id',
//      'ingredients.name',
//      'recipe_ingredients.quantity_ingredients_in_recipe')
//      .join('recipes', )
     

// }