export interface Location {
    elevation: string;
    id: string;
    latitude: string;
    longitude: string;
    name: string;
    region: string;
    unitaryAuthArea: string;
}

export const filterDevonLocations = (locations: Location[]): Location[] => {
    return locations.filter((x): boolean => x.unitaryAuthArea === 'Devon');
};
