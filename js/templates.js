import { getImageIdFromSignificantWeatherId } from './utils.js';



const dayHeaderRow = (periods) => `
    <tr>
    ${
        periods.map(({ Rep, type, value }) => {
            const date = new Date(value);
            const day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'][date.getUTCDay()]

            return `
                <th colspan="${Rep.length}" class="table-header-day">
                    ${day}
                </th>
            `;
        }).join('')
    }
    </tr>
`;

const timeHeaderRow = (periods) => `
    <tr>
    ${
        periods.map(({ Rep, type, value }) => {
            return Rep.map(rep => {                        
                const time = `${rep.$ / 60}:00`;
                return `
                    <th class="table-header-time">
                        ${time}
                    </th>
                `;
            }).join('')
        }).join('')
    }
    </tr>
`;

const iconRow = (periods) => `
    <tr>
    ${
        periods.map(({ Rep, type, value }) => {
            return Rep.map(rep => {
                const imageId = getImageIdFromSignificantWeatherId(rep.W);
                return `
                    <td class="table-cell-icon">
                        <img src="./images/${imageId}.svg" height="24px" width="24px" />
                    </td>
                `;
            }).join('')
        }).join('')
    }
    </tr>
`;

const temperatureRow = (periods) => `
    <tr>
        ${
            periods.map(({ Rep, type, value }) => {
                return Rep.map(rep => {
                    return `
                        <td class="table-cell-temp">
                            ${rep.T}&#8451;
                        </td>
                    `;
                }).join('')
            }).join('')
        }
    </tr>
`;

const rainRow = (periods) => `
    <tr>
    ${
        periods.map(({ Rep, type, value }) => {
            return Rep.map(rep => {
                return `
                    <td class="table-cell-rain">
                        ${rep.Pp}&#37;
                    </td>
                `;
            }).join('')
        }).join('')
    }
    </tr>
`;

export const table = (periods) => `
    <table>
        <thead>
            ${dayHeaderRow(periods)}
            ${timeHeaderRow(periods)}            
        </thead>
        <tbody>
            ${iconRow(periods)} 
            ${temperatureRow(periods)}             
            ${rainRow(periods)}           
        </tbody>
    </table>
`;