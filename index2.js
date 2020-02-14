const { nextISSTimeForMyLocation } = require ('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const nextDate = new Date(0);
    nextDate.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${nextDate} for ${duration} seconds!`);
  }
};

nextISSTimeForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes)
  })
  .catch((error) => {
    console.log('It didn\'t work:', error.message);
  });