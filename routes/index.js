
var express = require('express');
var services = require('./service');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express edson' });
});

//Newbies
router.get('/Newbies', function(req, res) {
  var list2 = services.playlist1().then(list=>{
    console.log("Newbies",list)
    res.send({info:list})
  }).catch(error=>{
    console.log(error)
  });
});

//Me & My Lonely Times
router.get('/Me&MyLonelyTimes', function(req, res) {
  var list2 = services.playlist2().then(list=>{
    console.log("Me & My Lonely Times",list)
    res.send({info:list})
  }).catch(error=>{
    console.log(error)
  });
});

//Discover Weekly
router.get('/DiscoverWeekly', function(req, res) {
  var list2 = services.playlist3().then(list=>{
    console.log("Discover Weekly",list)
    res.send({info:list})
  }).catch(error=>{
    console.log(error)
  });
});

//Todays Top Hits
router.get('/TodaysTopHits', function(req, res) {
  var list2 = services.playlist4().then(list=>{
    console.log("Todays Top Hits",list)
    res.send({info:list})
  }).catch(error=>{
    console.log(error)
  });
});


module.exports = router;