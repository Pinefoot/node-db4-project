
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredientID: 1, recipeID: 1, quantity_ingredients_in_recipe: 5},
        {ingredientID: 2, recipeID: 1, quantity_ingredients_in_recipe: 7},
        {ingredientID: 3, recipeID: 1, quantity_ingredients_in_recipe: 3}
      ]);
    });
};
