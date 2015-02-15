'use strict';

var _ = require('underscore');
var model = require('../models/users');

/**
 * Send plans to model to be saved
 */
exports.create = function(req, res, next){
    var account = _.clone(req.body);
    model.create(account, function(status){
        if(status === "exsitedUser" || status === "success"){
            return res.json(200, {
                status: status
            });
        }else{
            return res.json(503,{
                error : true
            });
        }
    });

    next();
};

exports.getAllUsers = function(req, res){
    model.getAllUsers(function(err, data){
        if(err) return res.json(503,{
            error : true
        });
        res.json(200, data);
    });
};