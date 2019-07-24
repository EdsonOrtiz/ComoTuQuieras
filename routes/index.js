/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express edson' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express edson' });
});
module.exports = router;

*/
//First, instantiate the wrapper.
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '62ab6ef97837443b9d88d8e267c458ee',
  clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
  redirectUri: 'http://localhost:8888'
});
spotifyApi.setAccessToken('BQCzNxa321vYCIc36Y8_CY_idGddKZ7cHynE8q4CN3pww6wgUplBzC6j8QVSG2tAZKJjq5pjpCyBUVPFPjmhBp');
/*
spotifyApi.getPlaylistTracks('7LPpNcFdgEPXPBeWpiyWVo', {
    offset: 25,
    limit: 100,
    fields: 'items'
  })
  .then(
    function(data) {
      console.log('The playlist contains these tracks', data.body);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );
  */