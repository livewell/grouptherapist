var HTTPS = require('https');
var cool = require('cool-ascii-faces');

const geocode = require('./weather/geocode.js');
const weather = require('./weather/weather.js');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var rollRegex = /^\/roll$/;
  var coinRegex = /^\/coinflip$/;
  var weather = /^\/weather$/;

  switch (true) {
    case request.text && coinRegex.test(request.text):
      this.res.writeHead(200);
      answer(coinflip());
      this.res.end();
      break;
    case request.text && rollRegex.test(request.text):
      answer(roll());
      break;
    case request.text && weatherRegex.test(request.text):
      answer(weather());
      break;
    default:
      this.res.writeHead(200);
      console.log("broken");
      this.res.end();
      break;
  }

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
 * answers based on given input
 */
function answer(input) {
  postMessage(input);
}

function weather() {
  geocode.geocodeAddress('95121', function (errorMessage, results) {
    if (errorMessage) {
      console.log(errorMessage);
    }

    console.log(results.address)

    weather.getWeather(results.latitude, results.longitude, function (errorMessage, weatherResults) {
      if (errorMessage) {
        console.log(errorMessage);
      }

      console.log(`It is currently : ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
    });
  });
}

exports.respond = respond;