require("dotenv").config();
var spotify = new spotify(keys.spotify);

var userCommand = process.argv[2];

if (userCommand === 'concert-this'){
    var userInput = process.argv[3];
}
else if (userCommand == 'spotify-this-song'){
    var userInput = process.argv[3];
}
else if (userCommand == 'movie-this'){
    var userInput = process.argv[3];
}
else if (userCommand == 'do-what-it-says'){
    var userInput = process.argv[3];
}