import { fetchLocations } from './api.js';
import { filterDevonLocations } from './data.js';
import { populateLocationSelector, attachButtonListener, setBackground } from './dom.js'

const init = async () => {
    const allLocations = await fetchLocations();
    const devonLocations = filterDevonLocations(allLocations);
    populateLocationSelector(devonLocations);
    attachButtonListener();
    setBackground();
};

init();
