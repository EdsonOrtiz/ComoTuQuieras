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

module.exports.getListSpotify =  function(){
  
  const spotifyApi = new SpotifyWebApi({
    clientId: '62ab6ef97837443b9d88d8e267c458ee',
    clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
    
  });
  spotifyApi.setAccessToken('BQD42OOxJd0oAVPHRLNFo8h-MT9NRwo19cSAQK8r_FNVotJc8OlLAJndmMCNBkmojI87e10HVPLwX8oAE6dSJ52c97TP94yUS4pIm-aX_ftbOpNMnsvE0mpWQprpAOXhRE47mfkCegJghkzLkd0ljhBDzRp6PA');

  return spotifyApi
}
  //console.log(spotifyApi);


  //Newbies
  
  module.exports.playlist1= async function(){
    let spotifyApi = this.getListSpotify()
    return new Promise((resolve, reject)=>{
      spotifyApi.getPlaylistTracks('7LPpNcFdgEPXPBeWpiyWVo', {
        fields: 'items(added_at,track(name,album(name),artists(name)))'
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
    }

  //Me & My Lonely Times
  module.exports.playlist2= async function (){
    let spotifyApi = this.getListSpotify()
    return new Promise((resolve, reject)=>{
      spotifyApi.getPlaylistTracks('4MzUktREkMJJsXGn9mFKqi', {
        fields: 'items(added_at,track(name,album(name),artists(name)))'
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
    }

  //Discover Weekly
  module.exports.playlist3= async function (){
    let spotifyApi = this.getListSpotify()
    return new Promise((resolve, reject)=>{
      spotifyApi.getPlaylistTracks('37i9dQZEVXcSrEtYz0h9Zz', {
        fields: 'items(added_at,track(name,album(name),artists(name)))'
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
    }

  //Todays Top Hits
  module.exports.playlist4= async function (){
    let spotifyApi = this.getListSpotify()
    return new Promise((resolve, reject)=>{
      spotifyApi.getPlaylistTracks('37i9dQZF1DXcBWIGoYBM5M', {
        fields: 'items(added_at,track(name,album(name),artists(name)))'
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
    }