
const express = require('express');
const router = express.Router();

const products = require('../models/products');

router.get('/:id', function (req, res, next) {
    products.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.get('/', function (req, res, next) {
    products.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.put('/:id', function (req, res) {
    products.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("not found.");
            products.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
});

router.post('/', function (req, res, next) {
    products.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.delete('/:id', function (req, res) {
    products.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("not found.");
            products.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
});



module.exports = router;