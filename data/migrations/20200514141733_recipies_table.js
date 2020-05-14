
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', recipes =>{
        recipes.increments();
        recipes.string('name', 255).notNullable()
        recipes.text('description');
        recipes.integer('ammount_of_ingredients')
        recipes.string('ingredient')
        recipes.float('quantity_ingredients_in_recipe')
        recipes.text('steps')
        

    })
    .createTable('ingredients', ingredients =>{
        ingredients.increments();
        ingredients.string('name', 255).notNullable()
        
    })
    .createTable('recipe_ingredients', recipeIngredients =>{
        recipeIngredients.increments();
        recipeIngredients.integer('quantity')
        
    })
  
};

exports.down = function(knex) {
  
};
