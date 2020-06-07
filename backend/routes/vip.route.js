const express = require('express');
const app = express();
const vipRoute = express.Router();

// Vip model
let Vip = require('../models/Vip');

// Add Vip
vipRoute.route('/create').post((req, res, next) => {
  Vip.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Vips
vipRoute.route('/').get((req, res) => {
  Vip.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single vip
vipRoute.route('/read/:id').get((req, res) => {
  Vip.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update vip
vipRoute.route('/update/:id').put((req, res, next) => {
  Vip.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete vip
vipRoute.route('/delete/:id').delete((req, res, next) => {
  Vip.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = vipRoute;
