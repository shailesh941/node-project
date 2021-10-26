var express = require('express');
var router = express.Router();
var FoodSchema = require('../models/foods');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/list', function(req, res, next) {
  const queryObj = {};
  if(req.body.type_of_dish != null){
    queryObj.type_of_dish = req.body.type_of_dish;
  }
  if(req.body.isEggeterian != null){
    queryObj.isEggeterian = req.body.isEggeterian;
  }
  FoodSchema.find({$or:[queryObj]}).exec().then( result =>{
      res.status(200).json(result)
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
    error:err
  })
  });

  
  
});

module.exports = router;
