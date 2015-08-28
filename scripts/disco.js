//Description:
// Hubot displays a gif of a minion dancing to disco.
//
//Dependencies
// None
//
//Commands
// Hubot disco - gif of a disco dancing minion
//
// Author
// Ashley Crane
// acrane@fullsail.edu
// Github: ashcrane


// Listens for the phrase fresh dance and calls the function to display the gif link/gif
module.exports = function (robot) {
    return robot.respond(/disco/i, function (msg){
        
        msg.send('http://giphy.com/gifs/party-despicable-me-minions-haQ2DRRCtIvBu');
    });
};