'use strict';

var Redis = require('ioredis');
var redis = new Redis({
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  db: 0
});

exports.handler = function(e, ctx, cb) {
	redis.set('foo', 'bar');

	redis.get('foo', function (err, result) {
		if (err) {
			console.error(err);
		} else {
			console.log(result);
		}
	});
	return cb(null, { goku: true });
};