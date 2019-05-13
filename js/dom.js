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

    });
}
