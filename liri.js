require("dotenv").config();
var inquirer = require('inquirer');


var userInput;
var userCommand;

var request = require('request');
var fs = require('fs');

inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        choices: ['spotify-this-song', 'do-what-it-says'],
        name: "choice"
    }, ])
    .then(function (inquirerResponse) {
        userCommand = inquirerResponse.choice;

        switch (userCommand) {
            case 'spotify-this-song':
                console.log("running");
                inquirer.prompt([{
                            type: "input",
                            message: "What song would you like to search for?",
                            name: "search"
                        },

                    ])
                    .then(function (inquirerResponse) {
                        userInput = inquirerResponse.search;
                        const keys = require('./keys');
                        console.log(userInput);
                        keys.spotify
                            .search(userInput, {
                                type: 'track',
                                query: userInput,
                                limit: '1'
                            })
                            .then(function (response) {
                                console.log(`The artist's name is: ${response.tracks.items[0].artists[0].name}${"\n"}The songs title is: ${response.tracks.items[0].name}${"\n"}The link to the song is: ${response.tracks.items[0].external_urls.spotify}${"\n"}The album name is: ${response.tracks.items[0].album.name}`);
                            })
                            .catch(function (err) {
                                console.log(err);
                                console.log("error")
                            });
                    })

                break;
            case 'do-what-it-says':
                console.log("running 2");
                break;
        }
    });





// if (userCommand === 'concert-this'){
//     console.log("test one "+userInput);

// }
// else if (userCommand == 'spotify-this-song'){
//     var userInput = process.argv[3];


// }
// else if (userCommand == 'movie-this'){
//     var userInput = process.argv[3];
//     console.log("test three "+userInput);

// }
// else if (userCommand == 'do-what-it-says'){
//     var userInput = process.argv[3];
//     console.log("test four "+userInput);

// }