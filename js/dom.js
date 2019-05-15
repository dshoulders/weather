import { fetchSitePeriods, fetchRegionalForcast } from './api.js';
import { table } from './templates.js';

const $ = document.querySelector.bind(document);

export const populateLocationSelector = locations => {
    const selector = $('#location-selector');

    locations.forEach(location => {
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(location.name));
        option.value = location.id;
        selector.appendChild(option);
    });    
}

export const attachButtonListener = () => {
    const button = $('#submit-selection');
    button.addEventListener('click', () => {
        const selectedSiteId = $('#location-selector').value;

        fetchSitePeriods(selectedSiteId).then(displaySitePeriods);
        fetchRegionalForcast(selectedSiteId).then(displayRegionalForcast);
    });
}

export const setBackground = photoId => {
    const html = $('html');

    html.style.backgroundImage = 'url("images/cloudy.jpg")'
}

const displaySitePeriods = ({ params, periods }) => {
    const forcast = $('#forcast');


    const tableHTML = table(periods);

    forcast.innerHTML = tableHTML;
}

const displayRegionalForcast = ({ params, periods }) => {

}
