'use strict';

var response = require('./res');
var Connection = require('./connection');

exports.index = function(req,res){
    response.ok('REST API Executed Properly',res)
};

//showing data from database
exports.tampilsemuadatasiswa = function(req,res){
    Connection.query('SELECT * FROM mahasiswa',function(error,rows,fields){
        if(error){
            Connection.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};