'use strict';

exports.getCuisines = function(args, res, next) {
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
  examples['application/json'] = [ {
  "Id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "Name" : "Asian"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUsers = function(args, res, next) {
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
  examples['application/json'] = [ {
  "DateOfBirth" : "1st Jan 2017",
  "FirstName" : "Christopher",
  "Sex" : "Male",
  "Id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "LastName" : "Nolan"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.searchInventory = function(args, res, next) {
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
  examples['application/json'] = [ {
  "CategoryId" : "ed90f1ee-6c54-4b01-90e6-d701748f0851",
  "NutritionId" : "xd90f1eed-6c54-4b01-90e6-d701748f0851",
  "IngredientId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "Color" : "White",
  "Unit" : "grams",
  "AvailableQuantity" : 30,
  "Name" : "Salt"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

