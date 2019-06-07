import { Location } from './data.js';

export interface Period {
    Rep: Report[];
    type: string;
    value: string;
}

interface Report {
    D: string;
    F: string;
    G: string;
    H: string;
    Pp: string;
    S: string;
    T: string;
    V: string;
    W: string;
    U: string;
    $: string;
}

export interface SitePeriod {
    periods: Period[];
    params: Param[];
}

interface Param {
    $: string;
    name: string;
    units: string;
}

const urlParams = new URLSearchParams(window.location.search);
const API_KEY = urlParams.get('key');
const API_BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json';

export const fetchLocations = async (): Promise<Location[]> => {
    
    const response = await fetch(`${API_BASE_URL}/sitelist?key=${API_KEY}`);
    const parsedJSON = await response.json();

    return parsedJSON.Locations.Location;
};

export const fetchSitePeriods = async (locationId: string): Promise<SitePeriod> => {
    
    const response = await fetch(`${API_BASE_URL}/${locationId}?res=3hourly&key=${API_KEY}`);
    const parsedJSON = await response.json();

    return { 
        periods: parsedJSON.SiteRep.DV.Location.Period,
        params: parsedJSON.SiteRep.Wx.Param,
    };
};
