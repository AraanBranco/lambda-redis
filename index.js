'use strict';

const Helpers = require('./helpers');

exports.handler = function(e, ctx, cb) {
  if(e.create) {
    Helpers.create({ key: e.key, name: e.data }).then((r) => console.log(r)).catch((e) => console.log(e));
  }

  if(e.get) {
    Helpers.findOne(e.key).then((r) => console.log(r)).catch((e) => console.log(e));
  }

  if(e.update) {
    Helpers.update(e.key, e.data).then((r) => console.log(r)).catch((e) => console.log(e));
  }

  if(e.remove) {
    Helpers.remove(e.key).then((r) => console.log(r)).catch((e) => console.log(e));
  }

  return cb(null, { ok: true });
};
