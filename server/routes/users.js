var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.find((err, data) => {
    if (err) throw err;
    res.send(data);
  })
});
router.post('/', function (req, res) {
  users.create(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

router.get('/:id', function (req, res, next) {
  users.findById(req.params.id, (err, data) => {
      if (err) throw err;
      res.send(data);
  })
});

router.post('/userlogin', function (req, res) {
  console.log(req);;
  users.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).send("failed.");
    console.log(user);
    res.send(user);
  })
});

router.delete('/:id', function (req, res) {
  users.findById(req.params.id, (err, data) => {
      if (err) throw err;
      if (!data)
          return res.status(404).send("failed");
          users.findByIdAndDelete(req.params.id, (err, data) => {
          if (err) throw err;
          res.send(data);
      });
  });
});
router.put('/:id', function (req, res) {
  users.findById(req.params.id, (err, data) => {
      if (err) throw err;
      if (!data)
          return res.status(404).send("failed");
          users.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
          if (err) throw err;
          res.send(data);
      });
  });
});

module.exports = router;