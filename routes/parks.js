var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Park = require('../models/Park.js');
/* GET /parks listing. */
router.get('/', function(req, res, next) {
  Park.find(function (err, parks) {
    if (err) return next(err);
    res.json(parks);
  });
});

/* POST /parks */
router.post('/', function(req, res, next) {
  Park.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /parks/id */
router.get('/:id', function(req, res, next) {
  Park.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
