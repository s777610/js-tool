const moment = require('moment');
const momentTz = require('moment-timezone');

const isoToUnix = ({ dateTime, timezone }) => {
  return momentTz.tz(dateTime, 'YYYY-MM-DDTHH:mm:ssZ', timezone).unix();
};

const unixToIso = ({ unix, timezone }) => {
  return momentTz.unix(unix).tz(timezone).format('YYYY-MM-DDTHH:mm:ssZ');
};

const isoDateTime = '2020-07-26T17:43:40-07:00';
const timezone = 'America/New_York';
const unix = 1595810819;

const resultUnix = isoToUnix({ dateTime: isoDateTime, timezone });
const resultIso = unixToIso({ unix, timezone });
console.log({ resultUnix, resultIso });
