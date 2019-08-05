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
  spotifyApi.setAccessToken('BQDI40xoFZqV93gqb9HRVr_nUDugFdznNE-m-TPV4HoZGF09m9kkRWef-qbFEJLtSd0SmKWMWOzK2_wYt6PY9km3l9UXvxBAmdmPLlOD61PdUwQPSlYt95-Mj0tcXPEZ3ky4WiO_aL4kLcGZfeRzAIx709h3_w');

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
