
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', recipes =>{
        recipes.increments();
        recipes.string('name', 255).notNullable()
        recipes.string('instructions').notNullable()
        recipes.text('description');
       
    })

    .createTable('ingredients', ingredients =>{
        ingredients.increments();
        ingredients.string('name', 255).notNullable()
       
        
    })
    

    .createTable('recipe_ingredients', recipeIngredients =>{
        recipeIngredients.increments();

        recipeIngredients.float('quantity_ingredients_in_recipe')

        recipeIngredients.integer('recipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

        recipeIngredients.integer('ingredientID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

        
        
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
  
};
