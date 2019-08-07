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
    redirectUri: 'https://api.spotify.com/v1/7LPpNcFdgEPXPBeWpiyWVo/{playlist_id}/tracks'
  });

  //console.log(spotifyApi);

  spotifyApi.setAccessToken('BQBd2N3hfUjkyi4GxM6LA-IEUhB3mnC7YUt2fGzhL41-acfJv8_NL9GTZoACRjqjFXE4E3R8fy4A0ZNEVUw56hGgSIe3FwvoY4SXT-jysopSDIKkcysoWXyWnzzegylPDxxBOX7G2JLxBiClp9hvSNoiQ0Zbog');

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


this.getListSpotify();