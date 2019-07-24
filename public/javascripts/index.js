$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myProject']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//First, instantiate the wrapper.
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '62ab6ef97837443b9d88d8e267c458ee',
  clientSecret: '14ea3a1ff18e4840a3808abb824c4797',
  redirectUri: 'http://localhost:8888'
});
spotifyApi.setAccessToken('BQCzNxa321vYCIc36Y8_CY_idGddKZ7cHynE8q4CN3pww6wgUplBzC6j8QVSG2tAZKJjq5pjpCyBUVPFPjmhBp');

api
  .getPlaylistTracks('7LPpNcFdgEPXPBeWpiyWVo', {
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



