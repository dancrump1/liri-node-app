var Spotify = require('node-spotify-api');

exports.spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
console.log("Connected to Spotify")

