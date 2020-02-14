const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP } = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It Didn\'t Work!', error);
    return;
  }

  console.log('It worked! Return IP:', ip);
});

fetchMyCoordsByIP('66.207.199.230', (error, coords) => {
  if (error) {
    console.log(error);
  }

  console.log('It worked! Return: ', coords);
});

fetchISSFlyOverTimes({latitude: '43.63830', longitude: '-79.43010'}, (error, passTimes) => {
  if (error) {
    console.log(error);
  }

  console.log('It Worked! Return', passTimes);
});