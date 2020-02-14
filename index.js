const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP } = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');
const {nextISSTimeForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It Didn\'t Work!', error);
//     return;
//   }

//   console.log('It worked! Return IP:', ip);
// });

// fetchMyCoordsByIP('66.207.199.230', (error, coords) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log('It worked! Return: ', coords);
// });

// fetchISSFlyOverTimes({latitude: '43.63830', longitude: '-79.43010'}, (error, passTimes) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log('It Worked! Return', passTimes);
// });

// const printPassTimes = (passTimes) => {
//   for (let i in passTimes) {
//     console.log(i)
//   }
// }

// nextISSTimeForMyLocation((error, passTimes) => {
//   if (error){
//     return console.log('It didn\'t work', error)
//   }

//   printPassTimes(passTimes)
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const nextDate = new Date(0);
    nextDate.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${nextDate} for ${duration} seconds!`);
  }
};

nextISSTimeForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});









