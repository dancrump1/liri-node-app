
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify
  .search({ type: 'track', query: 'Boulevard of Broken Dreams', limit: '1'})
  .then(function(response) {
    console.log(response.tracks.items[0].artists[0].name);

    console.log(response.tracks.items[0].name);
    
    console.log(response.tracks.items[0].external_urls.spotify);

    console.log(response.tracks.items[0].album.name);


  })
  .catch(function(err) {
    console.log(err);
  });