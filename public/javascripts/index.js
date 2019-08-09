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

//Newbies
axios.get('http://localhost:3000/api/Newbies').then(res=>{

        for(let i=0;i<res.data.info.length;i++){
          var add_date = res.data.info[i].added_at;
          add_date = add_date.substr(0, add_date.length - 10);

          var title = res.data.info[i].track.name;
          var album = res.data.info[i].track.album.name;   
          
          for(k = 0; k<res.data.info[i].track.artists.length; k++){
         
            var artist= ""; 
            while(k<res.data.info[i].track.artists.length){
              
              artist+=res.data.info[i].track.artists[k].name+", ";
              k++;
            }
            artist = artist.substr(0, artist.length - 2);           
          }

          var list = document.createElement('tr')
          list.innerHTML= "<td>"+title+"</td><td>"+artist+"</td><td>"+album+"</td><td>"+add_date+"</td>";
          document.getElementById('tracklist1').appendChild(list);
          //console.log(title+" | "+artist+" | "+album+" | "+add_date);
          $(document).ready(function() {
            $('#play1').DataTable();
          });
        }       
    })

//Me & My Lonely Times
axios.get('http://localhost:3000/api/Me&MyLonelyTimes').then(res=>{

    for(let i=0;i<res.data.info.length;i++){
      var add_date = res.data.info[i].added_at;
      add_date = add_date.substr(0, add_date.length - 10);

      var title = res.data.info[i].track.name;
      var album = res.data.info[i].track.album.name;   
      
      for(k = 0; k<res.data.info[i].track.artists.length; k++){
      
        var artist= ""; 
        while(k<res.data.info[i].track.artists.length){
          
          artist+=res.data.info[i].track.artists[k].name+", ";
          k++;
        }
        artist = artist.substr(0, artist.length - 2);           
      }

      var list = document.createElement('tr')
      list.innerHTML= "<td>"+title+"</td><td>"+artist+"</td><td>"+album+"</td><td>"+add_date+"</td>";
      document.getElementById('tracklist2').appendChild(list);
      $(document).ready(function() {
        $('#play2').DataTable();
      });
    }       
})

//Discover Weekly
axios.get('http://localhost:3000/api/DiscoverWeekly').then(res=>{

    for(let i=0;i<res.data.info.length;i++){
      var add_date = res.data.info[i].added_at;
      add_date = add_date.substr(0, add_date.length - 10);

      var title = res.data.info[i].track.name;
      var album = res.data.info[i].track.album.name;   
      
      for(k = 0; k<res.data.info[i].track.artists.length; k++){
      
        var artist= ""; 
        while(k<res.data.info[i].track.artists.length){
          
          artist+=res.data.info[i].track.artists[k].name+", ";
          k++;
        }
        artist = artist.substr(0, artist.length - 2);           
      }

      var list = document.createElement('tr')
      list.innerHTML= "<td>"+title+"</td><td>"+artist+"</td><td>"+album+"</td><td>"+add_date+"</td>";
      document.getElementById('tracklist3').appendChild(list);
      $(document).ready(function() {
        $('#play3').DataTable();
      });
    }       
})

//Todays Top Hits
axios.get('http://localhost:3000/api/TodaysTopHits').then(res=>{

    for(let i=0;i<res.data.info.length;i++){
      var add_date = res.data.info[i].added_at;
      add_date = add_date.substr(0, add_date.length - 10);

      var title = res.data.info[i].track.name;
      var album = res.data.info[i].track.album.name;   
      
      for(k = 0; k<res.data.info[i].track.artists.length; k++){
      
        var artist= ""; 
        while(k<res.data.info[i].track.artists.length){
          
          artist+=res.data.info[i].track.artists[k].name+", ";
          k++;
        }
        artist = artist.substr(0, artist.length - 2);           
      }

      var list = document.createElement('tr')
      list.innerHTML= "<td>"+title+"</td><td>"+artist+"</td><td>"+album+"</td><td>"+add_date+"</td>";
      document.getElementById('tracklist4').appendChild(list);
      
      $(document).ready(function() {
        $('#play4').DataTable();
      });
    }       
})