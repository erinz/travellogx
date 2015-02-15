'use strict';

var redis = require('../lib/redis');

exports.create = function(account, callback){
    if(!account.length) return callback(null, null);
    var accountInfo = account.pop();

    var email = accountInfo.email;
    redis.sismember("user_emails", email, function(err, data){
        if (err) return callback("error", null);

        if(data == 1){
            callback("exsitedUser");
        }else{
            redis.sadd('user_emails', email, function(err){
                if(err) return callback("error", null);
            });
            redis.lpush('travel_users', JSON.stringify(accountInfo), function(err){
                if(err) return callback("error", null);
                callback("success");
            });
        }
    });
}


exports.getAllUsers = function(callback){
    redis.lrange('travel_users', 0, -1, function(err, data){
        if(err) return callback(err, null);

        data = data.map(function(plan){
            return JSON.parse(plan);
        });
        callback(null, data);
    });
};