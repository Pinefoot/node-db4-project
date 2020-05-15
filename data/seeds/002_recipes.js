
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name : "green eggs n\' ham",
        instructions : "take green, add eggs, then smash ham into those eggs. Throw at sky. Eat on pavement", 
        description: "its eggs, and then its ham...But, get this! Its green!" },
        {name: 'flour', instructions: 'no instructions just eat the flour', description: 'its flour, as in, that flour.'},
        {name: 'over easy eggs', instructions:'medium heat pan, grease pan, add eggs, fry one side of egg to desired amount, flip, fry egg for short while, take off heat and server so yolk is runny.'}
      ]);
    });
};
