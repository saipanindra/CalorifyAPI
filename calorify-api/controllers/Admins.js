'use strict';

var url = require('url');

var Admins = require('./AdminsService');

module.exports.addCuisine = function addCuisine(req, res, next) {
    Admins.addCuisine(req.swagger.params, res, next);
};

module.exports.addIngredient = function addIngredient(req, res, next) {
    Admins.addIngredient(req.swagger.params, res, next);
};

module.exports.addUser = function addUser(req, res, next) {
    Admins.addUser(req.swagger.params, res, next);
};
