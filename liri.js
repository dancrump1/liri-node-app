require("dotenv").config();


var userCommand = process.argv[2];



if (userCommand === 'concert-this'){
    var userInput = process.argv[3];
    console.log("test one "+userInput);
    
}
else if (userCommand == 'spotify-this-song'){
    var userInput = process.argv[3];
    const keys = require('./keys');


}
else if (userCommand == 'movie-this'){
    var userInput = process.argv[3];
    console.log("test three "+userInput);

}
else if (userCommand == 'do-what-it-says'){
    var userInput = process.argv[3];
    console.log("test four "+userInput);

}


