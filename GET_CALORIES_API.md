# GetCalories API Documentation

## Overview
The GetCalories API endpoint provides calorie and nutritional information for ingredients and recipes in the Calorify system. This endpoint allows users to retrieve detailed nutritional data including calories per serving, macronutrients, and other nutritional facts.

## Endpoint
```
GET /calories
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ingredientId` | string (UUID) | No* | UUID of ingredient to get calories for |
| `recipeId` | string (UUID) | No* | UUID of recipe to get calories for |
| `servingSize` | number | No | Number of servings to calculate calories for (default: 1.0) |
| `skip` | integer | No | Number of records to skip for pagination (default: 0) |
| `limit` | integer | No | Maximum number of records to return (default: 10, max: 50) |

*Note: Either `ingredientId` or `recipeId` must be provided.

## Response Format

### Success Response (200)
```json
[
  {
    "id": "a1b2c3d4-5e6f-7890-abcd-ef1234567890",
    "name": "Chicken Breast",
    "totalCalories": 165,
    "caloriesPerServing": 330,
    "servingSize": 2.0,
    "unit": "100g",
    "nutritionalInfo": {
      "protein": 31.0,
      "carbohydrates": 0.0,
      "fat": 3.6,
      "fiber": 0.0,
      "sugar": 0.0,
      "sodium": 74.0
    }
  }
]
```

### Error Responses

#### 400 Bad Request
```json
{
  "error": "Bad Request",
  "message": "Either ingredientId or recipeId must be provided"
}
```

#### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Ingredient with ID {id} not found"
}
```

## Example Usage

### Get calories for an ingredient
```bash
curl -X GET "http://localhost:8080/calories?ingredientId=a1b2c3d4-5e6f-7890-abcd-ef1234567890&servingSize=2"
```

### Get calories for a recipe
```bash
curl -X GET "http://localhost:8080/calories?recipeId=r1a2b3c4-5d6e-7f89-0123-456789abcdef&servingSize=1.5"
```

### Get calories with pagination
```bash
curl -X GET "http://localhost:8080/calories?ingredientId=a1b2c3d4-5e6f-7890-abcd-ef1234567890&skip=0&limit=5"
```

## Sample Data

The API currently includes mock data for the following items:

### Ingredients
- **Salt** (`d290f1ee-6c54-4b01-90e6-d701748f0851`) - 0 calories
- **Chicken Breast** (`a1b2c3d4-5e6f-7890-abcd-ef1234567890`) - 165 calories per 100g
- **Brown Rice** (`b2c3d4e5-6f78-9012-bcde-f23456789012`) - 111 calories per 100g

### Recipes
- **Grilled Chicken with Rice** (`r1a2b3c4-5d6e-7f89-0123-456789abcdef`) - 276 calories per serving
- **Asian Stir Fry** (`r2b3c4d5-6e7f-8901-2345-6789abcdef01`) - 185 calories per serving

## Implementation Notes

1. **Serving Size Calculation**: The `caloriesPerServing` field is dynamically calculated based on the requested `servingSize` parameter.

2. **Nutritional Information**: Each response includes detailed nutritional breakdown including protein, carbohydrates, fat, fiber, sugar, and sodium content.

3. **Error Handling**: The API provides appropriate HTTP status codes and error messages for various failure scenarios.

4. **Pagination**: Standard pagination is supported using `skip` and `limit` parameters.

5. **Data Source**: Currently uses mock data. In a production environment, this would be replaced with database queries.

## Testing

Run the test script to validate the API functionality:
```bash
node test-calories-api.js
```

This will run comprehensive tests covering:
- Successful ingredient lookups
- Successful recipe lookups
- Error handling for missing parameters
- Error handling for invalid IDs
- Edge cases (zero-calorie ingredients)

## Future Enhancements

1. **Database Integration**: Replace mock data with actual database queries
2. **Caching**: Implement caching for frequently requested items
3. **Batch Requests**: Support multiple ingredient/recipe IDs in a single request
4. **Nutritional Analysis**: Add more detailed nutritional analysis and recommendations
5. **User Preferences**: Support for dietary restrictions and preferences
6. **Recipe Calculation**: Dynamic calorie calculation for custom recipes based on ingredients
