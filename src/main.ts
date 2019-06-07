import { fetchLocations } from './api.js';
import { filterDevonLocations, Location } from './data.js';
import { populateLocationSelector, attachButtonListener, showSelectedSiteForcast } from './dom.js'

const init = async (): Promise<void> => {
    const allLocations: Location[] = await fetchLocations();
    const devonLocations = filterDevonLocations(allLocations);
    populateLocationSelector(devonLocations);
    attachButtonListener();
    showSelectedSiteForcast();
};

init();
