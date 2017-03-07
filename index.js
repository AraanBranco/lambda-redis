'use strict';

const Helpers = require('./helpers');

exports.handler = function(e, ctx, cb) {
  if(e.create) {
    Helpers.create({ key: e.key, e.data }).then((r) => console.log).catch((e) => console.log);
  }

  if(e.get) {
    Helpers.findOne(e.key).then((r) => console.log).catch((e) => console.log);
  }

  if(e.update) {
    Helpers.update(e.key, e.data).then((r) => console.log).catch((e) => console.log);
  }

  if(e.remove) {
    Helpers.remove(e.key).then((r) => console.log).catch((e) => console.log);
  }

  return cb(null, { ok: true });
};
