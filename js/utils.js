export const significantWeathers = {
  0: 'Clear night',
  1: 'Sunny day',
  2: 'Partly cloudy (night)',
  3: 'Partly cloudy (day)',
  4: 'Not used',
  5: 'Mist',
  6: 'Fog',
  7: 'Cloudy',
  8: 'Overcast',
  9: 'Light rain shower (night)',
  10: 'Light rain shower (day)',
  11: 'Drizzle',
  12: 'Light rain',
  13: 'Heavy rain shower (night)',
  14: 'Heavy rain shower (day)',
  15: 'Heavy rain',
  16: 'Sleet shower (night)',
  17: 'Sleet shower (day)',
  18: 'Sleet',
  19: 'Hail shower (night)',
  20: 'Hail shower (day)',
  21: 'Hail',
  22: 'Light snow shower (night)',
  23: 'Light snow shower (day)',
  24: 'Light snow',
  25: 'Heavy snow shower (night)',
  26: 'Heavy snow shower (day)',
  27: 'Heavy snow',
  28: 'Thunder shower (night)',
  29: 'Thunder shower (day)',
  30: 'Thunder'
};
export const getImageIdFromSignificantWeatherId = significantWeatherId => significantWeatherId < 2 ? 1 // sunny
: significantWeatherId < 5 ? 2 // part cloudy
: significantWeatherId < 9 ? 3 // cloudy
: significantWeatherId < 22 ? 4 // rain
: significantWeatherId < 28 ? 5 // snow
: 6; // thunder

export const getCurrentMinute = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return hours * 60 + minutes;
};
//# sourceMappingURL=utils.js.map