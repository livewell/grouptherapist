var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var rollRegex = /^\/roll$/;
  var coinRegex = /^\/coinflip$/;

  /** 
  //roll
  if(request.text && rollRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(roll());
    this.res.end();

  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

  //coinflip
  if (request.text && coinRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(coinflip());
    this.res.end();

  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
*/

  if (request.text && rollRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(roll());
    this.res.end();
  }
  else {
    this.res.writeHead(200);
    postMessage("broken");
    console.log("broken");
    this.res.end();
  }

  /* 
    switch (true) {
      case request.text && coinRegex.test(request.text):
        this.res.writeHead(200);
        postMessage(coinflip());
        this.res.end();
        break;
      default:
        this.res.writeHead(200);
        postMessage("broken");
        postMessage(request.text);
        postMessage(coinRegex.test(request.text));
        this.res.end();
        break;
    }
  
  */
}

function postMessage(answer) {
  var botResponse, options, body, botReq;

  //set botresponse based on given / command
  botResponse = answer;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id": botID,
    "text": botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function (res) {
    if (res.statusCode == 202) {
      //neat
    } else {
      console.log('rejecting bad status code ' + res.statusCode);
    }
  });

  botReq.on('error', function (err) {
    console.log('error posting message ' + JSON.stringify(err));
  });
  botReq.on('timeout', function (err) {
    console.log('timeout posting message ' + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

//----------------Logic for Commands-------------------------//

/**
 * Returns a random number from 1-100
 */
function roll() {
  return (Math.floor((Math.random() * 100) + 1)).toString();
}

/**
 * Returns heads or tails
 */
function coinflip() {
  if ((Math.floor((Math.random() * 2) + 1) === 2)) {
    return "Heads";
  }
  else return "Tails";
}

/**
 * Match respond with given command to find proper answer
 */
function findResponse(request, botRegex, answer) {
  if (request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(answer);
    this.res.end();

  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
exports.respond = respond;