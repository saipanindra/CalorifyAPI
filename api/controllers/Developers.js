'use strict';

var url = require('url');

var Developers = require('./DevelopersService');

module.exports.getUsers = function getUsers (req, res, next) {
  Developers.getUsers(req.swagger.params, res, next);
};

module.exports.searchInventory = function searchInventory (req, res, next) {
  Developers.searchInventory(req.swagger.params, res, next);
};
