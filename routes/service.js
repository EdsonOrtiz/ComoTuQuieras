//First, instantiate the wrapper.
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '62ab6ef97837443b9d88d8e267c458ee',
  clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
  redirectUri: 'http://localhost:8888'
});
spotifyApi.setAccessToken('BQAqZYQVlsFa9Car_Jse1TPT0ml3LgboceWSGb7uClb4P5KZ1tgOIQlBSBC_09ulHZ57PO8WyNfrqVEG35jTa3wuBLKF2ObYNLEEJPfD4rBcovQUHZQQz903obUkqXZQUF5w4CJEE2Lfh84iSSTV3xhlz89s0w');

spotifyApi.getPlaylistTracks('7LPpNcFdgEPXPBeWpiyWVo', {
    offset: 0,
    limit: 1,
    fields: 'items.track'

  })
  .then(
    function(data) {
      
      //console.log(data.body.items);
      /*
        var tracks = spotifyApi.getPlaylistTracks;
        tracks = JSON.parse(tracks);  
        */    
       console.log(data.body.items);
        
      
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );

  