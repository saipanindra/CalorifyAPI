'use strict';

exports.getCuisines = function (args, res, next) {
    /**
     * get list of cuisines
     * get list of cuisines in the system.
     *
     * type String pass an optional cuisine type for looking up cuisines (optional)
     * skip Integer number of records to skip for pagination (optional)
     * limit Integer maximum number of records to return (optional)
     * returns List
     **/
    var examples = {};
    examples['application/json'] = [{
        'Id': 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        'Name': 'Asian'
    }];
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
};

exports.getUsers = function (args, res, next) {
    /**
     * get list of users
     * get list of users in the system.
     *
     * username String pass an optional user name(first name or last name) string for looking up users (optional)
     * skip Integer number of records to skip for pagination (optional)
     * limit Integer maximum number of records to return (optional)
     * returns List
     **/
    var examples = {};
    examples['application/json'] = [{
        'DateOfBirth': '1st Jan 2017',
        'FirstName': 'Christopher',
        'Sex': 'Male',
        'Id': 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        'LastName': 'Nolan'
    }];
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
};

exports.searchInventory = function (args, res, next) {
    /**
     * gets List of Ingredients
     * By passing in the appropriate options, you can search for available ingredients in the system
     *
     * searchString String pass an optional search string for looking up ingredients (optional)
     * skip Integer number of records to skip for pagination (optional)
     * limit Integer maximum number of records to return (optional)
     * returns List
     **/
    var examples = {};
    examples['application/json'] = [{
        'CategoryId': 'ed90f1ee-6c54-4b01-90e6-d701748f0851',
        'NutritionId': 'xd90f1eed-6c54-4b01-90e6-d701748f0851',
        'IngredientId': 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        'Color': 'White',
        'Unit': 'grams',
        'AvailableQuantity': 30,
        'Name': 'Salt'
    }];
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
};


exports.getCalories = function (args, res, next) {
    /**
     * get calorie information for ingredients or recipes
     * Retrieve calorie and nutritional information for specific ingredients or recipes in the system.
     *
     * ingredientId String UUID of ingredient to get calories for (optional)
     * recipeId String UUID of recipe to get calories for (optional)
     * servingSize BigDecimal number of servings to calculate calories for (optional)
     * skip Integer number of records to skip for pagination (optional)
     * limit Integer maximum number of records to return (optional)
     * returns List
     **/
    
    // Extract parameters
    var ingredientId = args.ingredientId ? args.ingredientId.value : null;
    var recipeId = args.recipeId ? args.recipeId.value : null;
    var servingSize = args.servingSize ? parseFloat(args.servingSize.value) : 1.0;
    var skip = args.skip ? parseInt(args.skip.value) : 0;
    var limit = args.limit ? parseInt(args.limit.value) : 10;
    
    // Validate that at least one ID is provided
    if (!ingredientId && !recipeId) {
        res.status(400);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            error: 'Bad Request',
            message: 'Either ingredientId or recipeId must be provided'
        }, null, 2));
        return;
    }
    
    // Mock calorie database - in a real implementation, this would come from a database
    var calorieDatabase = {
        ingredients: {
            'd290f1ee-6c54-4b01-90e6-d701748f0851': {
                id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
                name: 'Salt',
                totalCalories: 0,
                caloriesPerServing: 0,
                servingSize: servingSize,
                unit: 'grams',
                nutritionalInfo: {
                    protein: 0.0,
                    carbohydrates: 0.0,
                    fat: 0.0,
                    fiber: 0.0,
                    sugar: 0.0,
                    sodium: 38758.0
                }
            },
            'a1b2c3d4-5e6f-7890-abcd-ef1234567890': {
                id: 'a1b2c3d4-5e6f-7890-abcd-ef1234567890',
                name: 'Chicken Breast',
                totalCalories: 165,
                caloriesPerServing: 165 * servingSize,
                servingSize: servingSize,
                unit: '100g',
                nutritionalInfo: {
                    protein: 31.0,
                    carbohydrates: 0.0,
                    fat: 3.6,
                    fiber: 0.0,
                    sugar: 0.0,
                    sodium: 74.0
                }
            },
            'b2c3d4e5-6f78-9012-bcde-f23456789012': {
                id: 'b2c3d4e5-6f78-9012-bcde-f23456789012',
                name: 'Brown Rice',
                totalCalories: 111,
                caloriesPerServing: 111 * servingSize,
                servingSize: servingSize,
                unit: '100g',
                nutritionalInfo: {
                    protein: 2.6,
                    carbohydrates: 23.0,
                    fat: 0.9,
                    fiber: 1.8,
                    sugar: 0.4,
                    sodium: 5.0
                }
            }
        },
        recipes: {
            'r1a2b3c4-5d6e-7f89-0123-456789abcdef': {
                id: 'r1a2b3c4-5d6e-7f89-0123-456789abcdef',
                name: 'Grilled Chicken with Rice',
                totalCalories: 276,
                caloriesPerServing: 276 * servingSize,
                servingSize: servingSize,
                unit: 'serving',
                nutritionalInfo: {
                    protein: 33.6,
                    carbohydrates: 23.0,
                    fat: 4.5,
                    fiber: 1.8,
                    sugar: 0.4,
                    sodium: 79.0
                }
            },
            'r2b3c4d5-6e7f-8901-2345-6789abcdef01': {
                id: 'r2b3c4d5-6e7f-8901-2345-6789abcdef01',
                name: 'Asian Stir Fry',
                totalCalories: 185,
                caloriesPerServing: 185 * servingSize,
                servingSize: servingSize,
                unit: 'serving',
                nutritionalInfo: {
                    protein: 12.5,
                    carbohydrates: 18.2,
                    fat: 8.1,
                    fiber: 3.2,
                    sugar: 6.8,
                    sodium: 420.0
                }
            }
        }
    };
    
    var results = [];
    
    // Handle ingredient lookup
    if (ingredientId) {
        var ingredient = calorieDatabase.ingredients[ingredientId];
        if (ingredient) {
            // Recalculate calories per serving based on requested serving size
            var ingredientResult = JSON.parse(JSON.stringify(ingredient)); // Deep copy
            ingredientResult.caloriesPerServing = ingredient.totalCalories * servingSize;
            ingredientResult.servingSize = servingSize;
            results.push(ingredientResult);
        } else {
            res.status(404);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                error: 'Not Found',
                message: 'Ingredient with ID ' + ingredientId + ' not found'
            }, null, 2));
            return;
        }
    }
    
    // Handle recipe lookup
    if (recipeId) {
        var recipe = calorieDatabase.recipes[recipeId];
        if (recipe) {
            // Recalculate calories per serving based on requested serving size
            var recipeResult = JSON.parse(JSON.stringify(recipe)); // Deep copy
            recipeResult.caloriesPerServing = recipe.totalCalories * servingSize;
            recipeResult.servingSize = servingSize;
            results.push(recipeResult);
        } else {
            res.status(404);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                error: 'Not Found',
                message: 'Recipe with ID ' + recipeId + ' not found'
            }, null, 2));
            return;
        }
    }
    
    // Apply pagination
    var paginatedResults = results.slice(skip, skip + limit);
    
    // Return successful response
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(paginatedResults, null, 2));
};
