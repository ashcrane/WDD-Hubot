//Description:
// Hubot displays a video of Fresh Prince dancing to Taylor Swift's Shake it Off.
//
//Dependencies
// None
//
//Commands
// Hubot shake it off - Displays a video of The Fresh Prince dancing to Taylor Swift's Shake It Off.
//
// Author
// Ashley Crane
// acrane@fullsail.edu
// Github: ashcrane


// Listens for the phrase fresh dance and calls the function to display the video url/video
module.exports = function (robot) {
    return robot.respond(/shake it off/i, function (msg){
        
        msg.send('https://www.youtube.com/watch?v=pRu3OT_X0Hw');
    });
};