const request = require('request')

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } 
    
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching an IP. Response: ${body}`;
      callback(Error(msg), null);
      return
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  })
};

const fetchMyCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } 

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const {latitude, longitude} = JSON.parse(body).data
    callback(null, {latitude, longitude})
  })
};

module.exports = { 
  fetchMyIP,
  fetchMyCoordsByIP
 };