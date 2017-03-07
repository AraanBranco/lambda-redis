'use strict';

var Promise = require('bluebird');
var Redis = require('ioredis');
var redis = new Redis({
  port: process.env.PORT_REDIS,   // Redis port
  host: process.env.HOST_REDIS,   // Redis host
  db: 0
});

exports.create = function(data) {
  var document = data.document;
  var name = data.name;

  if(!document) {
    console.log("Document not exists");
    throw "Document not exists";
  }
  if(!name) {
    console.log("Name not exists");
    throw "Name not exists";
  }

  console.log('Init create Key');
  return new Promise((resolve, reject) => {
    redis.set(document, JSON.stringify({ name }))
      .then((result) => {
        console.log("Result from create ", result);
        resolve(result);
      })
      .catch((err) => {
        console.log("Error from create ", err);
        reject(err);
      });
  });
};

exports.findOne = function(document) {
  if(!document) {
    console.log("Document not exists");
    throw "Document not exists";
  }

  console.log('Init find Document');
  return new Promise((resolve, reject) => {
    redis.get(document)
      .then((result) => {
        console.log("Read ", result);
        resolve(result);
      })
      .catch((err) => {
        console.log("Error from read ", err);
        reject(err);
      });
  });
};

exports.update = function(document, data) {
  if(!document) {
    console.log("Document not exists");
    throw "Document not exists";
  }

  if (data.document) {
    delete data.document;
  }

  return new Promise((resolve, reject) => {
    this.findOne(document)
      .then((r) => {
        r = JSON.parse(r);
        let dataSet = Object.assign(data, r);

        redis.set(document, JSON.stringify(dataSet))
          .then((result) => {
            console.log("Result from update ", result);
            resolve(result);
          })
          .catch((err) => {
            console.log("Error from update ", err);
            reject(err);
          });
      });
  });
};

exports.remove = function(document) {
  if(!document) {
    console.log("Document not exists");
    throw "Document not exists";
  }

  return new Promise((resolve, reject) => {
    redis.del(document)
      .then((result) => {
        console.log("Remove item: ", result);
        resolve(result);
      })
      .catch((err) => {
        console.log("Error from remove item ", err);
        reject(err)
      });
  })
};
