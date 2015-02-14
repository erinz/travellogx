'use strict';

var redis = require('../lib/redis');


/**
 * Recursively push each items at plans into redis
 * @param plans
 * @param callback
 * @returns {*}
 */
exports.save = function(plans, callback){
    if(!plans.length) return callback(null, null);
    var plan = plans.pop();
    redis.lpush('travel_plans', JSON.stringify(plan), function(err){
        if(err) return callback(err, null);
        exports.save(plans, callback);
    });
}

exports.get = function(callback){
    redis.lrange('travel_plans', 0, -1, function(err, data){
        if(err) return callback(err, null);

        data = data.map(function(plan){
            return JSON.parse(plan);
        });
        callback(null, data);
    });
};