export const table = (periods) => `
    <table>
        <thead>
            <tr>
                ${
                    periods.map(({ Rep, type, value }) => {
                        const date = new Date(value);
                        const day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'][date.getUTCDay()]

                        return `
                            <th colspan="${Rep.length + 1}" class="table-header-day">
                                ${day}
                            </th>
                        `;
                    }).join('')
                }
            </tr>
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
        </thead>
        <tbody>
        </tbody>
    </table>
`;