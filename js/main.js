import { fetchLocations } from './api.js';
import { filterDevonLocations } from './data.js';
import { populateLocationSelector, attachButtonListener } from './dom.js'

const init = async () => {
    const allLocations = await fetchLocations();
    const devonLocations = filterDevonLocations(allLocations);
    populateLocationSelector(devonLocations);
    attachButtonListener();
};

init();
