const urlParams = new URLSearchParams(window.location.search);
const API_KEY = urlParams.get('key');
const API_BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json';
export const fetchLocations = async () => {
  const response = await fetch(`${API_BASE_URL}/sitelist?key=${API_KEY}`);
  const parsedJSON = await response.json();
  return parsedJSON.Locations.Location;
};
export const fetchSitePeriods = async locationId => {
  const response = await fetch(`${API_BASE_URL}/${locationId}?res=3hourly&key=${API_KEY}`);
  const parsedJSON = await response.json();
  return {
    periods: parsedJSON.SiteRep.DV.Location.Period,
    params: parsedJSON.SiteRep.Wx.Param
  };
};
//# sourceMappingURL=api.js.map