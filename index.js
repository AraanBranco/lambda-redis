'use strict';

var Helpers = require('./helpers');

exports.handler = function(e, ctx, cb) {
  if(e.create) {
    Helpers
      .create({ document: '123123', name: 'REGINALDO' })
      .then(() => {
        Helpers.findOne('123123').then((r) => console.log).catch((err) => console.log);
      })
      .catch((err) => console.log);
  }

  if(e.get) {
    Helpers.findOne('123123').then((r) => console.log).catch((e) => console.log);
  }

  if(e.update) {
    Helpers.update('123123', e.data).then((r) => console.log).catch((e) => console.log);
  }

  if(e.remove) {
    Helpers.remove('123123').then((r) => console.log).catch((e) => console.log);
  }

  return cb(null, { ok: true });
};
