/**
 * Represents an aircraft visible to ATC.
 */
interface IAtcAircraft {

    aircraftID: string;
    aircraftType: string;

    destination: string;
    location: { lat: number, lng: number };
    groundSpeed: number;

    /**
     * Direction of movement from 0-360deg
     */
    direction: number;

    locationMarker: any;

}