import { getImageIdFromSignificantWeatherId } from './utils.js';
import { Period } from './api.js';


const dayHeaderRow = (periods: Period[]): string => `
<tr>
${
    periods.map(({ Rep, value }: Period): string => {
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

const timeHeaderRow = (periods): string => `
<tr>
${
    periods.map(({ Rep }): string => {
        return Rep.map((rep): string => {                        
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

const iconRow = (periods): string => `
<tr>
${
    periods.map(({ Rep }): string => {
        return Rep.map((rep): string => {
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

const temperatureRow = (periods): string => `
<tr>
${
    periods.map(({ Rep }): string => {
        return Rep.map((rep): string => {
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

const rainRow = (periods): string => `
<tr>
${
    periods.map(({ Rep }): string => {
        return Rep.map((rep): string => {
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

export const table = (periods): string => `
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