const express = require('express');
const router = express.Router();

//Models

const Director=require('../models/Director');

router.post('/', function(req, res, next) {
    const director=new Director(req.body);
    const promise=director.save();

    promise.then((data)=>{
      res.json(data);
    }).then((err)=>{
      res.json(err);
    });
});

module.exports = router;
