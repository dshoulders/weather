import { fetchSitePeriods } from './api.js';
import { table } from './templates.js';
import { getImageIdFromSignificantWeatherId, getCurrentMinute } from './utils.js';
const $ = document.querySelector.bind(document);
export const populateLocationSelector = locations => {
  const selector = $('.location-selector');
  const exeterId = '351413';
  locations.forEach(location => {
    const option = document.createElement('option');
    option.appendChild(document.createTextNode(location.name));
    option.value = location.id;
    selector.appendChild(option);
  });
  selector.value = exeterId;
};
export const attachButtonListener = () => {
  const button = $('.submit-selection');
  button.addEventListener('click', showSelectedSiteForcast);
};
export const setBackground = photoId => {
  const html = $('html');
  html.style.backgroundImage = `url("images/${photoId}.jpg")`;
};

const displaySitePeriods = ({
  periods
}) => {
  const forcast = $('.forcast');
  const tableHTML = table(periods);
  forcast.innerHTML = tableHTML;
};

export const showSelectedSiteForcast = async () => {
  const selectedSiteId = $('.location-selector').value;
  const {
    params,
    periods
  } = await fetchSitePeriods(selectedSiteId);
  const currentMinute = getCurrentMinute(); // TODO: bug - currentRep could be in next day [1] Reports if current time is late in the day

  const currentRep = periods[1].Rep.find(rep => {
    const repMinute = parseInt(rep.$); // 180 = 3 hour period

    return currentMinute > repMinute && currentMinute < repMinute + 180;
  });
  const significantWeatherId = currentRep.W;
  const photoId = getImageIdFromSignificantWeatherId(significantWeatherId);
  displaySitePeriods({
    params,
    periods
  });
  setBackground(photoId);
};
//# sourceMappingURL=dom.js.map