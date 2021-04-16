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
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};

// Showing all id from database
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    Connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id] ,
        function(error,rows,fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows,res)
            }
        });
};
