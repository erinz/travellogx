'use strict';

var _ = require('underscore');
var model = require('../models/plans');

/**
 * Send plans to model to be saved
 */
exports.save = function(req, res, next){
    var plans = _.clone(req.body);
    model.save(plans, function(err){
        if(err) return res.json(503,{
            error : true
        });
    });

    next();
};


exports.get = function(req, res){
    model.get(function(err, data){
        if(err) return res.json(503,{
            error : true
        });
        res.json(200, data);
    });
};
