/**
 * Simple test script for the GetCalories API
 * This demonstrates how the API would be used and validates the implementation
 */

const DevelopersService = require('./calorify-api/controllers/DevelopersService');

// Mock response object for testing
function createMockResponse() {
    let statusCode = 200;
    let headers = {};
    let responseData = '';
    
    return {
        status: function(code) {
            statusCode = code;
            return this;
        },
        setHeader: function(name, value) {
            headers[name] = value;
        },
        end: function(data) {
            console.log(`Status: ${statusCode}`);
            console.log(`Headers:`, headers);
            console.log(`Response:`, data);
            console.log('---');
        }
    };
}

// Test cases
console.log('=== Testing GetCalories API ===\n');

// Test 1: Get calories for an ingredient
console.log('Test 1: Get calories for Chicken Breast ingredient');
const args1 = {
    ingredientId: { value: 'a1b2c3d4-5e6f-7890-abcd-ef1234567890' },
    servingSize: { value: '2.0' }
};
DevelopersService.getCalories(args1, createMockResponse(), null);

// Test 2: Get calories for a recipe
console.log('Test 2: Get calories for Grilled Chicken with Rice recipe');
const args2 = {
    recipeId: { value: 'r1a2b3c4-5d6e-7f89-0123-456789abcdef' },
    servingSize: { value: '1.5' }
};
DevelopersService.getCalories(args2, createMockResponse(), null);

// Test 3: Test error case - no ID provided
console.log('Test 3: Error case - no ingredientId or recipeId provided');
const args3 = {
    servingSize: { value: '1.0' }
};
DevelopersService.getCalories(args3, createMockResponse(), null);

// Test 4: Test error case - invalid ingredient ID
console.log('Test 4: Error case - invalid ingredient ID');
const args4 = {
    ingredientId: { value: 'invalid-id-12345' }
};
DevelopersService.getCalories(args4, createMockResponse(), null);

// Test 5: Get calories for Salt (zero calories)
console.log('Test 5: Get calories for Salt (zero calories ingredient)');
const args5 = {
    ingredientId: { value: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    servingSize: { value: '1.0' }
};
DevelopersService.getCalories(args5, createMockResponse(), null);

console.log('=== Testing Complete ===');
