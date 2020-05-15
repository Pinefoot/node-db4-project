const express = require('express')
const Recipes = require('./recipes-model.js');
const router = express.Router();


router.get('/', (req, res)=>{
    Recipes.getRecipes()
    .then(recipes =>{
        res.json(recipes);
    }).catch(err =>{
        console.log(err, 'This be the get all error')
        res.status(500).json({message: 'Failed to get recipes'})
    })
})

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    Recipes.findById(id)
    .then(recipes =>{
        if(recipes){
            res.json(recipes)
        }else{
            res.status(404).json({message: 'Failed to retrieve specific recipe'})
        }
    })
})

router.get('/:id/shoppinglist', (req, res)=>{
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(recipeID =>{
        if(recipeID){
            res.json(recipeID)
        }else{
            res.status(404).json({message:'Failed to retreive shoppinglist'})
        }
    }).catch(err =>{
        console.log('shopping list err:', err)
        res.status(500).json({message: "database failure"})
    })
})

router.get('/:id/instructions', (req, res)=>{
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(recipeID =>{
        if(recipeID){
            res.json(recipeID)
        }
    }).catch(err =>{
        console.log(err, 'error')
        res.status(500).json({message: 'shit!'})
    })
})


module.exports = router;

