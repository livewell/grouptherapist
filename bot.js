//testing heroku

var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex = /^\/roll$/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(diceRoll());
    this.res.end();


  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(answer) {
  var botResponse, options, body, botReq;

  //set botresponse based on given / command
  botResponse = "test";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

/**
 * Returns a random number from 1-00
 */
function diceRoll(){
  return (Math.floor((Math.random() * 100) + 1)).toString();
}

exports.respond = respond;