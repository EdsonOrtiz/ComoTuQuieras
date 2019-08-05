//First, instantiate the wrapper.
var SpotifyWebApi = require('spotify-web-api-node');

/*
function handleTokenAPI(){
  var spotifyApi = new SpotifyWebApi({
    clientId: '62ab6ef97837443b9d88d8e267c458ee',
    clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
    redirectUri: 'http://localhost:8888'
  });
  return spotifyApi
}
*/

module.exports.getListSpotify = async function(){
  
  var spotifyApi = new SpotifyWebApi({
    clientId: '62ab6ef97837443b9d88d8e267c458ee',
    clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
    redirectUri: 'http://localhost:8888'
  });
  spotifyApi.setAccessToken('BQCc5t5K7LvU04_-PRADNZZfB5GVkiBHtWoaOmOUCfB9Edfupptt3wZV3onAShO4WJ043fkgpwzdemMnY2veyjK7sV_Vu_yOJoENPFhMXG3EM60iWhui3mZ3fuwJGhQ90wA5w1umyYCtlpUpbxGeRzayXiYkOA');

 var promise = new Promise((resolve, reject)=>{
    spotifyApi.getPlaylistTracks('7LPpNcFdgEPXPBeWpiyWVo', {
      fields: 'items(track(name,album(name),artists(name)))'
  
    })
    .then(
      function(data) {
         resolve( data.body.items)
      },
      function(err) {
        reject(err)
      }
    );
  })

return promise;

    }
