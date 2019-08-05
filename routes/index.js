
var express = require('express');
var services = require('./service');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express edson' });
});

router.get('/getList', function(req, res) {

  var list2 = services.getListSpotify().then(list=>{
    console.log("algo",list)
    res.send({info:list})
  }).catch(error=>{
    console.log(error)
  });

//  res.render('index', { list: services.getListSpotify() });
  
});


module.exports = router;