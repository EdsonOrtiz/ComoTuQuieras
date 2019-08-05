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

/*
$(document).ready(function() {
  $('#play1').DataTable();
  $('#play2').DataTable();
  $('#play3').DataTable();
  $('#play4').DataTable();
} );

*/
axios.get('http://localhost:3000/api/getList').then(res=>{
        
        for(let i=0;i<res.data.info.length;i++){
          var title = res.data.info[i].track.name;
          //document.getElementById("title").innerHTML;

          var album = res.data.info[i].track.album.name;
          //document.getElementById("album").innerHTML;
          
          for(k = 0; k<res.data.info[i].track.artists.length; k++){
            // var artist=res.data.info[i].track.artists[k].name;
            var artist= ""; 
            while(k<res.data.info[i].track.artists.length){
              artist+=res.data.info[i].track.artists[k].name+", ";
              k++;
              
              
            }
            artist = artist.substring(0, artist.length - 2);
            //console.log(artist);
          }
          
          console.log(title+" | "+artist+" | "+album);
         
          //var songs = document.write("<tr><th>"+title+"</th><th>"+artist+"</th><th>"+album+"</th></tr>");
          //document.getElementById("songs").innerHTML = songs;
        }
    })