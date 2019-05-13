
import { API_KEY } from './secrets.js';

const API_BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json';

export const fetchLocations = async () => {
    
    const response = await fetch(`${API_BASE_URL}/sitelist?key=${API_KEY}`);
    const parsedJSON = await response.json();

    return parsedJSON.Locations.Location;
};
