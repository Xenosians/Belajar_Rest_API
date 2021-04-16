'use strict';

var response = require('./res');
var Connection = require('./connection');

exports.index = function(req,res){
    response.ok('REST API Executed Properly')
};