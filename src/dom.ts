import { fetchSitePeriods, SitePeriod } from './api.js';
import { Location } from './data.js';
import { table } from './templates.js';
import { getImageIdFromSignificantWeatherId, getCurrentMinute } from './utils.js'; 

const $: (selector: string) => HTMLElement | null = document.querySelector.bind(document);

export const setBackground = (photoId): void => {
    const html = $('html');

    html.style.backgroundImage = `url("images/${photoId}.jpg")`;
}

const displaySitePeriods = ({ periods }: SitePeriod): void => {
    const forcast: HTMLElement = $('.forcast');

    const tableHTML = table(periods);

    forcast.innerHTML = tableHTML;
}

export const showSelectedSiteForcast = async (): Promise<void> => {
    const selectedSiteId = ($('.location-selector') as HTMLSelectElement).value;

    const { params, periods } = await fetchSitePeriods(selectedSiteId);
    const currentMinute = getCurrentMinute();
    // TODO: bug - currentRep could be in next day [1] Reports if current time is late in the day
    const currentRep = periods[1].Rep.find((rep): boolean => {
        const repMinute = parseInt(rep.$)
        // 180 = 3 hour period
        return currentMinute > repMinute && currentMinute < repMinute + 180;
    }); 
    const significantWeatherId = parseInt(currentRep.W);
    const photoId = getImageIdFromSignificantWeatherId(significantWeatherId); 

    displaySitePeriods({ params, periods });
    setBackground(photoId);
}


export const populateLocationSelector = (locations: Location[]): void => {
    const selector: HTMLSelectElement = $('.location-selector') as HTMLSelectElement;
    const exeterId = '351413';

    locations.forEach((location): void => {
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(location.name));
        option.value = location.id;
        selector.appendChild(option);
    });    

    selector.value = exeterId;
}

export const attachButtonListener = (): void => {
    const button = $('.submit-selection');
    button.addEventListener('click', showSelectedSiteForcast);
}

