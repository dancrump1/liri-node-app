require("dotenv").config();
var inquirer = require('inquirer');

const spotify = require('./keys').spotify;
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
            // Start of Spotify command
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

                        console.log(userInput);
                        spotify
                        .search({
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
                // End of Spotify command

                // Start of other command
            case 'do-what-it-says':
                console.log("running 2");
                break;
                // End of other command
        }
    });